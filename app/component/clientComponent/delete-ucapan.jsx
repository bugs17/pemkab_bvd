"use client"
import { deleteUcapan } from '@/app/actions/delete-ucapan'
import { Trash2 } from 'lucide-react'
import React from 'react'

const ButtonDeleteUcapan = ({id}) => {

  const handleDelete = async () => {
    const res = confirm("Apakah anda yakin ingin menghapus gambar ini?")
    if (res) {
      await deleteUcapan(id)
      alert("Gambar berhasil di hapus")
    }
  }
  return (
    <div onClick={handleDelete} className='justify-end flex'>
        <Trash2 size={18} className='text-red-500 cursor-pointer' />
    </div>
  )
}

export default ButtonDeleteUcapan