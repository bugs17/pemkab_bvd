"use client";
import { addGalery } from "@/app/actions/add-galery";
import { CreateUserClerk } from "@/app/actions/create-user-clerk";
import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ButtonAddUserWebsite = () => {
    const [email, setEmail] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [role, setRole] = useState("");
    const refRole = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || role === "") {
            alert("Email dan role tidak boleh kosong");
            return;
        }
        setIsSubmit(true);
        const res = await CreateUserClerk(email, role)
        if (res.success) {
            alert("Undangan berhasil dikirim");
            setEmail("");
            setRole("");
            refRole.current.value = "pilih kategori";
            setIsSubmit(false);
            document.getElementById(`modal_invite_user`).close()
        } else {
            alert("Gagal mengundang user, silahkan coba lagi");
            setIsSubmit(false);
        }
    }
  

  return (
    <>
      <button
        onClick={() => document.getElementById(`modal_invite_user`).showModal()}
        className="btn btn-success text-slate-100"
      >
        <CiCirclePlus size={25} />
        Tambah user website
      </button>

      <dialog id={`modal_invite_user`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Kirimkan undangan melalui email
            <br />
          </p>

          <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
            Email :
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="grow"  />
          </label>

          <label className="form-control  w-full max-w-xs">
            <div className="label">
              <span className="label-text">Role admin</span>
            </div>
            <select
              className="select select-md bg-slate-200 select-bordered border-success"
              defaultValue="pilih kategori"
              onChange={(e) => setRole(e.target.value)}
              ref={refRole}
            >
                <option value="pilih kategori" disabled>
                Pilih kategori
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
                  Undang
                </button>
                <form method="dialog">
                  <button
                    onClick={() => {
                        refRole.current.value = "pilih kategori";
                        setEmail("");
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

export default ButtonAddUserWebsite;
