import React from "react";
import { FaCalendarDays } from "react-icons/fa6";


const LambangDaerah = () => {
  return (
    <div className="w-full bg-base-200 p-4 flex md:flex-row flex-col">
      <div className=" md:w-[70%] md:p-10">
        <h1 className="text-center font-bold text-3xl">Lambang Daerah</h1>
        <span className="font-semibold flex justify-center md:justify-start">
            Arti Lambang/Logo Daerah
        </span>

        <p className="text-justify text-sm">
          <br />
          Lambang Daerah merupakan pencerminan inspirasi dan aspirasi masyarakat serta mempunyai arti dan pengaruh positif terhadap suatu Daerah dan juga menggambarkan potensi social, ekonomi dan budaya Daerah, sehingga dirasakan perlu memiliki lambang daerah yang berisi daya kreatif disegala bidang yang merupakan identitas/ symbol Daerah demi mewujudkan kesejahteraan masyarakat baik material maupun spiritual.
        </p>

        <p className="text-justify text-sm">
          <br />
          Untuk mewujudkannya secara kronologis, telah di bentuk Panitia Penyelenggara Sayembara Logo Daerah Kabupaten Boven Digoel Tahun 2004, oleh Penjabat Bupati Kabupaten Boven Digoel “Bapak. Wilhelmus Tuwok, S.Sos. MSi”, untuk menyelenggarakan sayembara Logo Daerah Kabupaten Boven Digoel, yang diikuti oleh seluruh lapisan masyarakat Kabupaten Boven Digoel. Hasil Sayembara oleh Keputusan Panitia Penyelenggara telah disaring 3 (tiga) pemenang yang hasil karyanya dijadikan sebagai cikal bakal Lambang/Logo Daerah Kabupaten Boven Digoel, dan telah diperkenalkan secara resmi kepada seluruh masyarakat Kabupaten Boven Digoel, tanggal 17 Agustus 2004 pada Acara Resepsi Malam Bersama di Tanah Merah. Yang menarik  dari logo pertama yaitu ada sebuah pita dalam genggaman burung emas bertuliskan “Do Nangau Ninem” yang berarti mengajak semua pihak untuk mensukseskan pembangunan di Kabupaten Boven Digoel ini.
        </p>

      </div>

      <div className="md:w-[30%]">
        <div className="flex flex-col gap-3 pt-4">
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

export default LambangDaerah;
