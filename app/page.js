import Image from "next/image";
import Navbar from "./component/navba";
import Hero from "./component/hero";
import { FaCalendarDays } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import Calendar from "./component/clientComponent/calendar";


export default function Home() {
  return (
    <>
    {/* navbar */}
      <Navbar />

      {/* hero sections */}
      <Hero />

      {/* headline news */}
      <div className="px-4 py-8 bg-white flex flex-col">
        <div className="divider divider-success">
          <span className="text-green-700">BERITA UTAMA</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center md:flex-row">
          <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor-pointer hover:text-red-500">
              KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </h2>
              <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p>
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
              </div>
            </div>
          </div>
          <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor-pointer hover:text-red-500">
              KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </h2>
              <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p>
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
              </div>
            </div>
          </div>
          <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor-pointer hover:text-red-500">
              KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </h2>
              <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p>
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
              </div>
            </div>
          </div>
          <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor-pointer hover:text-red-500">
              KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </h2>
              <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p>
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
              </div>
            </div>
          </div>
          <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor-pointer hover:text-red-500">
              KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </h2>
              <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p>
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
              </div>
            </div>
          </div>
          <div className="card md:w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title cursor-pointer hover:text-red-500">
              KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </h2>
              <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p>
              <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="flex justify-center items-center py-10">
          <button className="btn btn-outline btn-success btn-sm">Lainnya</button>
        </div>
      </div>

      {/* section agenda dan digoel tv */}
      <div className="px-4 py-8 flex md:flex-row flex-col-reverse">
        <div className="md:w-[60%]">
          {/* pengumuman & kalender kegiatan */}
          <div className=" flex md:flex-row flex-col h-full w-full gap-4">

            <div className="h-full w-full">
              <div className="divider divider-success">
                <span className="text-green-700">PENGUMUMAN</span>
              </div>
              <div className="flex gap-2 flex-col">
                <div className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
                  <span className="font-mono text-xs text-gray-400">Rabu, 11 Desember 2024</span>
                  <p className="text-black text-sm font-bold">JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL</p>
                </div>
                <div className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
                  <span className="font-mono text-xs text-gray-400">Rabu, 11 Desember 2024</span>
                  <p className="text-black text-sm font-bold">JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI BIDANG CPNS TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL</p>
                </div>
              </div>

              {/* unduhan */}
              <div className="flex flex-col">
                <div className="divider divider-success">
                  <span className="text-green-700">UNDUHAN</span>
                </div>
                <div className="bg-white py-2 px-4 rounded-md flex flex-row items-center gap-3 shadow-md cursor-pointer hover:bg-violet-200">
                  <span className="font-sans text-xs">
                    Rencana Tata Ruang Wilayah Kabupaten Boven Digoel Tahun 2011-2031 No Perda 4 Tahun 2014
                  </span>
                  <MdSimCardDownload size={32} className="text-violet-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="divider divider-success">
                  <span className="text-green-700">AGENDA</span>
                </div>
                <span className="text-center font-mono text-xs text-slate-600">Belum ada agenda!</span>
              </div>
            </div>

            {/* kalender */}
            <div className="h-full w-full">
              <div className="divider divider-success">
                <span className="text-green-700">KALENDER KEGIATAN</span>
              </div>
              <Calendar />
            </div>
          </div>
        </div>
        <div className="md:w-[40%]  px-4">
          <div className="divider divider-success">
            <span className="text-green-700">SIARAN TUNDA DIGOEL-TV</span>
          </div>

          {/* carousal siaran ulang */}
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <iframe className="rounded-md" width="520" height="315" src="https://www.youtube.com/embed/uuZE_IRwLNI?si=2ecXBNlVOU7sh4lm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500">❮</a>
                <a href="#slide2" className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <iframe className="rounded-md" width="520" height="315" src="https://www.youtube.com/embed/R072rB3b9dA?si=-JOROIYXKHK067VI" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500">❮</a>
                <a href="#slide2" className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500">❯</a>
              </div>
            </div>
          </div>

          <div className="">
            <div className="divider divider-success">
              <span className="text-green-700">SIARAN LANGSUNG DIGOEL-TV</span>
            </div>
            <div className="border-[1px] border-violet-200 shadow-md rounded-md h-56 flex flex-col gap-2 w-full overflow-y-scroll p-2">
              <div className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
                <MdLiveTv size={32} />
                <span className="text-xs font-mono ">LIVE : DEBAT PUBLIK PUTARAN III CALON BUPATI & CALON WAKIL BUPATI BOVEN DIGOEL TAHUN 2024</span>
              </div>
              <div className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
                <MdLiveTv size={32} />
                <span className="text-xs font-mono ">LIVE : DEBAT PUBLIK PUTARAN III CALON BUPATI & CALON WAKIL BUPATI BOVEN DIGOEL TAHUN 2024</span>
              </div>
              <div className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
                <MdLiveTv size={32} />
                <span className="text-xs font-mono ">LIVE : DEBAT PUBLIK PUTARAN III CALON BUPATI & CALON WAKIL BUPATI BOVEN DIGOEL TAHUN 2024</span>
              </div>
              <div className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
                <MdLiveTv size={32} />
                <span className="text-xs font-mono ">LIVE : DEBAT PUBLIK PUTARAN III CALON BUPATI & CALON WAKIL BUPATI BOVEN DIGOEL TAHUN 2024</span>
              </div>
              <div className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
                <MdLiveTv size={32} />
                <span className="text-xs font-mono ">LIVE : DEBAT PUBLIK PUTARAN III CALON BUPATI & CALON WAKIL BUPATI BOVEN DIGOEL TAHUN 2024</span>
              </div>
              <div className="w-full bg-violet-300 rounded-md shadow-sm py-2 px-3 flex flex-row items-center gap-2 cursor-pointer text-slate-700 hover:text-white">
                <MdLiveTv size={32} />
                <span className="text-xs font-mono ">LIVE : DEBAT PUBLIK PUTARAN III CALON BUPATI & CALON WAKIL BUPATI BOVEN DIGOEL TAHUN 2024</span>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}


// <iframe className="rounded-md" width="520" height="315" src="https://www.youtube.com/embed/uuZE_IRwLNI?si=2ecXBNlVOU7sh4lm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>