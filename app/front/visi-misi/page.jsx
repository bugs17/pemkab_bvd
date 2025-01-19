import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const VisiMisi = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">VISI & MISI</h1>
      <PdfViewerComponent urlPdf={"/docs/visimisi.pdf"} />
    </div>
  );
};

export default VisiMisi;
