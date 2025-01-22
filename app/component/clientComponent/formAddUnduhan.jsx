"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { addUnduhan } from "@/app/actions/add-unduhan";

const FormAddUnduhan = () => {
  const router = useRouter();
  const [namaFile, setNamaFile] = useState("");
  const [file, setFile] = useState(null)
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async () => {
    setIsSubmit(true)
    if (!namaFile || !file) {
      alert("Kolom tidak boleh kosong")
      setIsSubmit(false)
      return
    }

    try {
      await addUnduhan(namaFile,file)
      router.push('/admin/unduhan/unduhan-list')
      setIsSubmit(false)
    } catch (error) {
      console.log("Gagagl upload file unduhan")
    }
    setIsSubmit(false)

  }

  return (
    <>
      <div className="mb-6  w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <IoArrowBackOutline size={20} className="text-green-950" />
          <Link
            href={"/admin/unduhan/unduhan-list"}
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
                <span className="label-text">Nama File</span>
              </div>
              <input
                type="text"
                onChange={(e) => setNamaFile(e.target.value)}
                className="input input-bordered w-full bg-slate-200"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">File unduhan</span>
              </div>
              <input
                type="file"
                accept=".pdf, .doc, .docx, .txt"
                onChange={e => setFile(e.target.files[0])}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddUnduhan;
