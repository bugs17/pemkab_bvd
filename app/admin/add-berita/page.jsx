import Link from 'next/link'
import React from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import { IoArrowBackOutline } from "react-icons/io5";

const AddBerita = () => {
  return (
    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <IoArrowBackOutline size={30} className="text-green-950" />
          <Link href={'/admin'} className="font-semibold cursor-pointer hover:text-green-950">
            Kembali
          </Link>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        
      </div>
    </div>
  )
}

export default AddBerita