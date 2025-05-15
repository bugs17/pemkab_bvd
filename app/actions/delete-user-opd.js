"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";


export const deleteUserOpd = async (userId) => {
    if (!userId) {
        return false
    }

    try {
        await prisma.userOpd.delete({
            where:{
                id:parseInt(userId)
            }
        })
        revalidatePath('/admin/settings-user/opd')
        return true
    } catch (error) {
        console.log("Terjadi error saat delete user opd", error.message)
        return false
    }
}