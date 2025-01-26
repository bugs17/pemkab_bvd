import { prisma } from "../lib/db"


export const getHeadlineNews = async () => {
    let datas = []
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
    } catch (error) {
        
    }
    return datas
}