import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";

export const revalidate = 0;

const Demografi = async () => {
  let demografi;
  try {
    demografi = await prisma.profil.findFirst({
      where: {
        judul: "demografi",
      },
    });
  } catch (error) {}
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">DEMOGRAFI</h1>
      {demografi && <PdfViewerComponent urlPdf={demografi.urlFile} />}
    </div>
  );
};

export default Demografi;
