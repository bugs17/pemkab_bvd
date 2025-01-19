import React from "react";
import { MdEditDocument } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiPencilSquare } from "react-icons/hi2";
import Link from "next/link";

const Berita = () => {
  return (
    <div className="h-full">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <HiPencilSquare size={30} className="text-green-950" />
          <Link href={'/admin/add-berita'} className="font-semibold cursor-pointer hover:text-green-950">
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
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>1</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td className="text-left">
                Pertama Kali Lomba, DWP Boven Digoel Raih Juara Dua Paduan Suara
                Tingkat Provinsi
              </td>
              <td className="text-center">12/16/2020</td>
              <td className="text-center">Live</td>
              <td className="text-center">Daerah</td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <MdEditDocument
                  size={20}
                  className="text-blue-500 cursor-pointer"
                />
                <MdDelete size={20} className="text-red-700 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Berita;
