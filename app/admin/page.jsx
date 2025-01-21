import React from "react";
import { MdEditDocument } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";
import { prisma } from "../lib/db";
import { truncate } from "../lib/truncKalimat";
import { FaEye } from "react-icons/fa";
import ActionButtonForListBerita from "../component/clientComponent/actionButtonForListBerita";

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
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-left">
                  <div className="tooltip z-50" data-tip={berita.judul}>
                    {truncate(berita.judul,30) }
                  </div>
                  </td>
                  <td className="text-center">{new Date(berita.createdAt).toLocaleDateString('id-ID')}</td>
                  <td className="text-center">
                    {berita.isDraft ? (<div className="badge badge-accent text-slate-100">Draft</div>)  : (<div className="badge text-slate-100 badge-success">Live</div>)}
                  </td>
                  <td className="text-center text-blue-500">{berita.kategori.nama}</td>
                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div className="tooltip z-50" data-tip="Lihat Berita">

                    <Link target="_blank" rel="noopener noreferrer" href={`/pages/detail-berita/${berita.slug}`} passHref>
                      <FaEye
                        size={20}
                        className="text-orange-500 cursor-pointer"
                      />
                    </Link>
                  </div>

                  <div className="tooltip z-50" data-tip="Edit Berita">
                    <Link href={`/admin/edit-berita/${berita.id}`}>
                      <MdEditDocument
                        size={20}
                        className="text-blue-500 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="tooltip tooltip-left z-50" data-tip="Hapus Berita">
                    <ActionButtonForListBerita id={berita.id} judul={berita.judul} />
                  </div>
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
