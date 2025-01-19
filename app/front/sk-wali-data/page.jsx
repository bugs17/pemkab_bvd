import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const SkWaliData = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">SK WALI DATA</h1>
      <PdfViewerComponent urlPdf={"/docs/sk-wali-data.pdf"} />
    </div>
  );
};

export default SkWaliData;
