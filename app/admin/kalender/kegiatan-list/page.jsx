import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";
import { HiPencilSquare } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import React from "react";
import Link from "next/link";
import ButtonDeleteKegiatan from "@/app/component/clientComponent/buttonDeleteKegiatan";

const KegiatanList = async () => {
  const kegiatans = await prisma.kegiatan.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <HiPencilSquare size={30} className="text-green-950" />
          <Link
            href={"/admin/kalender/add-kegiatan"}
            className="font-semibold cursor-pointer hover:text-green-950"
          >
            Tambah Kegiatan
          </Link>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-center">Deskripsi</th>
              <th className="text-center">Mulai</th>
              <th className="text-center">Selesai</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {kegiatans.length > 0 ? (
              kegiatans.map((kegiatan, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td className="text-left">
                    <div className="tooltip z-50" data-tip={kegiatan.judul}>
                      {truncate(kegiatan.judul, 30)}
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="tooltip z-50" data-tip={kegiatan.deskripsi}>
                      {truncate(kegiatan.deskripsi, 30)}
                    </div>
                  </td>
                  <td className="text-center">
                    {new Date(kegiatan.waktuMulai).toLocaleDateString("id-ID")}
                  </td>
                  <td className="text-center">
                    {new Date(kegiatan.waktuSelesai).toLocaleDateString(
                      "id-ID"
                    )}
                  </td>

                  <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                    {/* <div className="tooltip z-50" data-tip="Lihat pengumuman">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={``}
                        passHref
                      >
                        <FaEye
                          size={20}
                          className="text-orange-500 cursor-pointer"
                        />
                      </Link>
                    </div> */}

                    <div className="tooltip z-50" data-tip="Edit kegiatan">
                      <Link href={`/admin/kalender/edit-kegiatan/${kegiatan.id}`}>
                        <MdEditDocument
                          size={20}
                          className="text-blue-500 cursor-pointer"
                        />
                      </Link>
                    </div>
                    <div
                      className="tooltip tooltip-left z-50"
                      data-tip="Hapus kegiatan"
                    >
                      <ButtonDeleteKegiatan id={kegiatan.id} judul={kegiatan.judul} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>-</th>
                <td className="text-left">Belum ada pengumuman</td>
                <td className="text-center">Belum ada pengumuman</td>
                <td className="text-center">Belum ada pengumuman</td>
                <td className="text-center">Belum ada pengumuman</td>
                <td className="text-center">Belum ada pengumuman</td>
                <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
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

export default KegiatanList;
