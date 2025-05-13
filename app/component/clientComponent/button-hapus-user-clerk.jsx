"use client"
import { deleteUserClerk } from '@/app/actions/delete-user-clerk'
import { Settings2 } from 'lucide-react'
import React from 'react'

const ButtonDeleteUserClerk = ({username, userId}) => {
  return (
    <div className="dropdown dropdown-left ">
        <div tabIndex={0} role="button" className='flex items-center justify-center'>
            <Settings2 color='green' size={18} />
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <li onClick={() => {
                const result = confirm(`Apakah anda yakin ingin menghapus user ${username}`)
                if (result){
                    deleteUserClerk(userId)
                }else{
                    alert("Tidak jadi dihapus")
                }
            }} className='hover:bg-error rounded-md hover:text-white '>
                <span>Hapus</span>
            </li>
        </ul>
        </div>
  )
}

export default ButtonDeleteUserClerk