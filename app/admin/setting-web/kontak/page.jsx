import React from 'react'
import { currentUser } from "@clerk/nextjs/server";
import { Pencil } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/app/lib/db';
import ButtonAddSosialMedia from '@/app/component/clientComponent/button-add-alamat-sosial-media';


const Kontak = async () => {
    const user = await currentUser()
    const role = user.publicMetadata?.role
    
    if (role !== "admin-induk") {
        return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
    }


    let kontak;

    try {
        kontak = await prisma.kontak.findFirst()
    } catch (error) {
        console.log("Error mengambil data kontak dari DB", error.message)
    }


  return (
    <div className="h-full">
      <>
        <div className="mb-4 w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full gap-1">
            <div className="font-semibold ">Kontak, Sosial media & Alamat</div>
          </div>
        </div>
        {/* tabel kontak disini */}
        <div className="h-full overflow-y-auto">
              <table className="table table-xs mb-10">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th className="text-left">Platform</th>
                      <th className="text-center">Url</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                  
                    <tr>
                        <th>1</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                Facebook
                            </div>
                        </td>
                        <td className="text-center">
                            <Link href={kontak.facebook} target='_blank' className='cursor-pointer text-blue-700'>
                                {kontak.facebook}
                            </Link>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                            <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                                <ButtonAddSosialMedia field={"facebook"} defaultValue={kontak.facebook} />
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>2</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                Instagram
                            </div>
                        </td>
                        <td className="text-center">
                            <Link href={kontak.instagram} target='_blank' className='cursor-pointer text-blue-700'>
                                {kontak.instagram}
                            </Link>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                        <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                            <ButtonAddSosialMedia field={"instagram"} defaultValue={kontak.instagram} />
                        </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                Twitter
                            </div>
                        </td>
                        <td className="text-center">
                            <Link href={kontak.twitter} target='_blank' className='cursor-pointer text-blue-700'>
                                {kontak.twitter}
                            </Link>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                            <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                                <ButtonAddSosialMedia field={"twitter"} defaultValue={kontak.twitter} />
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>4</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                LinkedIn
                            </div>
                        </td>
                        <td className="text-center">
                            <Link href={kontak.linkedIn} target='_blank' className='cursor-pointer text-blue-700'>
                                {kontak.linkedIn}
                            </Link>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                            <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                                <ButtonAddSosialMedia field={"linkedIn"} defaultValue={kontak.linkedIn} />
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>5</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                Email
                            </div>
                        </td>
                        <td className="text-center">
                            <Link href={`mailto:${kontak.email}`} target='_blank' className='cursor-pointer text-blue-700'>
                                {kontak.email}
                            </Link>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                            <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                                <ButtonAddSosialMedia field={"email"} defaultValue={kontak.email} />
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>6</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                Phone
                            </div>
                        </td>
                        <td className="text-center">
                            <span className='text-blue-700'>
                                {kontak.phone}
                            </span>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                            <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                                <ButtonAddSosialMedia field={"phone"} defaultValue={kontak.phone} />
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th>7</th>
                        <td className="text-left">
                            <div className="tooltip z-50" data-tip={""}>
                                Alamat
                            </div>
                        </td>
                        <td className="text-center">
                            <span className='text-blue-700'>
                                {kontak.alamat}
                            </span>
                        </td>
                        
                        
                        <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                            <div className="tooltip tooltip-left z-50" data-tip="Edit url">
                                <ButtonAddSosialMedia field={"alamat"} defaultValue={kontak.alamat} />
                            </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </>
    </div>
  )
}

export default Kontak