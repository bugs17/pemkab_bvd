"use client";
import { hapusKegiatan } from "@/app/actions/hapusKegiatan";
import React, { useState } from "react";

import { MdDelete } from "react-icons/md";

const ButtonDeleteKegiatan = ({ id, judul }) => {
    const [isSubmit, setIsSubmit] = useState(false)

    const handleHapus = async () => {
        setIsSubmit(true)
        const response = await hapusKegiatan(id)
        if (response) {
            alert("Data berhasil di Hapus! 🧨")
            setIsSubmit(false)
            document.getElementById(`modal_delete_kegiatan_${id}`).close()
        }
        setIsSubmit(false)
    }

  return (
    <>
      <MdDelete size={20} onClick={() => document.getElementById(`modal_delete_kegiatan_${id}`).showModal()} className="text-red-700 cursor-pointer" />

      <dialog id={`modal_delete_kegiatan_${id}`} className="modal">
        <div className="modal-box justify-center">
          <h3 className="font-bold text-lg text-center ">Warning!</h3>

          <p className="flex flex-col text-center">
            Apakah anda yaking ingin menghapus:
            <br /> 
            <span className="font-semibold">{judul}</span>
          </p>

          <div className="modal-action justify-center flex flex-row gap-3">
            {isSubmit ? (
              <span className="loading loading-spinner text-accent"></span>
            ) : (
              <>
                <button
                  onClick={handleHapus}
                  className="btn text-black bg-red-500 hover:bg-red-800 hover:text-white"
                >
                  Hapus
                </button>
                <form method="dialog">
                  <button className="btn">Batal</button>
                </form>
              </>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ButtonDeleteKegiatan;
