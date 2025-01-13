import React from "react";
import { MdSimCardDownload } from "react-icons/md";


const Unduhan = () => {
  return (
    <div className="flex flex-col">
      <div className="divider divider-success">
        <span className="text-green-700">UNDUHAN</span>
      </div>
      <div className="bg-white py-2 px-4 rounded-md flex flex-row items-center gap-3 shadow-md cursor-pointer hover:bg-violet-200">
        <span className="font-sans text-xs">
          Rencana Tata Ruang Wilayah Kabupaten Boven Digoel Tahun 2011-2031 No
          Perda 4 Tahun 2014
        </span>
        <MdSimCardDownload size={32} className="text-violet-500" />
      </div>
    </div>
  );
};

export default Unduhan;
