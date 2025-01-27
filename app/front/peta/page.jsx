import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";
import React from "react";


export const revalidate = 0;

const Peta = async () => {
  let peta;
  try {
    peta = await prisma.profil.findFirst({
      where:{
        judul:"peta"
      }
    })
  } catch (error) {
    
  }
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">PETA</h1>
      {peta && (
        <PdfViewerComponent urlPdf={peta.urlFile} />
      )}
    </div>
  );
};

export default Peta;
