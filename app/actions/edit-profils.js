"use server";
import path from "path";
import { unlink, writeFile } from "fs/promises";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const updateProfils = async (id, file, urlFrontEnd) => {
  let instance;
  try {
    instance = await prisma.profil.findFirst({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {}

  let namaFileDiDb;
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
      "/uploads/profils",
      fileName
    );

    // Simpan file ke server
    namaFileDiDb = `/uploads/profils/${fileName}`;
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));
  }

  try {
    const pathToDelete = path.join(process.cwd(), "public", instance.urlFile);
    await unlink(pathToDelete);
  } catch (error) {}

  
  try {
    await prisma.profil.update({
      where: {
        id: parseInt(id),
      },
      data: {
        urlFile: namaFileDiDb,
      },
    });
    revalidatePath("/admin/profil/visi-misi");
    revalidatePath(urlFrontEnd);
  } catch (error) {}
};
