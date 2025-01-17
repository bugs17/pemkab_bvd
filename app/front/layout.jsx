import React from "react";
import Navbar from "../component/navba";
import Footer from "../component/footer";
import { FaCalendarDays } from "react-icons/fa6";

const FrontLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-base-200 p-4 flex md:flex-row flex-col">
        {children}

        <div className="md:w-[30%] md:pt-10">
          <div className="flex flex-col gap-3">
            <div className="divider divider-success">
              <span className="text-green-700">BERITA TERBARU</span>
            </div>

            <div className="card md:w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                  alt="cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title cursor-pointer hover:text-red-500">
                  KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
                </h2>
                {/* <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p> */}
                <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
                </div>
              </div>
            </div>

            <div className="card md:w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                  alt="cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title cursor-pointer hover:text-red-500">
                  KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
                </h2>
                {/* <p>Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten Boven Digoel menggelar...</p> */}
                <div className="card-actions justify-start">
                  <div className="badge badge-neutral">
                    <FaCalendarDays className="mr-2" />
                    Senin, 14 Oktober 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="divider divider-success">
              <span className="text-green-700">PENGUMUMAN</span>
            </div>
            <div className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
              <span className="font-mono text-xs text-gray-400">
                Rabu, 11 Desember 2024
              </span>
              <p className="text-black text-sm font-bold">
                JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK
                TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
              </p>
            </div>

            <div className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
              <span className="font-mono text-xs text-gray-400">
                Rabu, 11 Desember 2024
              </span>
              <p className="text-black text-sm font-bold">
                JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI
                BIDANG CPNS TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FrontLayout;
