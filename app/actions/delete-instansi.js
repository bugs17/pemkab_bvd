"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";


export const deleteInstansi = async (id) => {
    try {
        await prisma.instansi.delete({
            where:{
                id:parseInt(id)
            }
        })
        revalidatePath('/admin/setting-instansi')
    } catch (error) {
        console.log("Error delete instansi", error.message)
    }
}