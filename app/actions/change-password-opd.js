"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";


export const changePasswordOpd = async (userId, newPassword) => {
    if (!userId || !newPassword) {
        return false
    }

    try {
        await prisma.userOpd.update({
            where:{
                id:parseInt(userId)
            },
            data:{
                password:newPassword
            }
        })
        revalidatePath('/admin/settings-user/opd')
        return true
    } catch (error) {
        console.log("Terjadi error saat merubah password user opd", error.message)
        return false
    }
}