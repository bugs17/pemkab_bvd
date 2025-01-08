import Image from "next/image";
import Navbar from "./component/navba";
import Hero from "./component/hero";
import { FaCalendarDays } from "react-icons/fa6";

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
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="card w-1/4 bg-base-100 shadow-xl">
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
          <div className="card w-1/4 bg-base-100 shadow-xl">
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
          <div className="card w-1/4 bg-base-100 shadow-xl">
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
          <div className="card w-1/4 bg-base-100 shadow-xl">
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
          <div className="card w-1/4 bg-base-100 shadow-xl">
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
          <div className="card w-1/4 bg-base-100 shadow-xl">
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

      <div className="px-4 py-8 flex flex-row">
        <span>Halloo 1</span>
        <span>Halloo 2</span>
      </div>
    </>
  );
}
