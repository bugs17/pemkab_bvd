import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

const Pertanian = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">PERTANIAN</h1>
      <PdfViewerComponent urlPdf={"/docs/pertanian.pdf"} />
    </div>
  );
};

export default Pertanian;
