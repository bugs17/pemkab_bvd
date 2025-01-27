"use client";
import { hapusBerita } from "@/app/actions/hapusBerita";
import React, { useRef, useState } from "react";

import { MdDelete } from "react-icons/md";

const ActionButtonForListBerita = ({ id, judul, onDelete }) => {
    const [isSubmitButton, setisSubmitButton] = useState(false)
    const refModal = useRef(null)

    const handleHapus = async () => {
      setisSubmitButton(true)
        const response = await hapusBerita(id)
        if (response) {
            alert("Data berhasil di Hapus! 🧨")
            setisSubmitButton(false)
            refModal.current.close()
            onDelete(id)
        }
        setisSubmitButton(false)
    }

  return (
    <>
      <MdDelete size={20} onClick={() => document.getElementById(`modal_delete_berita_${id}`).showModal()} className="text-red-700 cursor-pointer" />

      <dialog ref={refModal} id={`modal_delete_berita_${id}`} className="modal">
        <div className="modal-box justify-center">
          <h3 className="font-bold text-lg text-center ">Warning!</h3>

          <p className="flex flex-col text-center">
            Apakah anda yaking ingin menghapus:
            <br /> 
            <span className="font-semibold">{judul}</span>
          </p>

          <div className="modal-action justify-center flex flex-row gap-3">
            {isSubmitButton ? (
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

export default ActionButtonForListBerita;
