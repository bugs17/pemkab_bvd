"use server";

import { writeFile } from "fs/promises";
import { prisma } from "../lib/db";
import path from "path"
import { revalidatePath } from "next/cache";

export const addFileOpd = async (file, docs, idInstansi, TahunAnggaran) => {
    if (!file) {
        return false
    }

    let pathByFileType = null

    switch (docs) {
        case 'profil':
            pathByFileType = "/file-opd/profil"
            break
        case 'renstra':
            pathByFileType = "/file-opd/renstra"
            break
        case 'renja':
            pathByFileType = "/file-opd/renja"
            break
        case 'lakip':
            pathByFileType = "/file-opd/lakip"
            break
        case 'lppd':
            pathByFileType = "/file-opd/lppd"
            break
        case 'dpa':
            pathByFileType = "/file-opd/dpa"
            break
    
        default:
            break
    }

    try {
        // Modifikasi nama file: hilangkan spasi dan tambahkan timestamp
        const timestamp = Date.now()
        const originalName = file.name.replace(/\s+/g, "") // Hapus semua spasi
        const extension = path.extname(originalName) // Ekstensi file (.jpg, .png, dll)
        const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`
    
        // Tentukan lokasi penyimpanan file
        const filePath = path.join(process.cwd(), pathByFileType, fileName)
    
        // Simpan file ke server
        let namaFileDiDb = `${fileName}`
        if (docs === 'profil') {
            namaFileDiDb = `/uploads/instansi/profil/${fileName}`
        }
        await writeFile(filePath, Buffer.from(await file.arrayBuffer()))
    

        switch (docs) {
            case 'profil':
                await prisma.instansi.update({
                    where:{
                        id:parseInt(idInstansi)
                    },
                    data:{
                        profilUrl:namaFileDiDb
                    }
                })
                break
            case 'renstra':
                await prisma.renstra.create({
                    data:{
                        instansiID:parseInt(idInstansi),
                        periode:TahunAnggaran,
                        urlFile:namaFileDiDb
                    }
                })
                break
            case 'renja':
                await prisma.renja.create({
                    data:{
                        instansiID:parseInt(idInstansi),
                        tahunAnggaran:TahunAnggaran,
                        urlFile:namaFileDiDb
                    }
                })
                break
            case 'lakip':
                await prisma.lakip.create({
                    data:{
                        instansiID:parseInt(idInstansi),
                        tahunAnggaran:TahunAnggaran,
                        urlFile:namaFileDiDb
                    }
                })
                break
            case 'lppd':
                await prisma.lppd.create({
                    data:{
                        instansiID:parseInt(idInstansi),
                        tahunAnggaran:TahunAnggaran,
                        urlFile:namaFileDiDb
                    }
                })
                break
            case 'dpa':
                await prisma.dpa.create({
                    data:{
                        instansiID:parseInt(idInstansi),
                        tahunAnggaran:TahunAnggaran,
                        urlFile:namaFileDiDb
                    }
                })
                break
            default:
                break;
        }
        
        revalidatePath("/admin/setting-instansi")
        revalidatePath("/")
        return true
    } catch (error) {
        console.log("Terjadi error saat add dokumen opd ke server", error.message)
        return false
    }
}