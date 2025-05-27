"use server";

import { writeFile } from "fs/promises";
import { prisma } from "../lib/db";
import path from "path"
import { revalidatePath } from "next/cache";

export const addFileOpd = async (file, docs) => {
    if (!file) {
        return false
    }

    try {
        // Modifikasi nama file: hilangkan spasi dan tambahkan timestamp
        const timestamp = Date.now()
        const originalName = file.name.replace(/\s+/g, "") // Hapus semua spasi
        const extension = path.extname(originalName) // Ekstensi file (.jpg, .png, dll)
        const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`
    
        // Tentukan lokasi penyimpanan file
        const filePath = path.join(process.cwd(), "/file-opd/hero", fileName)
    
        // Simpan file ke server
        const namaFileDiDb = `${fileName}`
        await writeFile(filePath, Buffer.from(await file.arrayBuffer()))
    
        await prisma.hero.upsert({
            where:{
                id:1
            },
            update:{
                urlFile:namaFileDiDb
            },
            create:{
                urlFile:namaFileDiDb
            }
        })
        revalidatePath("/admin/setting-web/hero")
        revalidatePath("/")
        return true
    } catch (error) {
        console.log("Terjadi error saat add video hero ke server", error.message)
        return false
    }
}