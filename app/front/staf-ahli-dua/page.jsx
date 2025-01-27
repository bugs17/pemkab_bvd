import React from "react";
import { prisma } from "@/app/lib/db";
import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";


export const revalidate = 0;

const StafAhliDua = async () => {
  let stafAhli;
  try {
    stafAhli = await prisma.pejabat.findFirst({
      where: {
        dbSearch:"staf ahli 2"
      },
    });
  } catch (error) {

  }
  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {stafAhli && (
          <PejabatProfil jabatan={stafAhli.jabatan} nama={stafAhli.nama} urlFoto={stafAhli.urlFoto} />
        )}
      </div>
    </div>
  );
};

export default StafAhliDua;
