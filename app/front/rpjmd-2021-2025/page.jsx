import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";

const RpjmdBoven = async () => {
  let rpjmd;
  try {
    rpjmd = await prisma.profil.findFirst({
      where: {
        judul: "rpjmd kabupaten boven digoel 2021-2025",
      },
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        RPJMD KABUPATEN BOVEN DIGOEL 2021-2025
      </h1>
      {rpjmd && (
        <div className=" flex justify-center h-full w-full">
          <iframe
            src={`/api${rpjmd.urlFile}`}
            className="w-[80%] h-[90%] border self-center border-gray-300"
            title="PDF Preview"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RpjmdBoven;
