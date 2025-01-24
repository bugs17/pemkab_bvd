"use client";
import { addGalery } from "@/app/actions/add-galery";
import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddFoto = () => {
  const [file, setFile] = useState(null);
  const [judul, setJudul] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const refFile = useRef(null);

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!file || !judul) {
        alert("Kolom harus terisi semua!")
        setIsSubmit(false)
        return
    }

    try {
        await addGalery(file, judul)
        setIsSubmit(false)
        setJudul("")
        refFile.current.value = ""
        document.getElementById(`modal_update_galery_`).close()
        alert("Data telah berhasil ditambahkan.")
    } catch (error) {
        
    }
  }

  return (
    <>
      <button
        onClick={() => document.getElementById(`modal_update_galery_`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Tambah
      </button>

      <dialog id={`modal_update_galery_`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Tambahkan Foto ke Galery
            <br />
          </p>

          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            Judul
            <input value={judul} onChange={e => setJudul(e.target.value)} type="text" className="grow"  />
          </label>

          <input
            type="file"
            accept=".jpeg, .jpg, .png, .wpeg"
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
                  Simpan
                </button>
                <form method="dialog">
                  <button
                    onClick={() => {
                      refFile.current.value = "";
                      setFile(null);
                      setJudul("");
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

export default ButtonAddFoto;
