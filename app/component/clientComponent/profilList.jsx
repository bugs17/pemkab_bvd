"use client";
import { truncate } from "@/app/lib/truncKalimat";
import React, { useRef, useState } from "react";
import { MdEditDocument } from "react-icons/md";

import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { updateProfils } from "@/app/actions/edit-profils";

const ProfilList =  ({ judul, urlFrontEnd, urlFile, id }) => {
    const [file, setFile] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const refFile = useRef(null)

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!file) {
        alert("File belum dipilih!")
        setIsSubmit(false)
        return
    }

    
    if (file) {
        await updateProfils(id,file,urlFrontEnd)
        document.getElementById(`modal_update_${judul}`).close()
        refFile.current.value = ""
        alert(`Dokumen ${judul} telah di perbaharui!`)
        setIsSubmit(false)
    }
  }

  return (
    <>
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="font-semibold ">
            {judul.toUpperCase()}
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-center">Jenis File</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <th>-</th>
              <td className="text-left">
                <div className="tooltip z-50" data-tip={judul}>
                  {truncate(judul, 30)}
                </div>
              </td>
              <td className="text-center">
                <div className="badge badge-accent text-slate-100">pdf</div>
              </td>

              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <div
                  className="tooltip z-50"
                  data-tip={`Lihat ${judul}`}
                >
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${urlFrontEnd}`}
                    passHref
                  >
                    <FaEye
                      size={20}
                      className="text-orange-500 cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="tooltip z-50" data-tip="Edit">
                  <MdEditDocument
                    size={20}
                    className="text-blue-500 cursor-pointer"
                    onClick={() =>
                      document
                        .getElementById(`modal_update_${judul}`)
                        .showModal()
                    }
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <dialog id={`modal_update_${judul}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center">
            {`Apakah anda yakin ingin mengganti file ${judul}?`}
            <br />
          </p>
          <input
            type="file"
            accept=".pdf"
            ref={refFile}
            onChange={e => setFile(e.target.files[0])}
            className="file-input file-input-bordered file-input-neutral w-full max-w-xs"
          />
          <div className="modal-action justify-center flex flex-row gap-3">
            {isSubmit ? (
              <span className="loading loading-spinner text-accent"></span>
            ) : (
              <>
                <button
                  onClick={handleSubmit}
                  className="btn text-slate-100 bg-success  hover:text-slate-100 hover:bg-green-950"
                >
                  Simpan Perubahan
                </button>
                <form method="dialog">
                  <button onClick={() => {
                    refFile.current.value = ""
                    setFile(null)
                    }} className="btn">Batal</button>
                </form>
              </>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProfilList;
