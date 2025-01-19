import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";

const KesejahteraanSosial = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        KESEJAHTERAAN SOSIAL
      </h1>
      <PdfViewerComponent urlPdf={"/docs/kesejahteraansosial.pdf"} />
    </div>
  );
};

export default KesejahteraanSosial;
