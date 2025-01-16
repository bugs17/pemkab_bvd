import Image from "next/image";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

const DetailBerita = ({ params }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="md:w-[70%] w-full p-8">
        <div className="flex flex-col gap-6 md:mb-8">
          <div className="badge badge-outline badge-success badge-xs p-2">
            DAERAH
          </div>
          <h1 className="text-xl font-semibold">
            Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
            Tingkat Provinsi
          </h1>
          <span className="flex flex-row items-center text-xs text-slate-400">
            <FaCalendarDays className="mr-2" />
            Senin, 14 Oktober 2024
          </span>
          <img
            alt="contoh"
            src="https://bovendigoelkab.go.id/uploads/file/berita/br6785b5a5d0899.jpg"
            width="auto" // Ganti dengan ukuran yang diinginkan dalam pixel
            height="auto" // Menjaga aspek rasio gambar
            className="rounded-md"
          />
          <p className="text-justify">
          Boven Digoel, InfoPublik - Dharma Wanita Persatuan (DWP) Kabupaten Boven Digoel meraih juara dua Lomba Paduan Suara Tingkat Provinsi Papua Selatan yang digelar Dharma Wanita Provinsi Papua Selatan, Senin (2/12/2024). DWP Boven Digoel menerjunkan 15 personel terbaiknya.
          </p>
          <p className="text-justify">
          Boven Digoel, InfoPublik - Dharma Wanita Persatuan (DWP) Kabupaten Boven Digoel meraih juara dua Lomba Paduan Suara Tingkat Provinsi Papua Selatan yang digelar Dharma Wanita Provinsi Papua Selatan, Senin (2/12/2024). DWP Boven Digoel menerjunkan 15 personel terbaiknya.
          </p>
          <p className="text-justify">
          Boven Digoel, InfoPublik - Dharma Wanita Persatuan (DWP) Kabupaten Boven Digoel meraih juara dua Lomba Paduan Suara Tingkat Provinsi Papua Selatan yang digelar Dharma Wanita Provinsi Papua Selatan, Senin (2/12/2024). DWP Boven Digoel menerjunkan 15 personel terbaiknya.
          </p>
          <p className="text-justify">
          Boven Digoel, InfoPublik - Dharma Wanita Persatuan (DWP) Kabupaten Boven Digoel meraih juara dua Lomba Paduan Suara Tingkat Provinsi Papua Selatan yang digelar Dharma Wanita Provinsi Papua Selatan, Senin (2/12/2024). DWP Boven Digoel menerjunkan 15 personel terbaiknya.
          </p>
          <p className="text-justify">
          Boven Digoel, InfoPublik - Dharma Wanita Persatuan (DWP) Kabupaten Boven Digoel meraih juara dua Lomba Paduan Suara Tingkat Provinsi Papua Selatan yang digelar Dharma Wanita Provinsi Papua Selatan, Senin (2/12/2024). DWP Boven Digoel menerjunkan 15 personel terbaiknya.
          </p>
        </div>
      </div>
      <div className="md:w-[30%] w-full bg-red-400">Haloo</div>
    </div>
  );
};

export default DetailBerita;
