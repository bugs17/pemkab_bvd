"use server";

import { prisma } from "../lib/db";
import { slugToText } from "../lib/slugify";


export const getRenstra = async (namaInstansi) => {
    try {
        const res = await prisma.instansi.findFirst({
            where:{
                namaInstansi:slugToText(namaInstansi)
            },
            include:{
                renstra:true
            }
        })
        return res
    } catch (error) {
        console.log("Error get renstra di action", error.message)
    }
}