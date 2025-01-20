"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import TextEditor from "./textEditor";
import { addBerita } from "@/app/actions/add-berita";
import { useRouter } from "next/navigation";

const FormAddBerita = ({ kategoris }) => {
    const router = useRouter();
  const [onContentChange, setOnContentChange] = useState("");
  const [kategoriId, setKategoriId] = useState(null);

  const [judul, setJudul] = useState("");
  const [image, setImage] = useState(null);
  const [tgl, setTgl] = useState("");
  const [isDraft, setIsDraft] = useState(true);

  const [isSubmit, setIsSubmit] = useState(false);

  const imageRef = useRef(null)
  const kategoriRef = useRef(null)

  const handleSubmit = async (e) => {
    setIsSubmit(true);
    e.preventDefault();
    if (!onContentChange || !kategoriId || !judul || !tgl || !image) {
      alert("Semua kolom harus diisi!");
      setIsSubmit(false);
      return;
    }

    try {
        await addBerita(judul, kategoriId, image, onContentChange, isDraft, tgl)
        setOnContentChange('')
        setJudul('')
        setImage(null)
        imageRef.current.value = ""
        kategoriRef.current.selectedIndex = 0
        setTgl('')
        setIsDraft(true)
        router.push('/admin')
    } catch (error) {
        alert("terjadi error saat menambah berita")
    }
    
    setIsSubmit(false)
  };

  return (
    <>
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <IoArrowBackOutline size={20} className="text-green-950" />
          <Link
            href={"/admin"}
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

          <label className="form-control flex flex-row gap-2">
            <span className="label-text">Draft</span>

            <input
              checked={isDraft}
              onChange={(e) => setIsDraft(e.target.checked)}
              type="checkbox"
              className="w-5 h-5 text-success border-2 border-gray-300 rounded focus:ring focus:ring-success checked:text-success"
            />
          </label>
        </div>
      </div>

      <div className="h-full pb-10 overflow-y-auto">
        <div className="w-full flex flex-row gap-3 px-2">
          <label className="form-control w-[70%]">
            <div className="label">
              <span className="label-text">Judul</span>
            </div>
            <input
              required
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              type="text"
              placeholder="Judul Berita"
              className="input input-md input-bordered bg-slate-200 w-full"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Kategori</span>
            </div>
            <select
              className="select select-md bg-slate-200 select-bordered"
              defaultValue="pilih kategori"
              onChange={(e) => setKategoriId(e.target.value)}
              ref={kategoriRef}
            >
              <option value="pilih kategori" disabled>
                Pilih kategori
              </option>
              {kategoris.length > 0 &&
                kategoris.map((kategori) => (
                  <option key={kategori.id} value={kategori.id}>
                    {kategori.nama}
                  </option>
                ))}
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Cover</span>
            </div>
            <input
              required
              ref={imageRef}
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              accept="image/jpeg, image/png, image/jpg, image/webp"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="w-full p-2"></div>
        <TextEditor
          onTglChange={setTgl}
          onChange={setOnContentChange}
          content={onContentChange}
        />
      </div>
    </>
  );
};

export default FormAddBerita;
