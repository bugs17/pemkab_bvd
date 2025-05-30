import React from 'react'
import FormEditBerita from '@/app/component/clientComponent/formEditBerita'
import { prisma } from '@/app/lib/db'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'


const EditBerita = async ({params}) => {

  
  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role === "admin-dgtv") {
    return redirect("/admin/digoel-tv/live-list");
  }

  const { id } = params;

  if (!id) {
    return <p>ID not found</p>;
  }

  let berita;


  try {
    berita = await prisma.berita.findFirst({
      where:{
        id:parseInt(id)
      }
    })
  } catch (error) {
    console.log("Error mengambil berita by id saat edit berita!", error.message)
  }

  if (!berita) {
    return <div className='flex flex-col justify-center items-center'>
        <span>Data tidak di temukan</span>
    </div>
    
  }

  const listKategoris = await prisma.kategoriBerita.findMany()

  return (
    <div className="h-full">
      <FormEditBerita kategoris={listKategoris} instance={berita} />
    </div>
  )
}

export default EditBerita