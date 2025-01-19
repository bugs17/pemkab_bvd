import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const IndustriDanPerdagangan = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        INDUSTRI DAN PERDAGANGAN
      </h1>
      <PdfViewerComponent urlPdf={"/docs/industri.pdf"} />
    </div>
  );
};

export default IndustriDanPerdagangan;
