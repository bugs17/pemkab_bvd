"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { addDigoeltv } from "@/app/actions/add-digoeltv";

const FormAddTunda = () => {
  const router = useRouter();
  const [judul, setJudul] = useState("");
  const [url, setUrl] = useState("")
  const [kategori, setKategori] = useState("tunda")
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!judul || !url) {
      alert("Kolom tidak boleh kosong")
      setIsSubmit(false)
      return
    }

    try {
      await addDigoeltv(judul,url, kategori)
      router.push('/admin/digoel-tv/siaran-tunda-list')
      setIsSubmit(false)
    } catch (error) {
    }
    setIsSubmit(false)

  }

  return (
    <>
      <div className="mb-6  w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <IoArrowBackOutline size={20} className="text-green-950" />
          <Link
            href={"/admin/digoel-tv/live-list"}
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
                <span className="label-text">Judul</span>
              </div>
              <input
                type="text"
                onChange={(e) => setJudul(e.target.value)}
                className="input input-bordered w-full bg-slate-200"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Url Siaran Tunda (dari embed)</span>
              </div>
              <input
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                className="input input-bordered w-full bg-slate-200"
              />
            </label>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddTunda;
