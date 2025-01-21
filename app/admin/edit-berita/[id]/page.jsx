import FormEditBerita from '@/app/component/clientComponent/formEditBerita'
import { prisma } from '@/app/lib/db'
import React from 'react'

const EditBerita = async ({params}) => {
  const { id } = params;

  if (!id) {
    return <p>ID not found</p>;
  }


  const berita = await prisma.berita.findFirst({
    where:{
      id:parseInt(id)
    }
  })

  const listKategoris = await prisma.kategoriBerita.findMany()

  return (
    <div className="h-full">
      <FormEditBerita kategoris={listKategoris} instance={berita} />
    </div>
  )
}

export default EditBerita