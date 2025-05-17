import { prisma } from "@/app/lib/db"
import { NextResponse } from "next/server"


export async function GET(req, {params}) {
    const headers = req.headers
    const appKey = headers.get('x-app-key')

    const idDpa = params.idDpa

    if (!idDpa || appKey !== process.env.NEXT_PUBLIC_AUTH_HEADER_KEY) {
        return NextResponse.json({'message':'Bad Request'}, {'status':403})
    }

    try {
        await prisma.dpa.delete({
            where:{
                id:parseInt(idDpa)
            }
        })
        return NextResponse.json({'message':'succes'}, {'status':200})
    } catch (error) {
        console.log("Error saat delete dpa dari database")
        return NextResponse.json({'message':'Internal server error'}, {'status':500})
        
    }

}