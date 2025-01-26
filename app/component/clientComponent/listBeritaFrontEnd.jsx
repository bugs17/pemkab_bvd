"use client";
import { getBeritaFrontEnd } from "@/app/actions/getBeritaFrontEnd";
import { truncate } from "@/app/lib/truncKalimat";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCalendarDays } from "react-icons/fa6";


const ListBeritaFrontEnd = () => {
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const { items: newItems, nextCursor } = await getBeritaFrontEnd(cursor);

    // Menghindari duplikasi dan memeriksa apakah data baru ada
    setItems((prev) => {
      const newItemsSet = new Set(prev.map((item) => item.id)); // Membuat Set dari id yang sudah ada
      const uniqueItems = [
        ...prev,
        ...newItems.filter((item) => !newItemsSet.has(item.id)), // Menambahkan hanya item yang belum ada
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

  return (
    <>
      {items.length > 0 && (
        <>
            {items.map((berita) => (
              <div
                key={berita.id}
                className="card lg:w-full md:w-full bg-base-100 shadow-xl"
              >
                <figure className="h-48 w-full overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={`/api${berita.coverUrl}`}
                    alt="cover"
                  />
                </figure>
                <div className="card-body">
                  <Link
                    href={`/pages/detail-berita/${berita.slug}`}
                    className="card-title cursor-pointer hover:text-red-500 "
                  >
                    {truncate(berita.judul, 50)}
                  </Link>
                  <div
                    className="text-xs text-justify"
                    dangerouslySetInnerHTML={{
                      __html: truncate(berita.isi, 100),
                    }}
                  />
                  <div className="card-actions justify-start">
                    <div className="badge badge-neutral">
                      <FaCalendarDays className="mr-2" />
                      {new Date(berita.createdAt).toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-xs btn-success hover:text-slate-100"
            onClick={fetchMoreData}
            disabled={isLoading}
          >
            {isLoading ? "Memuat..." : "Muat Data Berikutnya"}
          </button>
        </div>
      )}
        </>
      )}
    </>
  );
};

export default ListBeritaFrontEnd;
