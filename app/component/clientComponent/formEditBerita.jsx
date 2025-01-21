"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { editBerita } from "@/app/actions/editBerita";
import TextEditorEdit from "./textEditorEdit";

const FormEditBerita = ({ kategoris, instance }) => {
  const router = useRouter();
  const [onContentChange, setOnContentChange] = useState(null);
  const [kategoriId, setKategoriId] = useState(null);

  const [judul, setJudul] = useState("");
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [tgl, setTgl] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [ubahFoto, setUbahFoto] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const imageRef = useRef(null);
  const kategoriRef = useRef(null);

  useEffect(() => {
    if (instance) {
      
      setJudul(instance.judul);
      setKategoriId(instance.kategoriId);
      setIsDraft(instance.isDraft);
      setTgl(instance.createdAt);
      setOnContentChange(instance.isi);
      setImgUrl(instance.coverUrl);
    }
  }, [instance]);

  const handleSubmit = async (e) => {
    setIsSubmit(true);
    e.preventDefault();
    if (ubahFoto) {
      if (!onContentChange || !kategoriId || !judul || !tgl || !image) {
        alert("Semua kolom harus diisi!");
        setIsSubmit(false);
        return;
      }
    }else{
      if (!onContentChange || !kategoriId || !judul || !tgl) {
        alert("Semua kolom harus diisi!");
        setIsSubmit(false);
        return;
      }
    }
    

    try {
      await editBerita(judul,kategoriId,onContentChange, isDraft, tgl, instance.id, ubahFoto, instance.coverUrl,image);
      setOnContentChange("");
      setJudul("");
      setImage(null);
      imageRef.current.value = "";
      kategoriRef.current.selectedIndex = 0;
      setTgl("");
      setIsDraft(true);
      alert("suksess");
    } catch (error) {
      console.log("terjadi error saat menambah berita", error.message);
    }
    router.push('/admin')
    setIsSubmit(false);
  };

  const handleUbahFoto = () => {
    if (ubahFoto === false) {
      setImage(null)
    }
    setUbahFoto((prevState) => !prevState)
  }

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
                Simpan Perubahan
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
        <div className="w-full flex flex-row gap-3 px-2 items-center">
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
              defaultValue={kategoriId}
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

          {ubahFoto ? (
            <div className="flex fle items-end gap-2">
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
              <span
                onClick={handleUbahFoto}
                className="link link-error"
              >
                Batal
              </span>
            </div>
          ) : (
            <div className="w-32 h-24 relative rounded-md bg-black">
              {imgUrl && (
                <>
                  <img
                    src={imgUrl}
                    alt="image"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    onClick={handleUbahFoto}
                    className="absolute top-10 left-7 btn btn-success btn-xs text-white"
                  >
                    ubah
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <div className="w-full p-2"></div>
        <TextEditorEdit
          onTglChange={setTgl}
          tgl={tgl}
          onChange={setOnContentChange}
          content={onContentChange}
        />
      </div>
    </>
  );
};

export default FormEditBerita;
