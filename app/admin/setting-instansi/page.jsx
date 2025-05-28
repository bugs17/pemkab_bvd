import ButtonAddFileOpd from '@/app/component/clientComponent/button-add-file-opd'
import ButtonAddInstansi from '@/app/component/clientComponent/button-add-instansi'
import ButtonDeleteInstansi from '@/app/component/clientComponent/button-delete-instansi'
import { prisma } from '@/app/lib/db'
import React from 'react'

const SettingInstansi = async () => {

    let instansis= []
    let kategoris = []



    try {
        kategoris = await prisma.kategoriInstansi.findMany()
    } catch (error) {
        console.log("Error mengambill data kategori")
    }

    try {
        instansis = await prisma.instansi.findMany()
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
          <ButtonAddInstansi kategoris={kategoris} />
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
                        <tr key={item.id} >    
                            <td className="text-left">
                                {item.namaInstansi}
                            </td>
                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    <ButtonAddFileOpd docs={'profil'} idInstansi={item.id} />
                                </div>
                            </td>

                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    <ButtonAddFileOpd docs={'renstra'} idInstansi={item.id} />
                                </div>
                            </td>
                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    <ButtonAddFileOpd docs={'renja'} idInstansi={item.id} />
                                </div>
                            </td>
                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    <ButtonAddFileOpd docs={'lakip'} idInstansi={item.id} />
                                </div>
                            </td>
                            <td className="text-center">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    <ButtonAddFileOpd docs={'lppd'} idInstansi={item.id} />
                                </div>
                            </td>
                            <td className="text-center ">
                                <div  className='flex w-full flex-row justify-center items-center gap-3'>
                                    <ButtonAddFileOpd docs={'dpa'} idInstansi={item.id} />
                                </div>
                            </td>
                            <td className="text-right ">
                                <ButtonDeleteInstansi instansi={item.namaInstansi} id={item.id} />
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