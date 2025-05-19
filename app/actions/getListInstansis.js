"use server";

import { prisma } from "../lib/db";



export const getListInstansis = async () => {
    try {
        const datas = await prisma.instansi.findMany({
            include:{
                kategoriInstansi:true
            }
        })
        const filteredDaerahs = datas.filter((item) => item.kategoriInstansi.nama === 'dinas daerah' )
        const filteredTeknis = datas.filter((item) => item.kategoriInstansi.nama === 'lembaga teknis' )
        const filteredSekretariats = datas.filter((item) => item.kategoriInstansi.nama === 'sekretariat' )

        return {
            'status': true,
            'filteredDaerahs': filteredDaerahs,
            'filteredTeknis': filteredTeknis,
            'filteredSekretariats': filteredSekretariats
        }
    } catch (error) {
        console.log("Error mengambil data list instansi", error.message)
        return {
            'status': false,
            
        }
    }
}