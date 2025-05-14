import { prisma } from "@/app/lib/db"
import { NextResponse } from "next/server"


export const GET = async (req) => {

    try {
        const instansis = await prisma.instansi.findMany()
        if (instansis.length > 0) {
            return NextResponse.json(
                {'message':'success', 'instansis':instansis},
                {status:200}
            )
        }
    } catch (error) {
        console.log("error", error.message)
        return NextResponse.json({'message':'Internal server error'}, {status:500})
    }

    
}