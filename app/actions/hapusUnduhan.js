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
        const pathToDelete = path.join(process.cwd(), unduhan.urlFile);

        try {
            await unlink(pathToDelete)
            await prisma.unduhan.delete({
                where:{
                    id:parseInt(unduhan.id)
                }
            })
            revalidatePath('/admin/unduhan/unduhan-list')
        } catch (error) {
            console.log(`gagal menghapus instance unduhan denga. judul ${unduhan.judul}`, error.message)
        }
    }
}