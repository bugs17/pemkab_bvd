"use client";
import { addInstansi } from "@/app/actions/add-instansi";
import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddInstansi = ({kategoris}) => {
  const [isSubmit, setIsSubmit] = useState(false)
  const [nama, setNama] = useState("null")
  const [kategori, setKategori] = useState("null")
  const refKategori = useRef(null)

    

    const handleSubmit = async () => {
      setIsSubmit(true)
      if (!nama || !kategori) {
          alert("Tolong isi kolom dengan benar sebelum menyimpan!")
          setIsSubmit(false)
          return
        }
        
        const res = await addInstansi(nama,kategori)
        if (res) {
          alert("Instansi berhasil di tambahkan! 👍🏻")
          setIsSubmit(false)
          document.getElementById(`add_instansi`).close()
          return
        }
        alert("Gagal menambahkan instansi, Coba lagi!")
        setIsSubmit(false)
        return
    }


    const handleBatal = () => {
      refKategori.current.value = "--pilih ketegori instansi--"
      setNama("")
      
    }
  

  return (
    <>
      <button
        onClick={() => document.getElementById(`add_instansi`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Tambah Instansi
      </button>

      <dialog id={`add_instansi`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Tambah instansi
            <br />
          </p>

          <div className='flex flex-row w-full mb-4'>
              <fieldset className="fieldset w-full justify-center items-center flex">
                  <select ref={refKategori} onChange={e => setKategori(e.target.value)} defaultValue="--pilih ketegori instansi--" className="select select-success w-full">
                      <option disabled={true} className='text-slate-500'>--pilih ketegori instansi--</option>
                      {
                        kategoris.length > 0 && (
                          kategoris.map((kategori, index) => (
                            <option key={index} value={kategori.id}>{kategori.nama}</option>
                          ))
                        )
                      }
                    
                  </select>
              </fieldset>
          </div>

          <div className='flex flex-row w-full mb-4'>
              <fieldset className="fieldset w-full">
                <input value={nama} onChange={e => setNama(e.target.value)} type="text" className="input w-full input-success" placeholder="Nama Instansi/Sekretariat" />
              </fieldset>
          </div>



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
                    onClick={handleBatal}
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

export default ButtonAddInstansi;
