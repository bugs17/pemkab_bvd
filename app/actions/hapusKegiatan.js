"use server"

import { prisma } from "../lib/db"
import { revalidatePath } from "next/cache"

export const hapusKegiatan = async (id) => {
    

    try {
        await prisma.kegiatan.delete({
            where:{
                id:parseInt(id)
            }
        })
        revalidatePath('/admin/kalender/kegiatan-list')
        revalidatePath('/')
        revalidatePath('/pages')
        revalidatePath('/front')
        return true
    } catch (error) {
        console.log(`gagal menghapus instance kegiatan denga.`)
        return false
    }
}