import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";

const RpjmdBoven = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">RPJMD KABUPATEN BOVEN DIGOEL 2021-2025</h1>
      <PdfViewerComponent urlPdf={"/docs/rpjmd2025.pdf"} />
    </div>
  );
};

export default RpjmdBoven;
