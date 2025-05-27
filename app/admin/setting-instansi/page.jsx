import ButtonAddFileOpd from '@/app/component/clientComponent/button-add-file-opd'
import ButtonAddUcapan from '@/app/component/clientComponent/button-add-ucapan'
import { prisma } from '@/app/lib/db'
import { CheckCheck, Pencil, X } from 'lucide-react'
import React from 'react'

const SettingInstansi = async () => {

    let instansis= []


    try {
        instansis = await prisma.instansi.findMany({
            include:{
                renstra:true
            }
        })
    } catch (error) {
        console.log("Error mengambill data instansi")
    }

  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">Instansi</div>
          </div>
          <ButtonAddUcapan />
        </div>
        {/* tabel kontak disini */}
        <div className="h-full overflow-y-auto">
              <table className="table table-xs mb-10">
                  <thead>
                    <tr>
                      <th className="text-left">Instansi</th>
                      <th className="text-center">Profil</th>
                      <th className="text-center">Renstra</th>
                      <th className="text-center">Renja</th>
                      <th className="text-center">Lakip</th>
                      <th className="text-center">Lppd</th>
                      <th className="text-center">Dpa</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                  {instansis.length > 0 ? (
                    instansis.map((item, index) => (

                        <tr key={index} >    
                            <td className="text-left">
                                {item.namaInstansi}
                            </td>
                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    {item.profilUrl !== null ? 
                                    <div className="tooltip" data-tip="Data profil sudah ada">
                                        <CheckCheck size={12} className='text-success' /> 
                                    </div>
                                    : 
                                    <div className="tooltip" data-tip="Belum ada data">
                                        <X size={12} className='text-error' />
                                    </div>
                                    }
                                    <ButtonAddFileOpd docs={'profil'} />
                                </div>
                            </td>

                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    {item.renstra.length > 0 ? 
                                    <div className="tooltip" data-tip="Data renstra sudah ada">
                                        <CheckCheck size={12} className='text-success' /> 
                                    </div>
                                    : 
                                    <div className="tooltip" data-tip="Belum ada data">
                                        <X size={12} className='text-error' />
                                    </div>
                                    }
                                    <ButtonAddFileOpd docs={'renstra'} />
                                </div>
                            </td>
                            <td className="text-center">
                                --
                            </td>
                            <td className="text-center">
                                --
                            </td>
                            <td className="text-center">
                                --
                            </td>
                            
                            
                            <td className="text-center ">
                                --
                            </td>
                            <td className="text-right ">
                                --
                            </td>
                        </tr>
                    ))
                  ) : (
                        <tr>    
                            <td className="text-left">
                                --
                            </td>
                            <td className="text-center">
                                --
                            </td>

                            <td className="text-center">
                                --
                            </td>
                            <td className="text-center">
                                --
                            </td>
                            <td className="text-center">
                                --
                            </td>
                            <td className="text-center">
                                --
                            </td>
                            
                            
                            <td className="text-right ">
                                --
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

export default SettingInstansi