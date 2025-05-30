import MenuInstansiDaerah from '@/app/component/menuInstansiDaerah'
import { slugToText } from '@/app/lib/slugify'
import { notFound } from 'next/navigation'
import React from 'react'

const InstansiLayout = async ({children, params}) => {
  
  const {slug} = await params

  if (!slug) {
    return notFound()
  }

  return (
    <div className='w-full'>
        <div className='h-32 w-full text-center justify-center items-center flex shadow-sm bg-white bg-[linear-gradient(to_right,#F871710a_3px,transparent_3px),linear-gradient(to_bottom,#F871710a_3px,transparent_3px)] bg-[size:14px_24px]'>
          <span className='font-loritalic text-center lg:text-3xl '>{slugToText(slug).toUpperCase()}</span>
        </div>
        <MenuInstansiDaerah instansi={slug} />
        <div>{children}</div>
    </div>
  )
}


export default InstansiLayout

{/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
</div> */}