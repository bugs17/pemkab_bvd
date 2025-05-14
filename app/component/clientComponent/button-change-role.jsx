"use client"
import { changeUserPasswordClerk } from '@/app/actions/change-user-password-clerk'
import { changeUserRoleClerk } from '@/app/actions/change-user-role-clerk'
import React, { useEffect, useRef, useState } from 'react'

const ButtonChangeRole = ({userId, username, role}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [newRole, setNewRole] = useState(role)

    const refRole = useRef(null)

    useEffect(() => {
        refRole.current.value = role
        console.log(role)
    }, [])

    const handleSubmit = async () => {
        setIsSubmit(true)
        if(newRole === "pilih kategori" || !newRole){
            alert("Pilih role sebelum menyimpan perubahan 🥱")
            return
        }

        const res = await changeUserRoleClerk(userId, newRole)
        if (res) {
            alert("Role admin telah diubah 👍🏻")
            document.getElementById(`modal_changeroll_user${userId}`).close()
            setIsSubmit(false)
            return
        }
    }
    

    

  return (
    <>
        <li onClick={() => document.getElementById(`modal_changeroll_user${userId}`).showModal()} className='hover:bg-success rounded-md hover:text-white '>
            <span>Ubah Role</span>
        </li>

        <dialog id={`modal_changeroll_user${userId}`} className="modal">
            <div className="modal-box justify-center items-center flex flex-col gap-3">
            <p className="flex flex-col text-center ">
                Ubah role admin untuk user {username}
                <br />
            </p>
            

            <label className="form-control  w-full max-w-xs">
            <div className="label">
              <span className="label-text">Role admin</span>
            </div>

            <select
              className="select select-md bg-slate-200 select-bordered border-success"
              defaultValue="pilih kategori"
              onChange={(e) => setNewRole(e.target.value)}
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
                    Ubah
                    </button>
                    <form method="dialog">
                    <button
                        onClick={() => {
                            refRole.current.value = role
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
  )
}

export default ButtonChangeRole