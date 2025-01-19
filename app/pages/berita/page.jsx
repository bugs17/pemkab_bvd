import React from "react";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";

const Beritas = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pt-6 items-center justify-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 h-8 md:w-auto"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 mb-20 flex flex-col ">
        <div className="divider divider-success">
          <span className="text-green-700">BERITA</span>
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center md:flex-row">
          <div className="card lg:w-1/5 md:w-1/5 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://bovendigoelkab.go.id/uploads/file/berita/br670dfd06c7b37.jpg"
                alt="cover"
              />
            </figure>
            <div className="card-body">
              <Link
                href={"/pages/detail-berita/kpu-boven-mengadakan-pertemuan"}
                className="card-title cursor-pointer hover:text-red-500"
              >
                KPU Boven Digoel Gelar Debat Publik Pertama, Masyarakat...
              </Link>
              <p>
                Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten
                Boven Digoel menggelar...
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-neutral">
                  <FaCalendarDays className="mr-2" />
                  Senin, 14 Oktober 2024
                </div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/5 md:w-1/5 bg-base-100 shadow-xl">
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
              <p>
                Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten
                Boven Digoel menggelar...
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-neutral">
                  <FaCalendarDays className="mr-2" />
                  Senin, 14 Oktober 2024
                </div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/5 md:w-1/5 bg-base-100 shadow-xl">
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
              <p>
                Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten
                Boven Digoel menggelar...
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-neutral">
                  <FaCalendarDays className="mr-2" />
                  Senin, 14 Oktober 2024
                </div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/5 md:w-1/5 bg-base-100 shadow-xl">
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
              <p>
                Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten
                Boven Digoel menggelar...
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-neutral">
                  <FaCalendarDays className="mr-2" />
                  Senin, 14 Oktober 2024
                </div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/5 md:w-1/5 bg-base-100 shadow-xl">
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
              <p>
                Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten
                Boven Digoel menggelar...
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-neutral">
                  <FaCalendarDays className="mr-2" />
                  Senin, 14 Oktober 2024
                </div>
              </div>
            </div>
          </div>
          <div className="card lg:w-1/5 md:w-1/5 bg-base-100 shadow-xl">
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
              <p>
                Boven Digoel, InfoPublik - Komisi Pemilihan Umum (KPU) Kabupaten
                Boven Digoel menggelar...
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-neutral">
                  <FaCalendarDays className="mr-2" />
                  Senin, 14 Oktober 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beritas;
