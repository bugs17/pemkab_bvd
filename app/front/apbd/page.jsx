import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";

const Apbd = async () => {
  let apbd;
  try {
    apbd = await prisma.profil.findFirst({
      where: {
        judul: "apbd boven digoel",
      },
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">APBD BOVEN DIGOEL</h1>
      {apbd && <PdfViewerComponent urlPdf={apbd.urlFile} />}
    </div>
  );
};

export default Apbd;
