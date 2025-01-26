"use server"
import path from "path";
import { unlink, writeFile } from "fs/promises";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const updateSarana = async (id, file) => {
  
    const objectSarana = {}


    let dataLama;
    try {
      dataLama = await prisma.saranaPrasarana.findFirst({
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
        "/uploads/sarana",
        fileName
      );
      
      objectSarana.urlFile = `/uploads/sarana/${fileName}`;
      
      // Simpan file ke server
      await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
    }



    try {
      
      if (file) {
        const pathToDelete = path.join(process.cwd(), dataLama.urlFile);
        await unlink(pathToDelete);
      }
    } catch (error) {
      
    }



  try {
    await prisma.saranaPrasarana.update({
        where:{
            id:parseInt(id)
        },
        data:objectSarana
    })
    revalidatePath('/admin/sarana-dan-prasarana')
    revalidatePath(dataLama.urlFrontEnd)
  } catch (error) {
    console.log(error.message)
    
  }
  
};
