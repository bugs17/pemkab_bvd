import React from 'react'

const Pengumuman = () => {
  return (
    <>
      <div className="divider divider-success">
        <span className="text-green-700">PENGUMUMAN</span>
      </div>
      
      <div className="flex gap-2 flex-col">
        <div className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
          <span className="font-mono text-xs text-gray-400">Rabu, 11 Desember 2024</span>
          <p className="text-black text-sm font-bold">JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI PPPK TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL</p>
        </div>
        <div className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
          <span className="font-mono text-xs text-gray-400">Rabu, 11 Desember 2024</span>
          <p className="text-black text-sm font-bold">JADWAL PESERTA TITIK LOKASI DALAM NEGERI SELEKSI KOMPETENSI BIDANG CPNS TAHUN 2024 INSTANSI PEMERINTAH KAB. BOVEN DIGOEL</p>
        </div>
      </div>
    </>
  )
}

export default Pengumuman