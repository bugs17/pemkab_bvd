"use server";

import path from "path";
import { prisma } from "../lib/db";
import { unlink } from "fs/promises";
import { revalidatePath } from "next/cache";

export const hapusBerita = async (id) => {
  let berita;
  try {
    berita = await prisma.berita.findFirst({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.log(
      `gagal memanggil instance berita dengan id: ${id}, pesanya adalah:`,
      error.message
    );
  }

  if (berita) {
    try {
      const pathToDelete = path.join(process.cwd(), berita.coverUrl);
      await unlink(pathToDelete);
    } catch (error) {
      
    }
  }

  if (berita) {

    try {
      await prisma.berita.delete({
        where: {
          id: parseInt(berita.id),
        },
      });
      revalidatePath("/admin");
      revalidatePath("/");
      revalidatePath("/front");
      revalidatePath("/pages");
      return true;
    } catch (error) {
      console.log(
        `gagal menghapus file gambar / menghapus instance berita denga. judul ${berita.judul}`,
        error.message
      );
      return false

    }
  }
};
