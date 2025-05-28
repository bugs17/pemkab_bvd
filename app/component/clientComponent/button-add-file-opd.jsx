"use client"
import { addFileOpd } from '@/app/actions/add-file-opd'
import { prisma } from '@/app/lib/db'
import { Pencil } from 'lucide-react'
import React, { useRef, useState } from 'react'

const ButtonAddFileOpd = ({docs, idInstansi}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [file, setFile] = useState(null)
    const [tahunAnggaran, setTahunAnggaran] = useState("")
    const [ta1, setTa1] = useState('')
    const [ta2, setTa2] = useState('')
    const refFile = useRef(null)
    const refPeriode1 = useRef(null)
    const refPeriode2 = useRef(null)
    const refTahunAnggaran = useRef(null)


    const submitProfil = async () => {
        setIsSubmit(true)
        if (!file) {
            alert("Pilih file profil terlebih dahulu!")
            setIsSubmit(false)
            return
        }
        const res =  await addFileOpd(file, docs,idInstansi)
        if (res) {
            alert("Data profil berhasil di tambahkan! 👍🏻")
            setIsSubmit(false)
            setFile(null)
            refFile.current.value = ""
            return
        }
        alert("Gagal menambahkan profil, coba lagi!")
        setIsSubmit(false)
        document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).close()

        return
    }

    const submitRenstra = async () => {
        setIsSubmit(true)
        if (!file || !ta1 || !ta2) {
            alert("Tolong isi semua kolom dengan benar!")
            setIsSubmit(false)
            return
        }

        const periodeRenstra = `${ta1}-${ta2}`

        const res = await addFileOpd(file, docs, idInstansi, periodeRenstra)
        if (res) {
            alert("Data renstra berhasil di tambahkan!")
            setTa1("")
            setTa2("")
            refPeriode1.current.value = "--pilih periode awal--"
            refPeriode2.current.value = "--pilih periode akhir--"
            refFile.current.value = ""
            setIsSubmit(false)
            document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).close()

            return
        }

        alert("Gagal menambahkan data Renstra, Coba lagi!")
        setIsSubmit(false)
        document.getElementById(`modal_upload_file_instansi_${docs}`).close()

        return

    }

    const submitRenja = async () => {
        setIsSubmit(true)
        if (!file || !tahunAnggaran) {
            alert("Mohon mengisi semua kolom sebelum kirim")
            setIsSubmit(false)
            return
        }

        const res = await addFileOpd(file, docs, idInstansi, tahunAnggaran)
        if (res) {
            alert("Data Renja berhasil di tambahkan!")
            setTahunAnggaran("")
            refFile.current.value = ""
            refTahunAnggaran.current.value = "--pilih tahun anggaran--"
            setIsSubmit(false)
            document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).close()
            return
        }

        alert("Gagal menambahkan data Renja, Coba lagi!")
        setIsSubmit(false)
        return
    }
    
    const submitLakip = async () => {
        setIsSubmit(true)
        if (!file || !tahunAnggaran) {
            alert("Mohon mengisi semua kolom sebelum kirim")
            setIsSubmit(false)
            return
        }

        const res = await addFileOpd(file, docs, idInstansi, tahunAnggaran)
        if (res) {
            alert("Data Lakip berhasil di tambahkan!")
            setTahunAnggaran("")
            refFile.current.value = ""
            refTahunAnggaran.current.value = "--pilih tahun anggaran--"
            setIsSubmit(false)
            document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).close()
            return
        }

        alert("Gagal menambahkan data Lakip, Coba lagi!")
        setIsSubmit(false)
        return
    }
    
    const submitLppd = async () => {
        setIsSubmit(true)
        if (!file || !tahunAnggaran) {
            alert("Mohon mengisi semua kolom sebelum kirim")
            setIsSubmit(false)
            return
        }

        const res = await addFileOpd(file, docs, idInstansi, tahunAnggaran)
        if (res) {
            alert("Data Lppd berhasil di tambahkan!")
            setTahunAnggaran("")
            refFile.current.value = ""
            refTahunAnggaran.current.value = "--pilih tahun anggaran--"
            setIsSubmit(false)
            document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).close()
            return
        }

        alert("Gagal menambahkan data Lppd, Coba lagi!")
        setIsSubmit(false)
        return
    }
    
    const submitDpa = async () => {
        setIsSubmit(true)
        if (!file || !tahunAnggaran) {
            alert("Mohon mengisi semua kolom sebelum kirim")
            setIsSubmit(false)
            return
        }

        const res = await addFileOpd(file, docs, idInstansi, tahunAnggaran)
        if (res) {
            alert("Data Dpa berhasil di tambahkan!")
            setTahunAnggaran("")
            refFile.current.value = ""
            refTahunAnggaran.current.value = "--pilih tahun anggaran--"
            setIsSubmit(false)
            document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).close()
            return
        }

        alert("Gagal menambahkan data Dpa, Coba lagi!")
        setIsSubmit(false)
        return
    }

    const handleBatal = () => {
        switch (docs) {
            case 'profil':
                refFile.current.value = ""
                setFile(null)
                break
            case 'renstra':
                setTa1("")
                setTa2("")
                refPeriode1.current.value = "--pilih periode awal--"
                refPeriode2.current.value = "--pilih periode akhir--"
                refFile.current.value = ""
                break
            case 'renja':
                setTahunAnggaran("")
                refFile.current.value = ""
                refTahunAnggaran.current.value = "--pilih tahun anggaran--"
                break
            case 'lakip':
                setTahunAnggaran("")
                refFile.current.value = ""
                refTahunAnggaran.current.value = "--pilih tahun anggaran--"
                break
            case 'lakip':
                setTahunAnggaran("")
                refFile.current.value = ""
                refTahunAnggaran.current.value = "--pilih tahun anggaran--"
                break
            case 'lppd':
                setTahunAnggaran("")
                refFile.current.value = ""
                refTahunAnggaran.current.value = "--pilih tahun anggaran--"
                break
            case 'dpa':
                setTahunAnggaran("")
                refFile.current.value = ""
                refTahunAnggaran.current.value = "--pilih tahun anggaran--"
                break

        
            default:
                break;
        }
    }

    const handleSubmit = async () => {
        switch (docs) {
            case 'profil':
                submitProfil()
                break
            case 'renstra':
                submitRenstra()
                break
            case 'renja':
                submitRenja()
                break
            case 'lakip':
                submitLakip()
                break
            case 'lppd':
                submitLppd()
                break
            case 'dpa':
                submitDpa()
                break
        
            default:
                break;
        }
    }

    const years = Array.from({ length: 81 }, (_, i) => 2020 + i)

  return (
    <>
        <div onClick={() => document.getElementById(`modal_upload_file_instansi_${docs}_${idInstansi}`).showModal()} className="tooltip" data-tip={`Upload ${docs}`}>
            <Pencil size={12} className='text-info cursor-pointer' />
        </div>

        <dialog id={`modal_upload_file_instansi_${docs}_${idInstansi}`} className="modal">
        <div className="modal-box justify-center items-center flex flex-col gap-3">
          <p className="flex flex-col text-center ">
            Upload file {docs}
            <br />
          </p>

            {docs === 'renstra' && (
                <div className='flex flex-row gap-5 mb-4'>
                        <fieldset className="fieldset w-full  justify-center items-center flex">
                            <select ref={refPeriode1} onChange={e => setTa1(e.target.value)} defaultValue="--pilih periode awal--" className="select select-success ">
                                <option disabled={true} className='text-slate-500'>--pilih periode awal--</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                                
                            </select>
                        </fieldset>

                        <fieldset className="fieldset w-full  justify-center items-center flex">
                            <select ref={refPeriode2} onChange={e => setTa2(e.target.value)} defaultValue="--pilih periode akhir--" className="select select-success ">
                                <option disabled={true} className='text-slate-500'>--pilih periode akhir--</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                                
                            </select>
                        </fieldset>

                </div>
            )}

            {["renja","lakip", "lppd", "dpa"].includes(docs) && (
                <div className='flex flex-row w-full mb-4'>
                    <fieldset className="fieldset w-full justify-center items-center flex">
                        <select ref={refTahunAnggaran} onChange={e => setTahunAnggaran(e.target.value)} defaultValue="--pilih tahun anggaran--" className="select select-success w-full">
                            <option disabled={true} className='text-slate-500'>--pilih tahun anggaran--</option>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                            
                        </select>
                    </fieldset>
                </div>
            )}

            <fieldset className="fieldset w-full">
                <input ref={refFile} onChange={(e) => setFile(e.target.files[0])} accept="application/pdf" type="file" className="file-input input-success w-full" />
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
  )
}

export default ButtonAddFileOpd