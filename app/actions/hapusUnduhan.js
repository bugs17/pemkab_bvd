"use server"

import path from "path"
import { prisma } from "../lib/db"
import {unlink} from 'fs/promises'
import { revalidatePath } from "next/cache"

export const hapusUnduhan = async (id) => {
    let unduhan
    try {
        unduhan = await prisma.unduhan.findFirst({
            where:{
                id:parseInt(id)
            }
        })
        
        
    } catch (error) {
        console.log(`gagal memanggil instance unduhan dengan id: ${id}, pesanya adalah:`, error.message)
    }

    if (unduhan) {
        try {
            const pathToDelete = path.join(process.cwd(), unduhan.urlFile);
            await unlink(pathToDelete)
        } catch (error) {
            
        }
    }

    if (unduhan) {

        try {
            await prisma.unduhan.delete({
                where:{
                    id:parseInt(unduhan.id)
                }
            })
            revalidatePath('/admin/unduhan/unduhan-list')
            revalidatePath('/')
            revalidatePath('/pages')
            return true
        } catch (error) {
            console.log(`gagal menghapus instance unduhan denga. judul ${unduhan.judul}`, error.message)
            return false
        }
    }
}