"use server"

import path from "path"
import { prisma } from "../lib/db"
import {unlink} from 'fs/promises'
import { revalidatePath } from "next/cache"

export const hapusPengumuman = async (id) => {
    let pengumuman
    try {
        pengumuman = await prisma.pengumuman.findFirst({
            where:{
                id:parseInt(id)
            }
        })
        
        
    } catch (error) {
        console.log(`gagal memanggil instance pengumuman dengan id: ${id}, pesanya adalah:`, error.message)
    }

    if (pengumuman) {
        const pathToDelete = path.join(process.cwd(), pengumuman.urlFile);
        await unlink(pathToDelete)
    }

    if (pengumuman) {

        try {
            await prisma.pengumuman.delete({
                where:{
                    id:parseInt(pengumuman.id)
                }
            })
            revalidatePath('/admin/pengumuman/pengumuman-list')
            revalidatePath('/')
            revalidatePath('/pages')
        } catch (error) {
            console.log(`gagal menghapus file gambar / menghapus instance pengumuman denga. judul ${pengumuman.judul}`, error.message)
        }
    }
}