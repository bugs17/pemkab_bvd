"use client";
import { addHero } from "@/app/actions/add-hero";
import { CreateUserClerk } from "@/app/actions/create-user-clerk";
import React, { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddHero = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [file, setFile] = useState(null)
  const refFile = useRef(null)

    

    const handleSubmit = async () => {
        if (!file) {
            alert("Pilih file terlebih dahulu sebelum simpan");
            return;
        }
        setIsSubmit(true);
        
        // add video hero melalui action
        try {
          const res = await addHero(file)
          if (res) {
            alert("Hero berhasil di ubah")
            document.getElementById(`modal_upload_hero`).close()
            setFile(null)
            refFile.current.value = ""
            setIsSubmit(false)
            return
          }
        } catch (error) {
          alert("Gagal update hero. coba lagi!")
          refFile.current.value = ""
          setFile(null)
          setIsSubmit(false)
          return
        }finally{
          setIsSubmit(false)
        }
    }


    
  

  return (
    <>
      <button
        onClick={() => document.getElementById(`modal_upload_hero`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Upload hero website
      </button>

      <dialog id={`modal_upload_hero`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Upload Hero website
            <br />
          </p>

          <fieldset className="fieldset">
            <input ref={refFile} onChange={(e) => setFile(e.target.files[0])} accept="video/*" type="file" className="file-input" />
            <label className="label">Hanya mendukung video.</label>
          </fieldset>


          <div className="modal-action justify-center flex flex-row gap-3">
            {isSubmit ? (
              <span className="loading loading-spinner text-accent"></span>
            ) : (
              <>
                <button
                  onClick={handleSubmit}
                  className="btn text-slate-100 bg-success  hover:text-slate-100 hover:bg-green-950"
                >
                  Tambah
                </button>
                <form method="dialog">
                  <button
                    onClick={() => {
                      refFile.current.value = ""
                      setFile(null)
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

export default ButtonAddHero;
