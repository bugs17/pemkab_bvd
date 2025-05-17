import { prisma } from "@/app/lib/db";
import { mkdir, writeFile } from "fs/promises";
import { NextResponse } from "next/server"
import path from "path";

// profil
export async function POST(req, {params}){

    try {
        const instansiID = params.instansiID
        const formData = await req.formData()
        const file = formData.get("file")

        if (!file || typeof file === "string") {
            return NextResponse.json({ message: "File tidak valid" }, { status: 400 })
        }

        // Ambil isi file sebagai Buffer
        const buffer = Buffer.from(await file.arrayBuffer())

        // Persiapkan nama file unik
        const timestamp = Date.now()
        const originalName = file.name.replace(/\s+/g, "")
        const extension = path.extname(originalName)
        const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`

        // Path final
        const folderPath = path.join(process.cwd(), "file-opd", "profil")
        const filePath = path.join(folderPath, fileName)
        const namaFileDiDb = `/file-opd/profil/${fileName}`

        // Pastikan folder ada
        await mkdir(folderPath, { recursive: true })

        // Simpan file ke server
        // Simpan file ke server
        await writeFile(filePath, buffer)

        await prisma.instansi.update({
            where:{
                id:parseInt(instansiID)
            },
            data:{
                profilUrl:namaFileDiDb
            }
        })
        return NextResponse.json({'message':'success'}, {status:201})
    } catch (error) {
        console.log("Error saat melakukan write file profile dan simpan ke DB")
        return NextResponse.json({'message':'Internal server error, coba lagi'}, {status:500})
    }

}