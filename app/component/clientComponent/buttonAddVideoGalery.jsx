"use client";
import { addGalery } from "@/app/actions/add-galery";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddVideo = () => {
  const [file, setFile] = useState(null);
  const [judul, setJudul] = useState("");
  const [url, setUrl] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!url || !judul) {
        alert("Kolom harus terisi semua!")
        setIsSubmit(false)
        return
    }

    try {
        await addGalery(file, judul, url)
        setIsSubmit(false)
        setJudul("")
        setUrl("")
        document.getElementById(`modal_update_galery_video`).close()
        alert("Data telah berhasil ditambahkan.")
    } catch (error) {
        
    }
  }

  return (
    <>
      <button
        onClick={() => document.getElementById(`modal_update_galery_video`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Tambah
      </button>

      <dialog id={`modal_update_galery_video`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Tambahkan URL Video ke Galery
            <br />
          </p>

          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            Judul
            <input value={judul} onChange={e => setJudul(e.target.value)} type="text" className="grow"  />
          </label>
          
          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            Url Video
            <input value={url} onChange={e => setUrl(e.target.value)} type="text" className="grow"  />
          </label>

          

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
                      setUrl("");
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

export default ButtonAddVideo;
