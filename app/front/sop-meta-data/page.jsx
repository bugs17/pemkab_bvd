import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const SopMetaData = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">SOP META DATA</h1>
      <PdfViewerComponent urlPdf={"/docs/sop-meta-data.pdf"} />
    </div>
  );
};

export default SopMetaData;
