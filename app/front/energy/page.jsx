import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";
import React from "react";

const Energy = async () => {
  let data;
  try {
    data = await prisma.saranaPrasarana.findFirst({
      where: {
        judul: "energi",
      },
    });
  } catch (error) {}

  return (
    <div className=" md:w-[70%] md:p-10">
      {data && (
        <>
          <h1 className="text-center font-bold text-2xl mb-4">
            {data.judul.toUpperCase()}
          </h1>
          <PdfViewerComponent urlPdf={data.urlFile} />
        </>
      )}
    </div>
  );
};

export default Energy;
