"use server"

import { prisma } from "../lib/db"
import { revalidatePath } from "next/cache"

export const hapusGalery = async (id) => {
    
    try {
        await prisma.galery.delete({
            where:{
                id:parseInt(id)
            }
        })
        revalidatePath('/admin/galery/foto-list')
        revalidatePath('/admin/galery/video-list')
        revalidatePath('/')
    } catch (error) {
        console.log(`gagal menghapus instance live denga`, error.message)
    }
}