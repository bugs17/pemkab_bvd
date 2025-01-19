import { FaCalendarDays } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";


const PagesUnduhanLayout = ({children}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-7">
          <div className="md:w-[70%] w-full p-8">
            {children}
          </div>
    
          <div className="md:w-[30%] w-full pt-12 pr-4 ">
            
          <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">UNDUHAN LAINNYA</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="py-2 px-4 rounded-md flex flex-row items-center gap-3 hover:shadow-md cursor-pointer hover:bg-violet-200">
                  <span className="font-sans text-xs">
                    Rencana Tata Ruang Wilayah Kabupaten Boven Digoel Tahun
                    2011-2031 No Perda 4 Tahun 2014
                  </span>
                  <MdSimCardDownload size={32} className="text-violet-500" />
                </div>
              </div>
            </div>
    
            <div className="shadow-md px-4 pb-4 rounded-md  mt-4">
              <div className="divider divider-success">
                <span className="text-green-700">PENGUMUMAN</span>
              </div>
              <div className="flex flex-col gap-3 overflow-y-scroll h-96">
                <div>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </span>
                  <span className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900">
                    JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK
                    TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
                  </span>
                </div>
                <div>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </span>
                  <span className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900">
                    JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK
                    TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
                  </span>
                </div>
                <div>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </span>
                  <span className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900">
                    JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK
                    TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
                  </span>
                </div>
                <div>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </span>
                  <span className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900">
                    JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK
                    TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
                  </span>
                </div>
                <div>
                  <span className="flex flex-row items-center text-xs text-slate-400">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </span>
                  <span className="text-xs font-mono text-green-700 cursor-pointer hover:text-green-900">
                    JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK
                    TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
                  </span>
                </div>
              </div>
            </div>

            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">AGENDA</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-slate-400 text-xs">Belum ada agenda</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PagesUnduhanLayout