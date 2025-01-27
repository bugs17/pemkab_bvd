import React from "react";
import { prisma } from "@/app/lib/db";
import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";

export const revalidate = 0;

const AsistenBidangPerekonomian = async () => {
  let asistenPerekonomian;
  try {
    asistenPerekonomian = await prisma.pejabat.findFirst({
      where: {
        dbSearch: "asisten bidang perekonomian",
      },
    });
  } catch (error) {}
  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {asistenPerekonomian && (
          <PejabatProfil
            jabatan={asistenPerekonomian.jabatan}
            nama={asistenPerekonomian.nama}
            urlFoto={asistenPerekonomian.urlFoto}
          />
        )}
      </div>
    </div>
  );
};

export default AsistenBidangPerekonomian;
