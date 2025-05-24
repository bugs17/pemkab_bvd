"use client";
import { Pencil } from "lucide-react";
import React, {  useEffect, useState } from "react";

const ButtonAddSosialMedia = ({field, defaultValue}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [url, setUrl] = useState("")
    const [kolom, setKolom] = useState("")

    const handleSubmit = async (e) => {
        
    }

    useEffect(() => {
      setKolom(field)
    }, [])


    
  

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => document.getElementById(`modal_add_sosial`).showModal()}
      >
        <Pencil size={18} className='text-success' />
      </div>

      <dialog id={`modal_add_sosial`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Add Url/Alamat untuk {kolom}
            <br />
          </p>

          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            Url/Alamat :
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

export default ButtonAddSosialMedia;
