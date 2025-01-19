import React from "react";
import PdfViewerComponent from "../../component/clientComponent/pdfViewer";

const PariwisataDanKebudayaan = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        PARIWISATA & KEBUDAYAAN
      </h1>
      <PdfViewerComponent urlPdf={"/docs/pariwisata-dan-kebudayaan.pdf"} />
    </div>
  );
};

export default PariwisataDanKebudayaan;
