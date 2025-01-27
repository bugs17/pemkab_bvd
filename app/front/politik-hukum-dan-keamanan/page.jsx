import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";


export const revalidate = 0;

const PolitikHukumDanKeamanan = async () => {
  let politik;
  try {
    politik = await prisma.profil.findFirst({
      where: {
        judul: "politik hukum & keamanan",
      },
    });
  } catch (error) {}
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        POLITIK HUKUM DAN KEAMANAN
      </h1>
      {politik && (
        <PdfViewerComponent urlPdf={politik.urlFile} />
      )}
    </div>
  );
};

export default PolitikHukumDanKeamanan;
