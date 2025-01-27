"use server"
import path from "path";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const addGalery = async (file, judul, url) => {
  
    const objectGalery = {}


    if (judul) {
        objectGalery.judul = judul
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
        "/uploads/galery",
        fileName
      );
      
      objectGalery.urlFile = `/uploads/galery/${fileName}`;
      objectGalery.isFoto = true
      
      // Simpan file ke server
      await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    }else{
      objectGalery.urlFile = url
      objectGalery.isFoto = false
    }





  try {
    await prisma.galery.create({
        data:objectGalery
    })
    revalidatePath('/admin/galery/foto-list')
    revalidatePath('/admin/galery/video-list')
  } catch (error) {
    console.log(error.message)
    
  }
  
};
