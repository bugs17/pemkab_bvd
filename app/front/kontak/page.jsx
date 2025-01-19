import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

const Kontak = () => {
  return (
    <div className=" md:w-[70%] md:p-10">
      <div className="divider divider-success">
        <span className="text-green-700">KONTAK KAMI</span>
      </div>

      {/* KONTAK */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">
                Nama <span className="text-red-700">*</span>
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered input-success w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold">
                Email <span className="text-red-700">*</span>
              </span>
            </div>
            <input
              type="email"
              className="input input-bordered input-success w-full "
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">
              Alamat <span className="text-red-700">*</span>
            </span>
          </div>
          <textarea className="textarea textarea-success h-24"></textarea>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">
              Judul <span className="text-red-700">*</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered input-success w-full "
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">
              Pesan <span className="text-red-700">*</span>
            </span>
          </div>
          <textarea className="textarea textarea-success h-36"></textarea>
        </label>

        <button className="btn btn-wide btn-success text-white self-center my-4">
          Kirim Pesan
        </button>
      </div>
    </div>
  );
};

export default Kontak;
