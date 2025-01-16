import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

const Kontak = () => {
  return (
    <div className="w-full bg-base-200 p-4 flex md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        <div className="divider divider-success">
          <span className="text-green-700">KONTAK KAMI</span>
        </div>

        {/* KONTAK */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">
                  Nama <span className="text-red-700">*</span>
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered input-success w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">
                  Email <span className="text-red-700">*</span>
                </span>
              </div>
              <input
                type="email"
                className="input input-bordered input-success w-full "
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">
                Alamat <span className="text-red-700">*</span>
              </span>
            </div>
            <textarea className="textarea textarea-success h-24"></textarea>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">
                Judul <span className="text-red-700">*</span>
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered input-success w-full "
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">
                Pesan <span className="text-red-700">*</span>
              </span>
            </div>
            <textarea className="textarea textarea-success h-36"></textarea>
          </label>

          <button className="btn btn-wide btn-success text-white self-center my-4">Kirim Pesan</button>
        </div>
      </div>

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
              JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI BIDANG
              CPNS TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
