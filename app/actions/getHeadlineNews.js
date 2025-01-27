"use server"
import { prisma } from "../lib/db"


export const getHeadlineNews = async () => {
    let datas;
    try {
        datas = await prisma.berita.findMany({
            where:{
                isDraft:false
            },
            orderBy:{
                createdAt:"desc"
            },
            take:6
        })
        console.log("datas", datas);
        return datas || []; // Kembalikan array kosong jika datas adalah undefined
    } catch (error) {
        console.log("error di actions", error.message);
        return []; // Kembalikan array kosong jika terjadi error
    }
}