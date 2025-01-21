"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { addPengumuman } from "@/app/actions/add-pengumuman";
import { useRouter } from "next/navigation";

const FormAddPengumuman = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [fileReady, setFileReady] = useState(null);
  const [fileType, setFileType] = useState("");
  const [judul, setJudul] = useState("");
  const fileInputRef = useRef(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const fileType = selectedFile.type;
      setFileType(fileType);

      const fileURL = URL.createObjectURL(selectedFile);
      setFile(fileURL);
      setFileReady(selectedFile);
    }
  };

  const clearFileInput = () => {
    setFile(null);
    setFileType("");
    setFileReady(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input file
    }
  };

  const handleSubmit = async () => {
    setIsSubmit(true);
    if (judul === "" || fileReady === null) {
      alert("judul atau file tidak boleh kosong");
        setIsSubmit(false);

      return;
    }
    try {
      await addPengumuman(judul, fileReady);
      setIsSubmit(false);
      router.push("/admin/pengumuman/pengumuman-list");
    } catch (error) {
      console.log("gagal add pengumuman", error);
    }

    setIsSubmit(false);
  };

  return (
    <>
      <div className="mb-6  w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <IoArrowBackOutline size={20} className="text-green-950" />
          <Link
            href={"/admin/pengumuman/pengumuman-list"}
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
                <span className="label-text">Judul Pengumuman</span>
              </div>
              <input
                type="text"
                onChange={e => setJudul(e.target.value)}
                className="input input-bordered w-full bg-slate-200"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">File (pdf)</span>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="flex flex-col gap-3 w-full justify-center text-center py-8">
            {file && (
              <button
                onClick={clearFileInput}
                className="btn btn-circle btn-error self-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            {/* preview disini */}
            {file ? (
              fileType === "application/pdf" ? (
                <iframe
                  src={file}
                  className="w-[300px] h-[400px] border self-center border-gray-300"
                  title="PDF Preview"
                ></iframe>
              ) : (
                <img
                  src={file}
                  alt="File Preview"
                  className="max-w-full max-h-[500px] mx-auto"
                />
              )
            ) : (
              <span className="text-white font-semibold"></span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddPengumuman;
