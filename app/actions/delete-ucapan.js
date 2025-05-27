"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../lib/db"


export const deleteUcapan = async (id) => {
    try {
        await prisma.ucapan.delete({
            where:{
                id:parseInt(id)
            }
        })
        revalidatePath('/admin/setting-web/ucapan')
    } catch (error) {
        console.log("error saat hapus ucapan", error.message)
    }
}