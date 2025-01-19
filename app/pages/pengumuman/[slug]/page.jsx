import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import React from "react";
import { FaDownload } from "react-icons/fa6";

const page = ({ params }) => {
  return (
    <div className="flex flex-col gap-6 md:mb-8">
      <h1 className="font-semibold text-center">
        JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK TAHUN
        2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
      </h1>
      <PdfViewerComponent urlPdf={"/docs/pengumuman-1.pdf"} />
      <a href="/docs/pengumuman-1.pdf" download='file1.pdf' className="btn">
        <FaDownload />
        Download
      </a>
    </div>
  );
};

export default page;
