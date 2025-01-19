import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const Pendidikan = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">PENDIDIKAN</h1>
      <PdfViewerComponent urlPdf={"/docs/pendidikan.pdf"} />
    </div>
  );
};

export default Pendidikan;
