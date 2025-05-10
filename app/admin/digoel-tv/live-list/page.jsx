import Link from 'next/link'
import React from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { prisma } from '@/app/lib/db';
import { truncate } from '@/app/lib/truncKalimat';
import ButtonDeleteLive from '@/app/component/clientComponent/buttonDeleteLive';
import { currentUser } from '@clerk/nextjs/server';




const LiveList = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role === "admin-berita") {
    return redirect("/admin");
  }



  const digoeltvs = await prisma.digoeltv.findMany({
    orderBy:{
      createdAt:'desc'
    }
  })

  const liveCategory = digoeltvs.filter(item => item.kategori === 'live');

  return (

    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <HiPencilSquare size={30} className="text-green-950" />
          <Link
            href={"/admin/digoel-tv/add-live"}
            className="font-semibold cursor-pointer hover:text-green-950"
          >
            Tambah Siaran Langsung
          </Link>
        </div>
        
      </div>
      <div className="h-full overflow-y-auto">
      <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-center">Tanggal Upload</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
          
            {liveCategory.length > 0 ? (
                liveCategory.map((instance, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-left">
                  <div className="tooltip z-50" data-tip={instance.judul}>
                    {truncate(instance.judul,30) }
                  </div>
                  </td>
                  <td className="text-center">{new Date(instance.createdAt).toLocaleDateString('id-ID')}</td>
                  
                  
                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div className="tooltip z-50" data-tip="Lihat Siaran Langsung">

                    <Link target="_blank" rel="noopener noreferrer" href={`${instance.url}`} passHref>
                      <FaEye
                        size={20}
                        className="text-orange-500 cursor-pointer"
                      />
                    </Link>
                  </div>

                  <div className="tooltip tooltip-left z-50" data-tip="Hapus Siaran Langsung">
                    <ButtonDeleteLive id={instance.id} judul={instance.judul} />
                  </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>-</th>
                <td className="text-left">Belum ada siaran langsung</td>
                <td className="text-center">Belum ada siaran langsung</td>
                <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  
                  ----
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LiveList
