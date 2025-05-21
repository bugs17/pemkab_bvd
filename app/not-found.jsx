// pages/404.js
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-[linear-gradient(to_right,#0000000a_1px,transparent_4px),linear-gradient(to_bottom,#0000000a_1px,transparent_4px)] bg-[size:14px_24px] text-center px-6">
      <div className="w-80 h-80 relative">
      <div className='flex flex-row items-center gap-6 h-full w-full'>
      <span className='font-monsans font-extrabold text-yellow-600 text-5xl'>404</span>
        <Image
          draggable={false}
          src="/404.png" // pastikan kamu simpan gambar di folder public/assets
          alt="404 Illustration"
          layout="fill"
          objectFit="contain"
          // style={{objectFit:'contain'}}
          
        />
      </div>
      </div>
      <h1 className="text-4xl font-monsans font-extrabold text-yellow-600 mt-6">Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 font-monsans font-normal mt-2">Sepertinya kamu tersesat. Coba kembali ke halaman utama.</p>
      <a
        href="/"
        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
