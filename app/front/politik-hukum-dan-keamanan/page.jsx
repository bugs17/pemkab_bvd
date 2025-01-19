import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";



const PolitikHukumDanKeamanan = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
        <h1 className="text-center font-bold text-2xl mb-4">
          POLITIK HUKUM DAN KEAMANAN
        </h1>
        <PdfViewerComponent urlPdf={"/docs/politikhukumkeamanan.pdf"} />
      </div>
  );
};

export default PolitikHukumDanKeamanan;
