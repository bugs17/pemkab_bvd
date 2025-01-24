"use client";
import { updatePejabat } from "@/app/actions/editPejabat";
import React, { useEffect, useRef, useState } from "react";
import { MdEditDocument } from "react-icons/md";

const ButtonEditPejabat = ({ id, jabatanProps, namaProps }) => {
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const refFile = useRef(null);

  useEffect(() => {
    refFile.current.value = "";
    setJabatan(jabatanProps);
    setNama(namaProps);
  }, []);

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!nama || !jabatan) {
        alert("Kolom Nama dan Jabatan tidak boleh kosong!")
        setIsSubmit(false)
        return
    }

    try {
        await updatePejabat(id,file,nama,jabatan)
        setIsSubmit(false)
        document.getElementById(`modal_update_${id}`).close()
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
          onClick={() =>
            document.getElementById(`modal_update_${id}`).showModal()
          }
        />
      </div>

      <dialog id={`modal_update_${id}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Apakah anda yakin ingin merubah data
            <span className="text-xs font-semibold">{jabatan}?</span>
            <br />
          </p>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              value={nama}
              onChange={e => setNama(e.target.value)}
              placeholder="Type here"
              className="input input-success input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Jabatan</span>
            </div>
            <input
              type="text"
              value={jabatan}
              onChange={e => setJabatan(e.target.value)}
              placeholder="jabatan"
              className="input input-success input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Foto</span>
            </div>
            <input
            type="file"
            accept=".png, .jpg, .jpeg, .wpeg"
            ref={refFile}
            onChange={(e) => setFile(e.target.files[0])}
            className="file-input file-input-xs file-input-bordered file-input-neutral w-full max-w-xs"
          />
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
                  Simpan Perubahan
                </button>
                <form method="dialog">
                  <button
                    onClick={() => {
                      refFile.current.value = "";
                      setNama(namaProps)
                      setJabatan(jabatanProps)
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

export default ButtonEditPejabat;
