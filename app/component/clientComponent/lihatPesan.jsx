"use client";
import React from "react";
import { FaEye } from "react-icons/fa";

const LihatPesan = ({nama,pesan, id}) => {
  return (
    <>
      <FaEye
        onClick={() => document.getElementById(`modal_lihat_berita_${id}`).showModal()}
        size={20}
        className="text-orange-500 cursor-pointer"
      />

      <dialog id={`modal_lihat_berita_${id}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            <span className="text-xs font-semibold">{nama.toUpperCase()}</span>
            <br />
          </p>

            <p className="px-3 text-justify">{pesan}</p>
          

          <div className="modal-action justify-center flex flex-row gap-3">
            <form method="dialog">
              <button onClick={() => {}} className="btn">
                Tutup
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LihatPesan;
