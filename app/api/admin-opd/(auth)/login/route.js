import { prisma } from "@/app/lib/db"
import { NextResponse } from "next/server"


export const POST = async (req) => {
    const body = await req.json()
    
    const {username, password, instansiID} = body
    const idInstansi = parseInt(instansiID)

    try {
        const user = await prisma.userOpd.findFirst({
            where:{
                username:username
            }
        })

        if (!user || password !== user.username || idInstansi !== user.instansiID) {
            console.log('user tidak ditemukan')
            return NextResponse.json({'message':'username atau password salah'}, {status:401})
        }

        const userData = {
            username: user.username,
            password:user.password,
            instansiID:user.instansiID
        }

        const response = NextResponse.json(userData, {status:200})
        response.cookies.set('status', 'authenticated', {
            httpOnly: true,
            secure: false,
            path: '/admin-opd',
            maxAge: 60 * 60 * 24,
        })

        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json({'message':'username atau password salah'}, {status:401})
    }
    
}