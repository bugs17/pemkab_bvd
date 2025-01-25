// "use client";
// import { getBeritaAdmin } from "@/app/actions/getBeritaAdmin";
// import React, { useEffect, useRef, useState } from "react";
// import { FaEye } from "react-icons/fa";
// import ActionButtonForListBerita from "./actionButtonForListBerita";
// import { truncate } from "@/app/lib/truncKalimat";
// import Link from "next/link";
// import { MdEditDocument } from "react-icons/md";

// const ListBeritaAdmin = () => {
//   const [items, setItems] = useState([]);
//   const [cursor, setCursor] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const scrollableRef = useRef(null);

//   const fetchMoreData = async () => {
//     if (isLoading || !hasMore) return;

//     setIsLoading(true);

//     const { items: newItems, nextCursor } = await getBeritaAdmin(cursor);

//     setItems((prev) => [...prev, ...newItems]);
//     setCursor(nextCursor);
//     setHasMore(!!nextCursor);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollableRef.current) return;

//       const { scrollTop, scrollHeight, clientHeight } =
//         scrollableRef.current;

//       if (scrollHeight - scrollTop <= clientHeight + 100 && !isLoading) {
//         fetchMoreData();
//       }
//     };

//     const scrollableElement = scrollableRef.current;
//     if (scrollableElement) {
//       scrollableElement.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (scrollableElement) {
//         scrollableElement.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [isLoading, hasMore]);

//   // Muat data awal saat komponen dirender
//   useEffect(() => {
//     // // reset state
//     setItems([]);
//     setCursor(null);
//     setHasMore(true);
//     setIsLoading(false);

//     // load data ulang
//     fetchMoreData();
//   }, []);

//   const handleDelete = (id) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };


//   return (
//     <div ref={scrollableRef} className="h-full overflow-y-auto">
//       <table className="table table-xs mb-10">
//         <thead>
//           <tr>
//             <th></th>
//             <th className="text-left">Judul</th>
//             <th className="text-center">Tanggal</th>
//             <th className="text-center">Status</th>
//             <th className="text-center">Kategory</th>
//             <th className="text-right">Action</th>
//           </tr>
//         </thead>
//         <tbody className="">
//           {items.map((berita, index) => (
//             <tr key={index}>
//               <th>{index + 1}</th>
//               <td className="text-left">
//                 <div className="tooltip z-50" data-tip={berita.judul}>
//                   {truncate(berita.judul, 30)}
//                 </div>
//               </td>
//               <td className="text-center">
//                 {new Date(berita.createdAt).toLocaleDateString("id-ID")}
//               </td>
//               <td className="text-center">
//                 {berita.isDraft ? (
//                   <div className="badge badge-accent text-slate-100">Draft</div>
//                 ) : (
//                   <div className="badge text-slate-100 badge-success">Live</div>
//                 )}
//               </td>
//               <td className="text-center text-blue-500">
//                 {berita.kategori.nama}
//               </td>
//               <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
//                 <div className="tooltip z-50" data-tip="Lihat Berita">
//                   <Link
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={`/pages/detail-berita/${berita.slug}`}
//                     passHref
//                   >
//                     <FaEye
//                       size={20}
//                       className="text-orange-500 cursor-pointer"
//                     />
//                   </Link>
//                 </div>

//                 <div className="tooltip z-50" data-tip="Edit Berita">
//                   <Link href={`/admin/edit-berita/${berita.id}`}>
//                     <MdEditDocument
//                       size={20}
//                       className="text-blue-500 cursor-pointer"
//                     />
//                   </Link>
//                 </div>
//                 <div
//                   className="tooltip tooltip-left z-50"
//                   data-tip="Hapus Berita"
//                 >
//                   <ActionButtonForListBerita
//                     id={berita.id}
//                     judul={berita.judul}
//                     onDelete={handleDelete}
//                   />
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isLoading && (
//         <div className=" w-full flex justify-center">
//           <span className="loading loading-spinner text-success"></span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListBeritaAdmin;

"use client";
import { getBeritaAdmin } from "@/app/actions/getBeritaAdmin";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import ActionButtonForListBerita from "./actionButtonForListBerita";
import { truncate } from "@/app/lib/truncKalimat";
import Link from "next/link";
import { MdEditDocument } from "react-icons/md";

const ListBeritaAdmin = () => {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const { items: newItems, nextCursor } = await getBeritaAdmin(cursor);

    // Menghindari duplikasi dan memeriksa apakah data baru ada
    setItems((prev) => {
      const newItemsSet = new Set(prev.map(item => item.id)); // Membuat Set dari id yang sudah ada
      const uniqueItems = [
        ...prev,
        ...newItems.filter(item => !newItemsSet.has(item.id)), // Menambahkan hanya item yang belum ada
      ];
      return uniqueItems;
    });

    // Cek jika ada data lebih lanjut
    if (newItems.length === 0) {
      setHasMore(false); // Tidak ada data lagi, set hasMore menjadi false
    } else {
      setHasMore(!!nextCursor); // Mengatur hasMore berdasarkan nextCursor
    }

    setCursor(nextCursor);
    setIsLoading(false);
  };

  // Muat data awal saat komponen dirender
  useEffect(() => {
    setItems([]);
    setCursor(null);
    setHasMore(true);
    setIsLoading(false);
    fetchMoreData();
  }, []);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="h-full overflow-y-scroll pb-10">
      <table className="table  table-xs">
        <thead>
          <tr>
            <th></th>
            <th className="text-left">Judul</th>
            <th className="text-center">Tanggal</th>
            <th className="text-center">Status</th>
            <th className="text-center">Kategory</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {items.map((berita, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td className="text-left">
                <div className="tooltip z-50" data-tip={berita.judul}>
                  {truncate(berita.judul, 30)}
                </div>
              </td>
              <td className="text-center">
                {new Date(berita.createdAt).toLocaleDateString("id-ID")}
              </td>
              <td className="text-center">
                {berita.isDraft ? (
                  <div className="badge badge-accent text-slate-100">Draft</div>
                ) : (
                  <div className="badge text-slate-100 badge-success">Live</div>
                )}
              </td>
              <td className="text-center text-blue-500">
                {berita.kategori.nama}
              </td>
              <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                <div className="tooltip z-50" data-tip="Lihat Berita">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`/pages/detail-berita/${berita.slug}`}
                    passHref
                  >
                    <FaEye
                      size={20}
                      className="text-orange-500 cursor-pointer"
                    />
                  </Link>
                </div>

                <div className="tooltip z-50" data-tip="Edit Berita">
                  <Link href={`/admin/edit-berita/${berita.id}`}>
                    <MdEditDocument
                      size={20}
                      className="text-blue-500 cursor-pointer"
                    />
                  </Link>
                </div>
                <div
                  className="tooltip tooltip-left z-50"
                  data-tip="Hapus Berita"
                >
                  <ActionButtonForListBerita
                    id={berita.id}
                    judul={berita.judul}
                    onDelete={handleDelete}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isLoading && (
        <div className=" w-full flex justify-center">
          <span className="loading loading-spinner text-success"></span>
        </div>
      )}

      {/* Tombol untuk memuat data berikutnya */}
      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-xs btn-success"
            onClick={fetchMoreData}
            disabled={isLoading}
          >
            {isLoading ? "Memuat..." : "Muat Data Berikutnya"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ListBeritaAdmin;
