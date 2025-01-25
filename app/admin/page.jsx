import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { prisma } from "../lib/db";

import ListBeritaAdmin from "../component/clientComponent/listBeritaAdmin";

const Berita = async () => {
  return (
    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <HiPencilSquare size={30} className="text-green-950" />
          <Link
            href={"/admin/add-berita"}
            className="font-semibold cursor-pointer hover:text-green-950"
          >
            Tambah Berita
          </Link>
        </div>
        <div className="flex flex-row items-center gap-1">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Cari"
              className="input bg-base-300 input-bordered w-24 h-8 md:w-auto"
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
          </button> */}
        </div>
      </div>
        <ListBeritaAdmin />
    </div>
  );
};

export default Berita;
