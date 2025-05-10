import Link from 'next/link'
import React from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { prisma } from '@/app/lib/db';
import { truncate } from '@/app/lib/truncKalimat';
import ButtonDeleteUnduhan from '@/app/component/clientComponent/buttonDeleteUnduhan';
import { currentUser } from '@clerk/nextjs/server'

const AdminUnduhanList = async () => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

  const unduhans = await prisma.unduhan.findMany({
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
            href={"/admin/unduhan/add-unduhan"}
            className="font-semibold cursor-pointer hover:text-green-950"
          >
            Tambah Unduhan
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
          
            {unduhans.length > 0 ? (
              unduhans.map((unduhan, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-left">
                  <div className="tooltip z-50" data-tip={unduhan.judul}>
                    {truncate(unduhan.judul,30) }
                  </div>
                  </td>
                  <td className="text-center">{new Date(unduhan.createdAt).toLocaleDateString('id-ID')}</td>
                  
                  
                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div className="tooltip z-50" data-tip="Lihat unduhan">

                    <Link target="_blank" rel="noopener noreferrer" href={`/pages/unduhan/${unduhan.id}`} passHref>
                      <FaEye
                        size={20}
                        className="text-orange-500 cursor-pointer"
                      />
                    </Link>
                  </div>

                  <div className="tooltip tooltip-left z-50" data-tip="Hapus unduhan">
                    <ButtonDeleteUnduhan id={unduhan.id} judul={unduhan.judul} />
                  </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>-</th>
                <td className="text-left">Belum ada unduhan</td>
                <td className="text-center">Belum ada unduhan</td>
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

export default AdminUnduhanList
