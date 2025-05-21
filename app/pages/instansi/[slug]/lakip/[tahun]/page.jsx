"use client"
import { getLakip } from '@/app/actions/getLakip'
import BelumAdaData from '@/app/component/clientComponent/belumAdaData'
import PdfViewerComponent from '@/app/component/clientComponent/pdfViewer'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const LakipInstansi = () => {
    const params = useParams()
    const instansiSlug = params.slug
    const tahun = params.tahun

    const [dataLakip, setDataLakip] = useState([])
    const [instanceLakip, setInstanceLakip] = useState(null)


    useEffect(() => {
      const lakip = async () => {
        const data = await getLakip(instansiSlug)
        setDataLakip(data.lakip)
        const filteredLakip = data.lakip.filter((item) => item.tahunAnggaran === tahun)
        setInstanceLakip(filteredLakip)
      }
      lakip()
    }, [])


  return (
    <div className='flex justify-center w-full px-20 py-20 bg-slate-100'>
        {dataLakip.length > 0 ? (
            <div className=" md:w-[70%] md:p-10">
                <h1 className="text-center font-bold text-2xl mb-4">Lakip {tahun}</h1>
                {instanceLakip !== null && (
                  <PdfViewerComponent urlPdf={`/uploads/instansi/lakip/${instanceLakip[0].urlFile}`} />
                )}
            </div>
        ) : (
            <BelumAdaData data={`LAKIP ${tahun}`} />
        )}
    </div>
  )
}

export default LakipInstansi