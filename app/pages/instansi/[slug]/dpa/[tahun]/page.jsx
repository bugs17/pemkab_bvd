"use client"
import { getDpa } from '@/app/actions/getDpa'
import BelumAdaData from '@/app/component/clientComponent/belumAdaData'
import PdfViewerComponent from '@/app/component/clientComponent/pdfViewer'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DpaInstansi = () => {
    const params = useParams()
    const instansiSlug = params.slug
    const tahun = params.tahun

    const [dataDpa, setDataDpa] = useState([])
    const [instanceDpa, setInstanceDpa] = useState(null)


    useEffect(() => {
      const dpa = async () => {
        const data = await getDpa(instansiSlug)
        setDataDpa(data.dpa)
        const filteredDpa = data.dpa.filter((item) => item.tahunAnggaran === tahun)
        setInstanceDpa(filteredDpa)
      }
      dpa()
    }, [])


  return (
    <div className='flex justify-center w-full px-20 py-20 bg-slate-100'>
        {dataDpa.length > 0 ? (
            <div className=" md:w-[70%] md:p-10">
                <h1 className="text-center font-bold text-2xl mb-4">DPA {tahun}</h1>
                {instanceDpa !== null && (
                  <PdfViewerComponent urlPdf={`/uploads/instansi/dpa/${instanceDpa[0].urlFile}`} />
                )}
            </div>
        ) : (
            <BelumAdaData data={`DPA ${tahun}`} />
        )}
    </div>
  )
}

export default DpaInstansi