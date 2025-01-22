import FormEditKegiatan from "@/app/component/clientComponent/formEditKegiatan";
import { prisma } from "@/app/lib/db";
import React from "react";

const EditKegiatan = async ({ params }) => {
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
