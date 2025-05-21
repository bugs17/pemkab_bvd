"use server";

const { prisma } = require("../lib/db");


export const getHero = async () => {
    try {
        const res = await prisma.hero.findFirst()
        return res.urlFile
    } catch (error) {
        console.log("Error saat mengambil hero", error.message)
    }
}