"use server"
import path from "path";
import { unlink, writeFile } from "fs/promises";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const updatePejabat = async (id, file, nama, jabatan) => {
  
    const objectPejabat = {}

    if (nama) {
      objectPejabat.nama = nama
    }

    if (jabatan) {
      objectPejabat.jabatan = jabatan
    }

    let dataLama;
    try {
      dataLama = await prisma.pejabat.findFirst({
        where:{
          id:parseInt(id)
        }
      })
    } catch (error) {
      console.log(error.message)
    }

    
    if (file) {
      // Modifikasi nama file: hilangkan spasi dan tambahkan timestamp
      const timestamp = Date.now();
      const originalName = file.name.replace(/\s+/g, ""); // Hapus semua spasi
      const extension = path.extname(originalName); // Ekstensi file (.jpg, .png, dll)
      const fileName = `${path.basename(
        originalName,
        extension
      )}-${timestamp}${extension}`;
      
      // Tentukan lokasi penyimpanan file
      const filePath = path.join(
        process.cwd(),
        "/uploads/pejabat",
        fileName
      );
      
      objectPejabat.urlFoto = `/uploads/pejabat/${fileName}`;
      
      // Simpan file ke server
      await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    }



    try {
      
      if (file) {
        const pathToDelete = path.join(process.cwd(), dataLama.urlFoto);
        await unlink(pathToDelete);
      }
    } catch (error) {
      
    }



  try {
    await prisma.pejabat.update({
        where:{
            id:parseInt(id)
        },
        data:objectPejabat
    })
    revalidatePath('/admin/pejabat')
    revalidatePath(dataLama.urlFrontEnd)
  } catch (error) {
    console.log(error.message)
    
  }
  
};
