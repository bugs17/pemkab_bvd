import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";

const KesejahteraanSosial = async () => {
  let kesejahteraan;
  try {
    kesejahteraan = await prisma.profil.findFirst({
      where: {
        judul: "kesejahteraan sosial",
      },
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        KESEJAHTERAAN SOSIAL
      </h1>
      {kesejahteraan && (
        <PdfViewerComponent urlPdf={kesejahteraan.urlFile} />
      )}
    </div>
  );
};

export default KesejahteraanSosial;
