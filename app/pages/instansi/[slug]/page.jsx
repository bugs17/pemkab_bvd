import BelumAdaData from '@/app/component/clientComponent/belumAdaData'
import PdfViewerComponent from '@/app/component/clientComponent/pdfViewer'
import { prisma } from '@/app/lib/db'
import { slugToText } from '@/app/lib/slugify'
import { notFound } from 'next/navigation'
import React from 'react'

const InstansiPage = async ({params}) => {
    const {slug} = await params
    const namaInstansi = slugToText(slug)

    let instansi;

    try {
        instansi = await prisma.instansi.findFirst({
            where:{
                namaInstansi:namaInstansi
            }
        })
    } catch (error) {
        console.log("Terjadi error saat melakukan query instansi", error.message)
    }

    if (!instansi) {
        return notFound()
        
      }



  return (
    <div className='flex justify-center w-full px-20 py-20 bg-slate-100'>
        {instansi.profilUrl === null ? (
            <BelumAdaData data={'profil'} />
        ) : (
            <div className=" md:w-[70%] md:p-10">
                <h1 className="text-center font-bold text-2xl mb-4">PROFIL</h1>
                <PdfViewerComponent urlPdf={instansi.profilUrl} />
            </div>
        )}
    </div>
  )
}

export default InstansiPage