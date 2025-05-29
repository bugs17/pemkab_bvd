"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../lib/db";


export const editKontak = async (id, kolom, value) => {
    if (!id || !kolom || !value) {
        console.log(id,kolom, value)
        return false
    }

    let updateData = {};

    switch (kolom) {
        case 'facebook':
            updateData = {facebook: value}
            break;
        case 'instagram':
            updateData = {instagram: value}
            break;
        case 'twitter':
            updateData = {twitter: value}
            break;
        case 'linkedIn':
            updateData = {linkedIn: value}
            break;
        case 'phone':
            updateData = {phone: value}
            break;
        case 'email':
            updateData = {email: value}
            break;
        case 'alamat':
            updateData = {alamat: value}
            break;
    
        default:
            break;
    }

    try {
        await prisma.kontak.upsert({
            where:{
                id:parseInt(id)
            },
            
            update: updateData,
            create: updateData
        })
        revalidatePath('/admin/setting-web/kontak')
        return true
    } catch (error) {
        console.log("Error update data kontak ke DB", error.message)
        return false
    }

}