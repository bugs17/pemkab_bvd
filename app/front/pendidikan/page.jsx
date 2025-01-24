import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";
import React from "react";

const Pendidikan = async () => {
  let data;
  try {
    data = await prisma.saranaPrasarana.findFirst({
      where: {
        judul: "pendidikan",
      },
    });
  } catch (error) {}

  console.log(data)
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

export default Pendidikan;
