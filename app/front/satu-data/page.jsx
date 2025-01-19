import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const SatuData = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">SATU DATA</h1>
      <PdfViewerComponent urlPdf={"/docs/satudata.pdf"} />
    </div>
  );
};

export default SatuData;
