"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export const addUnduhan = async (judul, file) => {
  try {
    


    // Modifikasi nama file: hilangkan spasi dan tambahkan timestamp
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, ""); // Hapus semua spasi
    const extension = path.extname(originalName); // Ekstensi file (.jpg, .png, dll)
    const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`;

    // Tentukan lokasi penyimpanan file
    const filePath = path.join(process.cwd(), "/uploads/file-unduhan", fileName);

    // Simpan file ke server
    const namaFileDiDb = `/file-unduhan/${fileName}`
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));


    await prisma.unduhan.create({
      data: {
        judul:judul,
        urlFile:namaFileDiDb
      },
    });
    revalidatePath("/admin/unduhan/unduhan-list");
  } catch (error) {
    console.error("gagal add unduhan", error.message);
  }
};
