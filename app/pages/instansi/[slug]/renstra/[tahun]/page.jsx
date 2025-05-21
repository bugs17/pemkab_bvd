"use client"
import { getRenstra } from '@/app/actions/getRenstra'
import BelumAdaData from '@/app/component/clientComponent/belumAdaData'
import PdfViewerComponent from '@/app/component/clientComponent/pdfViewer'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RenstraInstansi = () => {
    const params = useParams()
    const instansiSlug = params.slug
    const tahun = params.tahun

    const [dataRenstra, setDataRenstra] = useState([])
    const [instanceRenstra, setInstanceRenstra] = useState(null)


    useEffect(() => {
      const renstra = async () => {
        const data = await getRenstra(instansiSlug)
        setDataRenstra(data.renstra)
        const filteredRenstra = data.renstra.filter((item) => item.periode === tahun)
        setInstanceRenstra(filteredRenstra)
      }
      renstra()
    }, [])


  return (
    <div className='flex justify-center w-full px-20 py-20 bg-slate-100'>
        {dataRenstra.length > 0 ? (
            <div className=" md:w-[70%] md:p-10">
                <h1 className="text-center font-bold text-2xl mb-4">Renstra {tahun}</h1>
                {instanceRenstra !== null && (
                  <PdfViewerComponent urlPdf={`/uploads/instansi/renstra/${instanceRenstra[0].urlFile}`} />
                )}
            </div>
        ) : (
            <BelumAdaData data={`RENSTRA ${tahun}`} />
        )}
    </div>
  )
}

export default RenstraInstansi