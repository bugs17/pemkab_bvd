import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";
import { prisma } from "@/app/lib/db";
import React from "react";

const Sekda = async () => {
  let sekda;
  try {
    sekda = await prisma.pejabat.findFirst({
      where: {
        dbSearch:"sekda"
      },
    });
  } catch (error) {

  }
  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {sekda && (
          <PejabatProfil jabatan={sekda.jabatan} nama={sekda.nama} urlFoto={sekda.urlFoto} />
        )}
      </div>
    </div>
  );
};

export default Sekda;
