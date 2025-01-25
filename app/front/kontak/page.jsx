"use client";
import { addPesan } from "@/app/actions/addPesan";
import React, { useEffect, useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { IoRefresh } from "react-icons/io5";

const Kontak = () => {
  const [captcha, setCaptcha] = useState("");
  useEffect(() => {
    setCaptcha(Math.random().toString(36).slice(8))
  }, [])
  
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [judul, setJudul] = useState("");
  const [pesan, setPesan] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVisibleToasEmpty, setIsVisibleToasEmpty] = useState(false);
  const [isVisibleErrorCaptcha, setIsVisibleErrorCaptcha] = useState(false);
  const [isVisibleSukses, setIsVisibleSukses] = useState(false);


  const refreshCaptcha = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };


  const showSpan = () => {
    setIsVisibleToasEmpty(true);
    setTimeout(() => {
      setIsVisibleToasEmpty(false);
    }, 5000); // 5000ms = 5 detik
  };
  
  const showSpanError = () => {
    setIsVisibleErrorCaptcha(true);
    setTimeout(() => {
      setIsVisibleErrorCaptcha(false);
    }, 5000); // 5000ms = 5 detik
  };
  
  const showSpanSukses = () => {
    setIsVisibleSukses(true);
    setTimeout(() => {
      setIsVisibleSukses(false);
    }, 5000); // 5000ms = 5 detik
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (!nama || !email || !alamat || !judul || !pesan || !inputCaptcha) {
      showSpan()
      setIsSubmit(false)
      return
    }
    if (inputCaptcha !== captcha) {
      showSpanError()
      setIsSubmit(false)
      return
    }

    try {
      const statusPesan = await addPesan(nama,alamat,email,judul,pesan)
      if (statusPesan) {
        showSpanSukses()
        setIsSubmit(false)
        setNama('')
        setEmail('')
        setInputCaptcha('')
        setAlamat('')
        setJudul('')
        setPesan('')
        refreshCaptcha()
        return
      }
    } catch (error) {
      console.log(error.message)
    }finally{
      setIsSubmit(false)
    }

  };

  return (
    <div className=" md:w-[70%] md:p-10">
      <div className="divider divider-success z-auto">
        <span className="text-green-700">KONTAK KAMI</span>
      </div>

      {isVisibleToasEmpty && (
        <div className="toast toast-start">
        <div className="alert alert-error">
          <span className="text-slate-100">{`Semua Kolom harus terisi sebelum kirim!`}</span>
        </div>
      </div>
      )}
      
      {isVisibleErrorCaptcha && (
        <div className="toast toast-start">
        <div className="alert alert-error">
          <span className="text-slate-100">{`Captcha Salah!`}</span>
        </div>
      </div>
      )}
      
      {isVisibleSukses && (
        <div className="toast toast-start">
        <div className="alert alert-success">
          <span className="text-slate-100">{`Halo kaka 👋. Pesannya sudah terkirim 👍🏻`}</span>
        </div>
      </div>
      )}

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
              value={nama}
              onChange={e => setNama(e.target.value)}
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
              value={email}
              onChange={e => setEmail(e.target.value)}
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
          <textarea value={alamat} onChange={e => setAlamat(e.target.value)} className="textarea textarea-success h-24"></textarea>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">
              Judul <span className="text-red-700">*</span>
            </span>
          </div>
          <input
            type="text"
            value={judul}
            onChange={e => setJudul(e.target.value)}
            className="input input-bordered input-success w-full "
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">
              Pesan <span className="text-red-700">*</span>
            </span>
          </div>
          <textarea value={pesan} onChange={e => setPesan(e.target.value)} className="textarea textarea-success h-36"></textarea>
        </label>

        <div className="flex flex-row gap-3 justify-center items-center">
          <div className=" max-w-xs ">
            <div className="label">
              <span className="label-text font-semibold flex flex-row gap-1 items-center">
                {captcha}{" "}
                <IoRefresh
                  size={15}
                  className="text-green-700 cursor-pointer"
                  onClick={refreshCaptcha}
                />
              </span>
            </div>
            <input
              type="text"
              value={inputCaptcha}
              onChange={e => setInputCaptcha(e.target.value)}
              className="input input-bordered input-success max-w-xs "
            />
          </div>
          <div className="max-w-xs h-full pt-4">
            <div className="label">
              <span className="label-text font-semibold"></span>
            </div>
            <button disabled={isSubmit} onClick={handleSubmit} className="btn max-w-xs btn-wide  btn-success text-white self-end h-full">
              {isSubmit ? (<span className="loading text-success loading-ring loading-xs"></span>) : ('Kirim Pesan')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
