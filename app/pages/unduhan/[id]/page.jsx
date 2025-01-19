import React from "react";
import { FaDownload } from "react-icons/fa6";

const page = ({ params }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2>Unduhan</h2>
      <div className="flex flex-row ">
        <div className="border border-slate-700 w-[20%] p-5">
          <span className="font-semibold text-slate-600 text-xs">
            Nama File
          </span>
        </div>
        <div className="border border-slate-700 border-l-0 w-[80%] p-5 text-end">
          <span className="font-semibold text-slate-600 text-xs">
            Rencana Tata Ruang Wilayah Kabupaten Boven Digoel Tahun 2011-2031 No
            Perda 4 Tahun 2014
          </span>
        </div>
      </div>

      <a href="/docs/rencana-tata-ruang.pdf" download="file1.pdf" className="btn">
        <FaDownload />
        Download
      </a>
    </div>
  );
};

export default page;
