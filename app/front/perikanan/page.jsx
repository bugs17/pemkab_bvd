import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const Perikanan = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">PERIKANAN</h1>
      <PdfViewerComponent urlPdf={"/docs/perikanan.pdf"} />
    </div>
  );
};

export default Perikanan;
