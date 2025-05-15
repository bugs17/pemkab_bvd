"use client";
import { CreateUserClerk } from "@/app/actions/create-user-clerk";
import { createUserOpd } from "@/app/actions/create-user-opd";
import React, { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddUserOpd = ({instansis}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [validPass, setValidPass] = useState(null);
    const [instansiSelected, setInstansiSelected] = useState("");
    const refInstansi = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmit(true)
        if (!username || !password || !instansiSelected) {
          alert("Tolong isi semua kolom sebelum tambah 🥱")
        }

        const res = await createUserOpd(username, password, instansiSelected)
        if (res) {
          alert("User OPD berhasil di buat 👍🏻")
          setUsername("")
          setPassword("")
          refInstansi.current.value = "pilih instansi"
          document.getElementById(`modal_invite_user_opd`).close()
          setIsSubmit(false)
        }
    }

    function isPasswordValid(password) {
        const minLength = password.length >= 8;
        const hasNumber = /\d/.test(password); // \d = angka 0-9
        
        return minLength && hasNumber;
        }

    useEffect(() => {
        const result = isPasswordValid(password);
        console.log("result", result);
        if (result) {
            setValidPass(true);
        }else{
            setValidPass(false);
        }
    }, [password])

    
  

  return (
    <>
      <button
        onClick={() => document.getElementById(`modal_invite_user_opd`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Tambah user OPD
      </button>

      <dialog id={`modal_invite_user_opd`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Buat user baru untuk admin OPD/Instansi
            <br />
          </p>

          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            Username :
            <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="grow"  />
          </label>
          
          {
            password !== "" && validPass === false &&
            <span className="text-red-500">Password tidak valid</span>
          }
          <label className={` input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2`}>
            Password :
            <input value={password} onChange={e => setPassword(e.target.value)} type="text" className="grow"  />
          </label>

          <label className="form-control  w-full max-w-xs">
            <div className="label">
              <span className="label-text">Instansi</span>
            </div>
            <select
              className="select select-md bg-slate-200 select-bordered border-success"
              defaultValue="pilih instansi"
              onChange={(e) => setInstansiSelected(e.target.value)}
              ref={refInstansi}
            >
                <option value="pilih instansi" disabled>
                Pilih instansi
                </option>

                {instansis.length > 0 && 
                  instansis.map((item) => (
                  <option key={item.id} value={item.id}>
                      {item.namaInstansi}
                  </option>
                  ))
                }
            </select>
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
                  Tambah
                </button>
                <form method="dialog">
                  <button
                    onClick={() => {
                        refInstansi.current.value = "pilih instansi";
                        setUsername("");
                        setPassword("");
                        setInstansiSelected("");
                        setIsSubmit(false);
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

export default ButtonAddUserOpd;
