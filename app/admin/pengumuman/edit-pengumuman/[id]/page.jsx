import FormEditPengumuman from "@/app/component/clientComponent/formEditPengumuman";
import { prisma } from "@/app/lib/db";
import React from "react";

const EditPengumuman = async ({ params }) => {
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
