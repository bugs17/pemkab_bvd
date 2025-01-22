"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";

export const addDigoeltv = async (judul, url, kategori) => {
  try {

    await prisma.digoeltv.create({
      data: {
        judul:judul,
        url:url,
        kategori:kategori
      },
    });
    revalidatePath("/admin/digoel-tv/live-list");
    revalidatePath("/admin/digoel-tv/siaran-tunda-list");
  } catch (error) {
    console.error("gagal add live url", error.message);
  }
};
