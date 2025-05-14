// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }


import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const handleClerk = clerkMiddleware()
const isClerkRoute = createRouteMatcher(['/admin(.*)'])

export function middleware(req) {
  const { pathname } = req.nextUrl

  // Middleware Clerk untuk /admin/**
  if (isClerkRoute(req)) {
    return handleClerk(req)
  }

  // Middleware lokal untuk /admin-opd/**
  if (pathname.startsWith('/admin-opd')) {
    const token = req.cookies.get('status')?.value

    if (!token || token !== 'authenticated') {
      if (pathname !== '/admin-opd') {
        return NextResponse.redirect(new URL('/admin-opd', req.url))
      }
    } else {
      if (pathname === '/admin-opd') {
        return NextResponse.redirect(new URL('/admin-opd/dashboard', req.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/admin/:path*',
    '/admin-opd/:path*',
    '/api/:path*',
  ],
}
