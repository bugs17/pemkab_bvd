import ActionButtonForListBerita from '@/app/component/clientComponent/actionButtonForListBerita';
import Link from 'next/link'
import React from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { prisma } from '@/app/lib/db';
import { truncate } from '@/app/lib/truncKalimat';




const AdminPengumuman = async () => {

  const pengumumans = await prisma.pengumuman.findMany({
    orderBy:{
      createdAt:'desc'
    }
  })

  return (
    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <HiPencilSquare size={30} className="text-green-950" />
          <Link
            href={"/admin/pengumuman/add-pengumuman"}
            className="font-semibold cursor-pointer hover:text-green-950"
          >
            Tambah Pengumuman
          </Link>
        </div>
        
      </div>
      <div className="h-full overflow-y-auto">
      <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-center">Tanggal</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
          
            {pengumumans.length > 0 ? (
              pengumumans.map((pengumuman, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-left">
                  <div className="tooltip z-50" data-tip={pengumuman.judul}>
                    {truncate(pengumuman.judul,30) }
                  </div>
                  </td>
                  <td className="text-center">{new Date(pengumuman.createdAt).toLocaleDateString('id-ID')}</td>
                  
                  
                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div className="tooltip z-50" data-tip="Lihat pengumuman">

                    <Link target="_blank" rel="noopener noreferrer" href={`/pages/pengumuman/${pengumuman.slug}`} passHref>
                      <FaEye
                        size={20}
                        className="text-orange-500 cursor-pointer"
                      />
                    </Link>
                  </div>

                  <div className="tooltip z-50" data-tip="Edit pengumuman">
                    <Link href={`/admin/pengumuman/edit-pengumuman/${pengumuman.id}`}>
                      <MdEditDocument
                        size={20}
                        className="text-blue-500 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="tooltip tooltip-left z-50" data-tip="Hapus pengumuman">
                    <ActionButtonForListBerita id={''} judul={''} />
                  </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>-</th>
                <td className="text-left">Belum ada pengumuman</td>
                <td className="text-center">Belum ada pengumuman</td>
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

export default AdminPengumuman

// <tr>
//                 <th>-</th>
//                 <td className="text-left">Belum ada pengumuman</td>
//                 <td className="text-center">Belum ada pengumuman</td>
//                 <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">----</td>
//               </tr>