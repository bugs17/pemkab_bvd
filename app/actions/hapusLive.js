"use server"

import { prisma } from "../lib/db"
import { revalidatePath } from "next/cache"

export const hapusLive = async (id) => {
    
    try {
        await prisma.digoeltv.delete({
            where:{
                id:parseInt(id)
            }
        })
        revalidatePath('/admin/digoel-tv/live-list')
        revalidatePath('/')
        return true
    } catch (error) {
        console.log(`gagal menghapus instance live denga`, error.message)
        return false
    }
}