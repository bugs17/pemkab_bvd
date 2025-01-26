"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";
import { writeFile } from "fs/promises";
import path from "path";
import { createSlug } from "../lib/slugify";

export const addBerita = async (judul, kategoriId, image, isi, isDraft, tgl) => {
  try {
    // Pastikan parameter file diterima
    if (!image || typeof image !== "object") {
      throw new Error("File gambar tidak valid");
    }

    const stringDate = new Date(tgl)
    const formatedDate = stringDate.toISOString()

    const slug = createSlug(judul)


    // Modifikasi nama file: hilangkan spasi dan tambahkan timestamp
    const timestamp = Date.now();
    const originalName = image.name.replace(/\s+/g, ""); // Hapus semua spasi
    const extension = path.extname(originalName); // Ekstensi file (.jpg, .png, dll)
    const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`;

    // Tentukan lokasi penyimpanan file
    const filePath = path.join(process.cwd(), "/uploads/img-berita", fileName);

    // Simpan file ke server
    const namaFileDiDb = `/uploads/img-berita/${fileName}`
    await writeFile(filePath, Buffer.from(await image.arrayBuffer()));


    await prisma.berita.create({
      data: {
        judul: judul,
        kategoriId: parseInt(kategoriId),
        coverUrl:namaFileDiDb,
        isi:isi,
        isDraft:isDraft,
        createdAt:formatedDate,
        slug: slug
        
      },
    });
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/pages/berita");
  } catch (error) {
    console.error("gagal add berita", error.message);
  }
};
