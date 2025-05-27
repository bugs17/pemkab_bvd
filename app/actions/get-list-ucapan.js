"use server";

import { prisma } from "../lib/db";


export const getListUcapan = async () => {
    try {
        const res = await prisma.ucapan.findMany({
            where:{
                show:true
            }
        })
        return {status:true, data:res}
    } catch (error) {
        console.log("Gagal mengambil data list ucapan", error.message)
        return {status:false}
    }
}