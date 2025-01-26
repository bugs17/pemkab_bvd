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
    const pathToDelete = path.join(process.cwd(), berita.coverUrl);

    try {
      await unlink(pathToDelete);
      await prisma.berita.delete({
        where: {
          id: parseInt(berita.id),
        },
      });
      revalidatePath("/admin");
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
