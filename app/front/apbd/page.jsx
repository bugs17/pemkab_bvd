import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";

const Apbd = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">APBD BOVEN DIGOEL</h1>
      <PdfViewerComponent urlPdf={"/docs/apbd.pdf"} />
    </div>
  );
};

export default Apbd;
