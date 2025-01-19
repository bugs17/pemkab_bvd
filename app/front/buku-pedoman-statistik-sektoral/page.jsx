import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";


const BukuPedomanStatistikSektoral = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
        <h1 className="text-center font-bold text-2xl mb-4">
          BUKU PEDOMAN STATISTIK SEKTORAL
        </h1>
        <PdfViewerComponent urlPdf={"/docs/buku-pedoman.pdf"} />
      </div>
  );
};

export default BukuPedomanStatistikSektoral;
