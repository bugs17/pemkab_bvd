"use server";

import { prisma } from "../lib/db";
import { slugToText } from "../lib/slugify";


export const getLppd = async (namaInstansi) => {
    try {
        const res = await prisma.instansi.findFirst({
            where:{
                namaInstansi:slugToText(namaInstansi)
            },
            include:{
                lppd:true
            }
        })
        return res
    } catch (error) {
        console.log("Error get lppd di action", error.message)
    }
}