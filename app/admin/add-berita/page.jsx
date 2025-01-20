
import FormAddBerita from "@/app/component/clientComponent/formAddBerita";
import { prisma } from "@/app/lib/db";
import React from "react";


const AddBerita = async () => {


    const listKategoris = await prisma.kategoriBerita.findMany()

  return (
    <div className="h-full">
      <FormAddBerita kategoris={listKategoris} />
    </div>
  );
};

export default AddBerita;
