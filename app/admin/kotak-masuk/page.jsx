import React from 'react'
import { prisma } from '@/app/lib/db';
import { truncate } from '@/app/lib/truncKalimat';
import LihatPesan from '@/app/component/clientComponent/lihatPesan';




const KotakMasuk = async () => {

  const pesans = await prisma.inbox.findMany({
    orderBy:{
      createdAt:'desc'
    }
  })

  return (

    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <span
            className="font-semibold "
          >
            Kotak Masuk
          </span>
        </div>
        
      </div>
      <div className="h-full overflow-y-auto">
      <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Nama</th>
              <th className="text-center">Email</th>
              <th className="text-center">Alamat</th>
              <th className="text-center">Judul</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
          
            {   pesans.length > 0 ? (
                 pesans.map((pesan, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-left">
                  <div className="tooltip z-50" data-tip={pesan.nama}>
                    {truncate(pesan.nama,30) }
                  </div>
                  </td>
                  <td className="text-center">{pesan.email}</td>
                  <td className="text-center">{truncate(pesan.alamat,30) }</td>
                  <td className="text-center">{truncate(pesan.judul,30) }</td>
                  
                  
                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div className="tooltip tooltip-left z-50" data-tip="Lihat pesan">
                    <LihatPesan id={pesan.id} nama={pesan.nama} pesan={pesan.pesan} />
                  </div>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>-</th>
                <td className="text-left">Belum ada pesan</td>
                <td className="text-center">Belum ada pesan</td>
                <td className="text-center">Belum ada pesan</td>
                <td className="text-center">Belum ada pesan</td>
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

export default KotakMasuk
