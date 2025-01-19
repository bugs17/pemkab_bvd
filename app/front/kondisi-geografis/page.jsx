import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { FaCalendarDays } from "react-icons/fa6";

const KondisiGeografis = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">KONDISI GEOGRAFIS</h1>
      <PdfViewerComponent urlPdf={"/docs/kondisi-geografis.pdf"} />
    </div>
  );
};

export default KondisiGeografis;
