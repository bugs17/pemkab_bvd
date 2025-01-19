import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";

const StatistikSektoralDaerah = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">
        STATISTIK SEKTORAL DAERAH
      </h1>
      <PdfViewerComponent urlPdf={"/docs/statistik-sektoral-daerah.pdf"} />
    </div>
  );
};

export default StatistikSektoralDaerah;
