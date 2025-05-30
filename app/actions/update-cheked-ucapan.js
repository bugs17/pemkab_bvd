"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../lib/db"


export const updateShowValue = async (id, value) => {
    try {
        await prisma.ucapan.update({
            where:{
                id:parseInt(id)
            },
            data:{
                show:value
            }
        })
        revalidatePath('/admin/setting-web/ucapan')
    } catch (error) {
        console.log("error saat merubah status show ucapan", error.message)
    }
}