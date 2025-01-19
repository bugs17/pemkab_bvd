import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const Transportasi = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">TRANSPORTASI</h1>
      <PdfViewerComponent urlPdf={"/docs/transportasi.pdf"} />
    </div>
  );
};

export default Transportasi;
