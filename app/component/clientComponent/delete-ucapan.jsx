"use client"
import { Trash2 } from 'lucide-react'
import React from 'react'

const ButtonDeleteUcapan = () => {
  return (
    <div className='justify-end flex'>
        <Trash2 size={18} className='text-red-500' />
    </div>
  )
}

export default ButtonDeleteUcapan