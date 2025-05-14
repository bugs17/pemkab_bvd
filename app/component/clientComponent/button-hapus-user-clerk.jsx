"use client"
import { deleteUserClerk } from '@/app/actions/delete-user-clerk'
import { Settings2 } from 'lucide-react'
import React from 'react'

const ButtonDeleteUserClerk = ({username, userId}) => {
  return (
    <li onClick={() => {
        const result = confirm(`Apakah anda yakin ingin menghapus user ${username}`)
        if (result){
            deleteUserClerk(userId)
        }
    }} className='hover:bg-success rounded-md hover:text-white '>
        <span>Hapus</span>
    </li>
  )
}

export default ButtonDeleteUserClerk