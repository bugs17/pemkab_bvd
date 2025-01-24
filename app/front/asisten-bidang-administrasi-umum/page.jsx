import React from "react";
import { prisma } from "@/app/lib/db";
import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";

const AsistenBidangAdiministrasiUmum = async () => {
  let asistenUmum;
  try {
    asistenUmum = await prisma.pejabat.findFirst({
      where: {
        dbSearch:"asisten bidang administrasi umum"
      },
    });
  } catch (error) {

  }
  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {asistenUmum && (
          <PejabatProfil jabatan={asistenUmum.jabatan} nama={asistenUmum.nama} urlFoto={asistenUmum.urlFoto} />
        )}
      </div>
    </div>
  );
};

export default AsistenBidangAdiministrasiUmum;
