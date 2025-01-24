"use client";
import { updatePotensiDaerah } from "@/app/actions/editPotensiDaerah";
import React, { useEffect, useRef, useState } from "react";
import { MdEditDocument } from "react-icons/md";

const ButtonEditPotensiDaerah = ({ id, judul }) => {
  const [file, setFile] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const refFile = useRef(null);

  useEffect(() => {
    refFile.current.value = "";
  }, []);

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!file) {
        alert("File document tidak boleh kosong")
        setIsSubmit(false)
        return
    }

    try {
        await updatePotensiDaerah(id,file)
        setIsSubmit(false)
        document.getElementById(`modal_update_${judul}${id}`).close()
        refFile.current.value = "";
        setIsSubmit(false)
    } catch (error) {
        
    }
    alert("Data telah berhasil di perbaharui!")
  }

  return (
    <>
      <div className="tooltip z-50" data-tip="Edit">
        <MdEditDocument
          size={20}
          className="text-blue-500 cursor-pointer"
          onClick={() =>document.getElementById(`modal_update_${judul}${id}`).showModal()
          }
        />
      </div>

      <dialog id={`modal_update_${judul}${id}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Apakah anda yakin ingin mengganti dokumen untuk
            <span className="text-xs font-semibold">{judul}?</span>
            <br />
          </p>
          
          <input
            type="file"
            accept=".pdf"
            ref={refFile}
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input file-input-md file-input-bordered file-input-neutral w-full max-w-xs"
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
                  <button
                    onClick={() => {
                      refFile.current.value = "";
                      setFile(null);
                    }}
                    className="btn"
                  >
                    Batal
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ButtonEditPotensiDaerah;
