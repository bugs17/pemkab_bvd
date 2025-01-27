import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";

export const revalidate = 0;

const KondisiGeografis = async () => {
  let geografis;
  try {
    geografis = await prisma.profil.findFirst({
      where: {
        judul: "kondisi geografis",
      },
    });
  } catch (error) {}
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">KONDISI GEOGRAFIS</h1>
      {geografis && <PdfViewerComponent urlPdf={geografis.urlFile} />}
    </div>
  );
};

export default KondisiGeografis;
