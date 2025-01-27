import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";
import { prisma } from "@/app/lib/db";
import React from "react";

export const revalidate = 0;

const Wakilwakil = async () => {
  let wakil;
  try {
    wakil = await prisma.pejabat.findFirst({
      where: {
        dbSearch:"wakil bupati"
      },
    });
  } catch (error) {

  }
  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {wakil && (
          <PejabatProfil jabatan={wakil.jabatan} nama={wakil.nama} urlFoto={wakil.urlFoto} />
        )}
      </div>
    </div>
  );
};

export default Wakilwakil;
