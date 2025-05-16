import { prisma } from "@/app/lib/db"
import { NextResponse } from "next/server"


export const GET = async (req, {params}) => {

    const instansiID = params.instansiID;

    try {
        const instansi = await prisma.instansi.findFirst({
            where:{
                id:parseInt(instansiID)
            }
        })

        return NextResponse.json({'message':'success', 'instansi':instansi}, {status:200})
    } catch (error) {
        console.log("Error saat mengambil profil instansi ke DB")
        return NextResponse.json({'message':'Internal server error'}, {status:500})
    }
}