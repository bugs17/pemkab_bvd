import ButtonChangePassword from '@/app/component/clientComponent/button-change-password'
import ButtonAddUserOpd from '@/app/component/clientComponent/button-user-opd'
import { prisma } from '@/app/lib/db'
import { truncate } from '@/app/lib/truncKalimat'
import { currentUser } from "@clerk/nextjs/server";

import React from 'react'

const Opd = async () => {

    const user = await currentUser()
    const role = user.publicMetadata?.role
    
    if (role !== "admin-induk") {
        return <div className="h-full w-full text-center justify-center items-center">Maaf anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }

    const userList = []

    try {
        userList = await prisma.userOpd.findMany({
            include:{
                instansi:true
            }
        })
        
    } catch (error) {
        console.log("error saat get all user opd", error)
    }


  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">User admin OPD/Instansi</div>
            <ButtonAddUserOpd />
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <table className="table table-xs mb-10">
            <thead>
              <tr>
                <th className="text-left">Username</th>
                <th className="text-left">Password</th>
                <th className="text-left">Instansi</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody className="">
            {userList.length > 0 && (
                userList.map((user, index) => (
                    <tr key={index}>
                        <td className="text-left">
                            <div
                                className="tooltip z-50"
                                data-tip="username user"
                            >
                                {user.username}
                            </div>
                        </td>
                        
                        <td className="text-left">
                            <div
                                className="tooltip z-50"
                                data-tip="username user"
                            >
                                {user.password}
                            </div>
                        </td>

                        <td className="text-left">
                            <div
                                className="tooltip z-50"
                                data-tip={user.instansi.namaInstansi}
                            >
                                {truncate(user.instansi.namaInstansi, 12)}
                            </div>
                        </td>



                        <td className="flex  justify-end items-start">
                            <div className="dropdown dropdown-left ">
                                <div tabIndex={0} role="button" className='flex items-center justify-center'>
                                    <Settings2 color='green' size={18} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <ButtonChangePassword  />
                                    
                                </ul>
                            </div>
                        </td>
                    </tr>
                ))
            )}
                
              </tbody>
          </table>
        </div>
      </>
    </div>
  )
}

export default Opd