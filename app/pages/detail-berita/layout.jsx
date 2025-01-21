import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";


const PagesBeritaLayout = async ({children}) => {

  const beritas = await prisma.berita.findMany({
    orderBy:{
      createdAt:"desc"
    },
    take:4,
  })

  const kategoris = await prisma.kategoriBerita.findMany({
    include:{
      berita:true
    }
  })


  return (
    <div className="flex flex-col md:flex-row gap-2 mb-7">
          <div className="md:w-[70%] w-full p-8">
            {children}
          </div>
    
          <div className="md:w-[30%] w-full pt-12 pr-4 ">
            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">BERITA LAINNYA</span>
              </div>
              <div className="flex flex-col gap-3">
              {beritas.length > 0 ?
                beritas.map((berita, index) => (
                  <div key={index} className="flex flex-col gap-2 border-b border-dashed border-gray-500 pb-4 ">
                    <span className="flex flex-row items-center text-xs text-slate-400">
                      <FaCalendarDays className="mr-2" />
                      {new Date(berita.createdAt).toLocaleDateString('id-ID', {'weekday':'long', day: '2-digit', month: '2-digit', year: 'numeric'})}
                    </span>
                    <span className="font-sans font-semibold text-xs hover:text-red-300 cursor-pointer">
                      {truncate(berita.judul, 70)}
                    </span>
                  </div>
                )) 
                : 
                (
                  <span>Belum ada berita</span>
                )}
                
              </div>
            </div>
    
            <div className="shadow-md px-4 pb-4 rounded-md">
              <div className="divider divider-success">
                <span className="text-green-700">KATEGORI BERITA</span>
              </div>
              <div className="flex flex-col gap-3">
                {kategoris.length > 0 && (
                  kategoris.map((kategori, index) => (

                  <div key={index} className="flex flex-row justify-between items-center ">
                    <span className="flex flex-row gap-3 items-center">
                      <TbCategoryPlus className="text-slate-500" />
                      <span className="font-semibold hover:text-green-600 cursor-pointer">
                        {kategori.nama}
                      </span>
                    </span>
                    <div className="badge badge-success text-slate-200 hover:badge-ghost hover:text-green-600 cursor-pointer">
                      {kategori.berita.length}
                    </div>
                  </div>
                  ))
                )}

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
                <span className="text-green-700">UNDUHAN</span>
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
          </div>
        </div>
  )
}

export default PagesBeritaLayout