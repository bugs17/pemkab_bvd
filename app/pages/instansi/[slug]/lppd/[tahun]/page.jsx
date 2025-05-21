"use client"
import { getLppd } from '@/app/actions/getLppd'
import BelumAdaData from '@/app/component/clientComponent/belumAdaData'
import PdfViewerComponent from '@/app/component/clientComponent/pdfViewer'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const LppdInstansi = () => {
    const params = useParams()
    const instansiSlug = params.slug
    const tahun = params.tahun

    const [dataLppd, setDataLppd] = useState([])
    const [instanceLppd, setInstanceLppd] = useState(null)


    useEffect(() => {
      const lppd = async () => {
        const data = await getLppd(instansiSlug)
        setDataLppd(data.lppd)
        const filteredLppd = data.lppd.filter((item) => item.tahunAnggaran === tahun)
        setInstanceLppd(filteredLppd)
      }
      lppd()
    }, [])


  return (
    <div className='flex justify-center w-full px-20 py-20 bg-slate-100'>
        {dataLppd.length > 0 ? (
            <div className=" md:w-[70%] md:p-10">
                <h1 className="text-center font-bold text-2xl mb-4">LPPD {tahun}</h1>
                {instanceLppd !== null && (
                  <PdfViewerComponent urlPdf={`/uploads/instansi/lppd/${instanceLppd[0].urlFile}`} />
                )}
            </div>
        ) : (
            <BelumAdaData data={`LPPD ${tahun}`} />
        )}
    </div>
  )
}

export default LppdInstansi