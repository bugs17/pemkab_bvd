"use server";
import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const editKegiatan = async (judul, deskripsi, mulai, selesai, id) => {
  
  const stringMulai = new Date(mulai)
  const formatedMulai = stringMulai.toISOString()
  

  const stringSelesai = new Date(selesai)
  const formatedSelesai = stringSelesai.toISOString()


  try {
    await prisma.kegiatan.update({
      where:{
        id:parseInt(id)
      },
        data:{
            judul:judul,
            deskripsi:deskripsi,
            waktuMulai:formatedMulai,
            waktuSelesai:formatedSelesai
        }
    })
    revalidatePath('/admin/kalender/kegiatan-list')
  } catch (error) {
    console.log("error edit kegiatan dari action", error.message)
  }
};
