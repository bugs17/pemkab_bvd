
"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../lib/db"

export const addPesan = async (nama, alamat, email, judul, pesan) => {
        try {
            if (nama, alamat, email, judul, pesan) {
                await prisma.inbox.create({
                    data:{
                        nama,
                        alamat,
                        email,
                        judul,
                        pesan
                    }
                })
            }
            revalidatePath("/admin/kotak-masuk")
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
}