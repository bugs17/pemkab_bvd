import { prisma } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function GET(req, {params}) {
    const instansiID = params.instansiID;

    try {
        const listRenja = await prisma.renja.findMany({
            where:{
                instansiID:parseInt(instansiID)
            }
        })

        return NextResponse.json({'message':'success', 'listRenja':listRenja}, {'status':200})
    } catch (error) {
        return NextResponse.json({'message':'Internal server error'}, {'status':500})
    }
}