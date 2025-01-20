import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { prisma } from "../lib/db";
import { truncate } from "../lib/truncKalimat";

const Berita = async () => {
  const beritas = await prisma.berita.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      kategori: {
        select: {
          nama: true,
        },
      },
    },
  });

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
          <div className="form-control">
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
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-center">Tanggal</th>
              <th className="text-center">Status</th>
              <th className="text-center">Kategory</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {beritas.length > 0 ? (
              beritas.map((berita, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td className="text-left">{truncate(berita.judul,30) }</td>
                  <td className="text-center">{new Date(berita.createdAt).toLocaleDateString('id-ID')}</td>
                  <td className="text-center">
                    {berita.isDraft ? "Draft" : "Live"}
                  </td>
                  <td className="text-center">{berita.kategori.nama}</td>
                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                    <MdEditDocument
                      size={20}
                      className="text-blue-500 cursor-pointer"
                    />
                    <MdDelete
                      size={20}
                      className="text-red-700 cursor-pointer"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>-</th>
                <td className="text-left">Belum ada berita</td>
                <td className="text-center">Belum ada berita</td>
                <td className="text-center">Belum ada berita</td>
                <td className="text-center">Belum ada berita</td>
                <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  {/* <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                  
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" /> */}
                  ----
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Berita;
