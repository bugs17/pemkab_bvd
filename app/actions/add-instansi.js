"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";



export const addInstansi = async (namaInstansi, idKategori) => {
    if (!namaInstansi || !idKategori) {
        return false
    }

    try {
        await prisma.instansi.create({
            data:{
                namaInstansi:namaInstansi,
                kategoriInstansiID:parseInt(idKategori)
            }
        })
        revalidatePath('/admin/setting-instansi')
        return true
    } catch (error) {
        console.log("Error add instansi ke database", error.message)
        return false
    }
}