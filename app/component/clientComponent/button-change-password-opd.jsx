"use client"
import { changePasswordOpd } from '@/app/actions/change-password-opd'
import React, { useEffect, useState } from 'react'

const ButtonChangePasswordOpd = ({userId, username}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [validPass, setValidPass] = useState(false)

    function isPasswordValid(password) {
        const minLength = password.length >= 8;
        const hasNumber = /\d/.test(password); // \d = angka 0-9
        
        return minLength && hasNumber;
    }
    
    useEffect(() => {
        const result = isPasswordValid(newPassword);
        console.log("result", result);
        if (result) {
            setValidPass(true);
        }else{
            setValidPass(false);
        }
    }, [newPassword])

    const handleSubmit = async () => {
        setIsSubmit(true)
        if (!newPassword || !userId) {
            alert("Kolom harus diisi")
            return
        }
        const res = await changePasswordOpd(userId, newPassword)
        if (res){
            alert(`Password untuk user ${username} telah berhasil diubah 👍🏻`)
            document.getElementById(`modal_changepass_user_opd${userId}`).close()
            setNewPassword("")
            setIsSubmit(false)
            return
        }
    }
    

  return (
    <>
        <li onClick={() => document.getElementById(`modal_changepass_user_opd${userId}`).showModal()} className='hover:bg-success rounded-md hover:text-white '>
            <span>Ubah password</span>
        </li>

        <dialog id={`modal_changepass_user_opd${userId}`} className="modal">
            <div className="modal-box justify-center items-center flex flex-col gap-3">
            <p className="flex flex-col text-center ">
                Ubah password untuk user {username}
                <br />
            </p>
            {
                newPassword !== "" && validPass === false &&
                <span className="text-red-500">Password tidak valid</span>
            }
            <label className="input input-success input-md w-full max-w-xs input-bordered flex items-center gap-2">
                Password baru :
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="text" className="grow"  />
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
                            setIsSubmit(false)
                            setNewPassword("")
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

export default ButtonChangePasswordOpd