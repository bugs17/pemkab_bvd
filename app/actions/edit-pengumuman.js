"use server";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";
import { createSlug } from "../lib/slugify";

export const editPengumuman = async (judul, file, urlLama, id) => {
  let urlFile = urlLama;
  const slug = createSlug(judul)
  if (file) {
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, ""); // Hapus semua spasi
    const extension = path.extname(originalName); // Ekstensi file (.jpg, .png, .pdf, dll)
    const fileName = `${path.basename(
      originalName,
      extension
    )}-${timestamp}${extension}`;

    // Tentukan lokasi penyimpanan file
    const filePath = path.join(
      process.cwd(),
      "/uploads/file-pengumuman",
      fileName
    );

    // Simpan file ke server
    urlFile = `/uploads/file-pengumuman/${fileName}`;
    await writeFile(filePath, Buffer.from(await file.arrayBuffer()));


    // hapus file yg lama
    // const pathToDelete = path.join(process.cwd(), urlLama);
    // await unlink(pathToDelete)
  }

  try {
    await prisma.pengumuman.update({
      where:{
        id:parseInt(id),
      },
      data:{
            judul:judul,
            urlFile:urlFile,
            slug:slug
        }
    })
    revalidatePath('/admin/pengumuman/pengumuman-list')
  } catch (error) {
    console.log("error add pengumuman dari action")
  }
};
