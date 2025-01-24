import React from "react";
import { prisma } from "@/app/lib/db";
import PejabatProfil from "@/app/component/clientComponent/pejabatProfil";

const AsistenBidangPemerintahanDanKesejahteraanRakyat = async () => {
  let asistenPemerintah;
  try {
    asistenPemerintah = await prisma.pejabat.findFirst({
      where: {
        dbSearch:"asisten bidang pemerintahan dan kesejahteraan rakyat"
      },
    });
  } catch (error) {

  }
  return (
    <div className="w-full bg-base-200 p-4 flex justify-center md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        {asistenPemerintah && (
          <PejabatProfil jabatan={asistenPemerintah.jabatan} nama={asistenPemerintah.nama} urlFoto={asistenPemerintah.urlFoto} />
        )}
      </div>
    </div>
  );
};

export default AsistenBidangPemerintahanDanKesejahteraanRakyat;
