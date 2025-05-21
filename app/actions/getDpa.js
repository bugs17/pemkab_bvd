"use server";

import { prisma } from "../lib/db";
import { slugToText } from "../lib/slugify";


export const getDpa = async (namaInstansi) => {
    try {
        const res = await prisma.instansi.findFirst({
            where:{
                namaInstansi:slugToText(namaInstansi)
            },
            include:{
                dpa:true
            }
        })
        return res
    } catch (error) {
        console.log("Error get dpa di action", error.message)
    }
}