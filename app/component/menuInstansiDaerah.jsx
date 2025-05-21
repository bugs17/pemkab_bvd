import Link from 'next/link'
import React from 'react'
import { createSlug, slugToText } from '../lib/slugify'
import { prisma } from '../lib/db'
import ListMenuInstansi from './listMenuInstansi'

const MenuInstansiDaerah = async ({instansi}) => {
  let data;
  try {
    data = await prisma.instansi.findFirst({
      where:{
        namaInstansi:slugToText(instansi)
      },
      include:{
        lppd:true,
        dpa:true,
        renstra:true,
        lakip:true,
        kategoriInstansi:true
      }
    })
  } catch (error) {
    console.log("error mengambil instansi beserta relasi nya")
  }

  
  return (
    <ul className="menu font-monsans font-medium lg:menu-horizontal bg-white w-full items-center flex justify-center flex-row ">
            <ListMenuInstansi data={data} instansi={instansi} />
    </ul>
  )
}

export default MenuInstansiDaerah