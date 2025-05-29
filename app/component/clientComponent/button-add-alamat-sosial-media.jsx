"use client";
import { editKontak } from "@/app/actions/edit-kontak";
import { Pencil } from "lucide-react";
import React, {  useEffect, useState } from "react";

const ButtonAddSosialMedia = ({field, defaultValue, id}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [data, setData] = useState("")
    const [kolom, setKolom] = useState("")

    const handleSubmit = async (e) => {
        setIsSubmit(true)
        if (!data) {
          alert("Lengkapi kolom terlebih dahulu!")
          setIsSubmit(false)
          return
        }

        const res = await editKontak(id,field, data)
        if (res) {
          alert("Sukses 👍🏻")
          setIsSubmit(false)
          document.getElementById(`modal_add_sosial_${field}${id}`).close()
          return
        }
        alert("Gagal, Coba lagi!")
        setIsSubmit(false)
        return
    }

    useEffect(() => {
      setKolom(field)
      setData(defaultValue)
    }, [])


  

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => document.getElementById(`modal_add_sosial_${field}${id}`).showModal()}
      >
        <Pencil size={18} className='text-success' />
      </div>

      <dialog id={`modal_add_sosial_${field}${id}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Lengkapi kolom di bawah ini.
            <br />
          </p>

          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            {
              field === 'facebook' && (
                <span className="text-gray-400">url facebook :</span>
              )
            }
            {
              field === 'instagram' && (
                <span className="text-gray-400">url instagram :</span>
              )
            }
            {
              field === 'twitter' && (
                <span className="text-gray-400">url twitter :</span>
              )
            }
            {
              field === 'linkedIn' && (
                <span className="text-gray-400">url linkedIn :</span>
              )
            }
            {
              field === 'email' && (
                <span className="text-gray-400">alamat email :</span>
              )
            }
            {
              field === 'phone' && (
                <span className="text-gray-400">Telp :</span>
              )
            }
            {
              field === 'alamat' && (
                <span className="text-gray-400">Alamat :</span>
              )
            }
            <input value={data} onChange={e => setData(e.target.value)} type="text" className="grow"  />
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
                      setData(defaultValue)
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


