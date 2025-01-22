"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { addKegiatan } from "@/app/actions/add-kegiatan";

const FormAddKegiatan = () => {
  const router = useRouter();
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [mulai, setMulai] = useState(null);
  const [selesai, setSelesai] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);


  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!judul || !deskripsi || !mulai || !selesai ) {
      alert("Semua form harus diisi! Tidak boleh kosong!")
      setIsSubmit(false)
      return
    }

    try {
      await addKegiatan(judul,deskripsi,mulai,selesai)
      router.push('/admin/kalender/kegiatan-list')
    } catch (error) {
      console.log("Error add kegiatan ", error.message)
    }

    setIsSubmit(false)
  }

  return (
    <>
      <div className="mb-6  w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <IoArrowBackOutline size={20} className="text-green-950" />
          <Link
            href={"/admin/kalender/kegiatan-list"}
            className="font-semibold text-sm cursor-pointer hover:text-green-950"
          >
            Kembali
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <button
            disabled={isSubmit}
            onClick={handleSubmit}
            className="btn btn-success text-slate-100"
          >
            {isSubmit ? (
              <span className="loading loading-spinner text-slate-100"></span>
            ) : (
              <>
                <FaNewspaper />
                Publish
              </>
            )}
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-col gap-6 h-full overflow-y-scroll">
          <div className="flex flex-row gap-3 px-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Judul Kegiatan</span>
              </div>
              <input
                type="text"
                onChange={(e) => setJudul(e.target.value)}
                className="input input-bordered w-full bg-slate-200"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Deskripsi</span>
              </div>
              <input
                type="text"
                onChange={e => setDeskripsi(e.target.value)}
                className="input input-bordered w-full bg-slate-200"
              />
            </label>
          </div>

          <div className="flex flex-row gap-3 px-3 justify-center items-center">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Mulai</span>
              </div>
              <input
                type="datetime-local"
                onChange={(e) => setMulai(e.target.value)}
                className="input input-bordered w-full max-w-xs bg-slate-200"
              />
            </label>
            <span className="pt-8">To :</span>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Selesai</span>
              </div>
              <input
                type="datetime-local"
                min={mulai}
                onChange={(e) => setSelesai(e.target.value)}
                className="input input-bordered w-full max-w-xs bg-slate-200"
              />
            </label>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default FormAddKegiatan;
