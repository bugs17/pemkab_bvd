"use client";
import { CreateUserClerk } from "@/app/actions/create-user-clerk";
import React, { useEffect, useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddUserOpd = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [validPass, setValidPass] = useState(null);
    const [role, setRole] = useState("");
    const refRole = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === "" || role === "" || password === "" || firstName === "" || lastName === "") {
            alert("TOlong diisi semua data 🤪");
            return;
        }
        setIsSubmit(true);
        const res = await CreateUserClerk(role, firstName, lastName, username, password)
        if (res.success) {
            alert("User telah berhasil dibuat");
            setUsername("");
            setFirstName("");
            setLastName("");
            setPassword("");
            setRole("");
            refRole.current.value = "pilih instansi";
            setIsSubmit(false);
            document.getElementById(`modal_invite_user`).close()
        } else {
            alert("Gagal mengundang user, silahkan coba lagi");
            setIsSubmit(false);
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
              onChange={(e) => setRole(e.target.value)}
              ref={refRole}
            >
                <option value="pilih instansi" disabled>
                Pilih instansi
                </option>

                <option key="admin-induk" value="admin-induk">
                    Admin Induk
                </option>
                <option key="admin-berita" value="admin-berita">
                    Admin Berita
                </option>
                <option key="admin-dgtv" value="admin-dgtv">
                    Admin Digoel TV
                </option>
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
                        refRole.current.value = "pilih instansi";
                        setUsername("");
                        setFirstName("");
                        setLastName("");
                        setPassword("");
                        setRole("");
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
