import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import CheckedUcapan from '@/app/component/clientComponent/check-ucapan';
import ButtonDeleteUcapan from '@/app/component/clientComponent/delete-ucapan';
import { prisma } from '@/app/lib/db';
import ButtonAddUcapan from '@/app/component/clientComponent/button-add-ucapan';


const Ucapan = async () => {
  
  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role !== "admin-induk") {
      return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

  let ucapan= []

  try {
    ucapan = await prisma.ucapan.findMany()
  } catch (erro) {
    console.log("Terjadi error mengambil list ucapan", erro.message)
  }


  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">Kartu ucapan atau pengumuman</div>
          </div>
          <ButtonAddUcapan />
        </div>
        {/* tabel kontak disini */}
        <div className="h-full overflow-y-auto">
              <table className="table table-xs mb-10">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th className="text-left">Gambar</th>
                      <th className="text-center">Tampilkan</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {ucapan.length > 0 ? (
                      ucapan.map((item, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td className="text-left">
                              <div className="avatar indicator">
                                {item.show ? (
                                  <span className="indicator-item badge badge-success text-white">Aktif</span>
                                ) : (
                                  <span className="indicator-item badge badge-error text-white">Non-aktif</span>
                                )}
                                <div className="h-20 w-20 rounded-lg">
                                  <img
                                    alt="Gambar ucapan"
                                    src={`/api/uploads/ucapan/${item.urlFile}`}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="text-center">
                              <CheckedUcapan id={item.id} show={item.show} />
                            </td>
                            
                            
                            <td className="text-right ">
                                <ButtonDeleteUcapan id={item.id} />
                            </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                          <th>-</th>
                          <td className="text-left">
                            -
                          </td>
                          <td className="text-center">
                            -
                          </td>
                          
                          
                          <td className="text-right ">
                              -
                          </td>
                      </tr>
                    )}
                    
                    
                  </tbody>
                </table>
        </div>
      </>
    </div>
  )
}

export default Ucapan