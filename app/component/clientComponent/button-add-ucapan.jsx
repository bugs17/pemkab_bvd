"use client";
import { addUcapan } from "@/app/actions/add-ucapan";
import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddUcapan = () => {
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
          const res = await addUcapan(file)
          if (res) {
            alert("Ucapan telah di upload 👍🏻")
            document.getElementById(`modal_upload_ucapan`).close()
            setFile(null)
            refFile.current.value = ""
            setIsSubmit(false)
            return
          }
        } catch (error) {
          alert("Gagal upload ucapan. coba lagi!")
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
        onClick={() => document.getElementById(`modal_upload_ucapan`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Tambah gambar
      </button>

      <dialog id={`modal_upload_ucapan`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Upload Gambar ucapan atau pengumuman
            <br />
          </p>

          <fieldset className="fieldset">
            <input ref={refFile} onChange={(e) => setFile(e.target.files[0])} accept="image/*" type="file" className="file-input" />
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
                  Simpan
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

export default ButtonAddUcapan;
