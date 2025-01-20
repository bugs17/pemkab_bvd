import Link from "next/link";
import React from "react";
import { FaNewspaper } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import TextEditor from "@/app/component/clientComponent/textEditor";

const AddBerita = () => {
  return (
    <div className="h-full">
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
        <div className="flex flex-row items-center justify-end gap-1">
          <button className="btn btn-success text-slate-100">
            <FaNewspaper />
            Publish
          </button>
          <button className="btn btn-warning text-slate-100">
            <FaSave />
            Simpan
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <div className="w-full flex flex-row gap-3">
          <label className="form-control w-[70%]">
            <div className="label">
              <span className="label-text">Judul</span>
            </div>
            <input
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
              defaultValue="Star Wars"
            >
              <option value="" disabled>
                Pick one
              </option>
              <option value="Star Wars">Star Wars</option>
              <option value="Harry Potter">Harry Potter</option>
              <option value="Lord of the Rings">Lord of the Rings</option>
              <option value="Planet of the Apes">Planet of the Apes</option>
              <option value="Star Trek">Star Trek</option>
            </select>
          </label>
        </div>
        <div className="w-full p-2"></div>
        <TextEditor content={"haloooooo"} />
      </div>
    </div>
  );
};

export default AddBerita;
