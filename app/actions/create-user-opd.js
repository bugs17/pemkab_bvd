"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";


export const createUserOpd = async (username, password, instansiID) => {
    if (!username || !password || !instansiID) {
        console.log("Parameter user opd tidak lengkap")
        return false
    }

    try {
        await prisma.userOpd.create({
            data:{
                username,
                password,
                instansiID:parseInt(instansiID)
            }
        })
        revalidatePath('/admin/settings-user/opd')
        return true
    } catch (error) {
        console.log("Error saat create user opd ke database", error.message)
        return false
    }
}