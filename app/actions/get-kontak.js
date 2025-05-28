"use server";

import { prisma } from "../lib/db";


export const getKotak = async () => {
    try {
        const data = await prisma.kontak.findFirst()
        if (data) {
            return {'status':true, 'data':data}
        }
    } catch (error) {
        return {'status':false}
        
    }
}