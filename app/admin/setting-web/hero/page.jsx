import ButtonAddHero from '@/app/component/clientComponent/button-add-hero'
import { prisma } from '@/app/lib/db'
import React from 'react'
import { currentUser } from "@clerk/nextjs/server";


const SettingHero = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role
  
    if (role !== "admin-induk") {
      return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }

    let hero = null

    try {
        hero = await prisma.hero.findFirst()
        
    } catch (error) {
        console.log("Error get hero", error.message)
    }

    
  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">User admin website</div>
            <ButtonAddHero />
          </div>
        </div>
        <div className=" overflow-y-auto flex justify-center">
            <div className="w-full max-w-[640px] aspect-video rounded-xl bg-black shadow-md overflow-hidden relative">
            {hero.urlFile !== null && (
                <video
                playsInline
                muted
                className="w-full h-full object-cover"
                autoPlay
                loop
                >
                
                <source
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/uploads/hero/${hero.urlFile}`}
                    type="video/mp4"
                />
                </video>
            )}
            </div>
        </div>
      </>
    </div>
  )
}

export default SettingHero