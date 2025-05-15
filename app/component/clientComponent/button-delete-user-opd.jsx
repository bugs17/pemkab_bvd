"use client"
import { deleteUserOpd } from '@/app/actions/delete-user-opd'
import React from 'react'

const ButtonDeleteUserOpd = ({userId, username}) => {

    const handleHapus = async () => {
        const result = confirm(`Apakah anda yakin ingin menghapus user ${username}`)
        if (result) {
            const response = await deleteUserOpd(userId)
            if (response) {
                alert("User telah berhasil di hapus 👍🏻")
            }else{
                alert("gagal menghapus user. coba lagi!")

            }
        }
    }
    

  return (
    <>
        <li onClick={handleHapus} className='hover:bg-success rounded-md hover:text-white '>
            <span>Hapus</span>
        </li>
    </>
  )
}

export default ButtonDeleteUserOpd