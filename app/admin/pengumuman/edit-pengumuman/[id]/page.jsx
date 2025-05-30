import FormEditPengumuman from "@/app/component/clientComponent/formEditPengumuman";
import { prisma } from "@/app/lib/db";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const EditPengumuman = async ({ params }) => {

  const user = await currentUser()
  const role = user.publicMetadata?.role

  if (role !== "admin-induk") {
    return <div className="h-full w-full text-center justify-center items-center">Maaf {user.firstName} anda tidak mempunyai hak akses ke halaman ini! 🥱</div>
  }

  const id = params.id;

  let instance;
  try {
    instance = await prisma.pengumuman.findFirst({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.log("gagal mengambil instance pengumuman", error.message);
  }

  if (!instance) {
    return <div className='flex flex-col justify-center items-center'>
        <span>Data tidak di temukan</span>
    </div>
    
  }

  return (
    <div className="h-full pb-6">
      <FormEditPengumuman
        fileProps={instance.urlFile}
        judulProps={instance.judul}
        id={instance.id}
      />
    </div>
  );
};

export default EditPengumuman;
