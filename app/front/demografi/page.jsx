import React from "react";
import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { FaCalendarDays } from "react-icons/fa6";

const Demografi = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <h1 className="text-center font-bold text-2xl mb-4">DEMOGRAFI</h1>
      <PdfViewerComponent urlPdf={"/docs/demografi.pdf"} />
    </div>
  );
};

export default Demografi;
