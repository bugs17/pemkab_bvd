import FormEditKegiatan from "@/app/component/clientComponent/formEditKegiatan";
import { prisma } from "@/app/lib/db";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const EditKegiatan = async ({ params }) => {

  const user = await currentUser()
  const role = user.publicMetadata?.role
  
  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

  const {id} = await params;

  let instance;
  try {
    instance = await prisma.kegiatan.findFirst({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.log("gagal mengambil instance kegiatan", error.message);
  }

  if (!instance) {
    return <div className='flex flex-col justify-center items-center'>
        <span>Data tidak di temukan</span>
    </div>
    
  }

  

  return (
    <div className="h-full pb-6">
      <FormEditKegiatan
        judulProps={instance.judul}
        deskripsiProps={instance.deskripsi}
        mulaiProps={instance.waktuMulai}
        selesaiProps={instance.waktuSelesai}
        id={instance.id}
      />
    </div>
  );
};

export default EditKegiatan;
