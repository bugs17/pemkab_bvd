import React from "react";
import { prisma } from "@/app/lib/db";
import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";

const Bupati = async () => {
  let bupati;
  try {
    bupati = await prisma.pejabat.findFirst({
      where: {
        dbSearch: "bupati",
      },
    });
  } catch (error) {

  }

  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {bupati && (
          <PejabatProfil jabatan={bupati.jabatan} nama={bupati.nama} urlFoto={bupati.urlFoto} />
        )}
      </div>
    </div>
  );
};

export default Bupati;
