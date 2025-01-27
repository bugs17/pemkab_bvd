"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";
import { unlink, writeFile } from "fs/promises";
import path from "path";
import { createSlug } from "../lib/slugify";

export const editBerita = async (judul, kategoriId, isi, isDraft, tgl, id, newCover, coverUrl, image) => {
  try {
    

    const stringDate = new Date(tgl)
    const formatedDate = stringDate.toISOString()

    const slug = createSlug(judul)


    let namaFileDiDb = coverUrl
    if (newCover) {
        // hapus cover lama terlebih dahulu
        const pathToDelete = path.join(process.cwd(), coverUrl);
        await unlink(pathToDelete)
        // Modifikasi nama file: hilangkan spasi dan tambahkan timestamp
        const timestamp = Date.now();
        const originalName = image.name.replace(/\s+/g, ""); // Hapus semua spasi
        const extension = path.extname(originalName); // Ekstensi file (.jpg, .png, dll)
        const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`;
    
        // Tentukan lokasi penyimpanan file
        const filePath = path.join(process.cwd(), "uploads/img-berita", fileName);
    
        // Simpan file ke server
        namaFileDiDb = `/uploads/img-berita/${fileName}`
        await writeFile(filePath, Buffer.from(await image.arrayBuffer()));
    }


    await prisma.berita.update({
        where:{
            id:parseInt(id)
        },
        data:{
            judul:judul,
            kategoriId:parseInt(kategoriId),
            isDraft:isDraft,
            createdAt:formatedDate,
            slug:slug,
            isi:isi,
            coverUrl:namaFileDiDb

        }
    })
    revalidatePath("/admin");
  } catch (error) {
    console.error("gagal add berita", error);
  }
};
