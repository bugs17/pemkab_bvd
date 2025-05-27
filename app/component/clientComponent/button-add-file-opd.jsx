"use client"
import { addFileOpd } from '@/app/actions/add-file-opd'
import { prisma } from '@/app/lib/db'
import { Pencil } from 'lucide-react'
import React, { useRef, useState } from 'react'

const ButtonAddFileOpd = ({docs}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [file, setFile] = useState(null)
    const refFile = useRef(null)

    const handleSubmit = async () => {
        if (!file) {
            alert("Pilih file terlebih dahulu!")
            return
        }

        await addFileOpd(file, docs)
    }

  return (
    <>
        <div onClick={() => document.getElementById(`modal_upload_file_instansi_${docs}`).showModal()} className="tooltip" data-tip={`Upload ${docs}`}>
            <Pencil size={12} className='text-info cursor-pointer' />
        </div>

        <dialog id={`modal_upload_file_instansi_${docs}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Upload file {docs}
            <br />
          </p>

          <fieldset className="fieldset">
            <input ref={refFile} onChange={(e) => setFile(e.target.files[0])} accept="application/pdf" type="file" className="file-input" />
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
  )
}

export default ButtonAddFileOpd