import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";
import React from "react";

const VisiMisi = async () => {
  let visimisi;
  try {
    visimisi = await prisma.profil.findFirst({
        where:{
            judul:"visi-misi"
        }
    })
    
} catch (error) {
    
}
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">VISI & MISI</h1>
      {visimisi && (
        <PdfViewerComponent urlPdf={visimisi.urlFile} />
      )}
    </div>
  );
};

export default VisiMisi;
