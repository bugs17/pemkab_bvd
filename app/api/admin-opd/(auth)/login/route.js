import { prisma } from "@/app/lib/db"
import { NextResponse } from "next/server"


export const POST = async (req) => {
    const body = await req.json()
    const headers = req.headers
    const appKey = headers.get('x-app-key')
    
    const {username, password, instansiID} = body
    const idInstansi = parseInt(instansiID)

    try {
        const user = await prisma.userOpd.findFirst({
            where:{
                username:username,
            },
            include:{
                instansi:{
                    include:{
                        kategoriInstansi:true
                    }
                },
            }
        })

        if (!user || password !== user.password || idInstansi !== user.instansiID || appKey !== process.env.NEXT_PUBLIC_AUTH_HEADER_KEY) {
            console.log('user tidak ditemukan')
            return NextResponse.json({'message':'username atau password salah'}, {status:401})
        }

        const userData = {
            'username': user.username,
            'password':user.password,
            'instansiID':user.instansiID,
            'namaInstansi':user.instansi.namaInstansi,
            'kategoriInstansi':user.instansi.kategoriInstansi.nama
        }

        return NextResponse.json(userData, {status:200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({'message':'username atau password salah'}, {status:401})
    }
    
}