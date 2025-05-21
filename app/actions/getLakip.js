"use server";

import { prisma } from "../lib/db";
import { slugToText } from "../lib/slugify";


export const getLakip = async (namaInstansi) => {
    try {
        const res = await prisma.instansi.findFirst({
            where:{
                namaInstansi:slugToText(namaInstansi)
            },
            include:{
                lakip:true
            }
        })
        return res
    } catch (error) {
        console.log("Error get lakip di action", error.message)
    }
}