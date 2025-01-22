"use server";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const addKegiatan = async (judul, deskripsi, mulai, selesai) => {
  
  const stringMulai = new Date(mulai)
  const formatedMulai = stringMulai.toISOString()
  

  let formatedSelesai = null
  if (selesai) {
    const stringSelesai = new Date(selesai)
    formatedSelesai = stringSelesai.toISOString()
  }

  try {
    await prisma.kegiatan.create({
        data:{
            judul:judul,
            deskripsi:deskripsi,
            waktuMulai:formatedMulai,
            waktuSelesai:formatedSelesai
        }
    })
    revalidatePath('/admin/kalender/kegiatan-list')
  } catch (error) {
    console.log("error add kegiatan dari action")
  }
};
