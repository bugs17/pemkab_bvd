"use client";
import React, { useEffect, useState } from "react";
import ListBeritaFrontEnd from "./listBeritaFrontEnd";
import { searchQuery } from "@/app/actions/searchQuery";
import Link from "next/link";
import { truncate } from "@/app/lib/truncKalimat";
import { FaCalendarDays } from "react-icons/fa6";


const BeritaFrontEndSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchWords, setSearchWords] = useState("");
  const [items, setItems] = useState([]);
  const [debouncedSearchWords, setDebouncedSearchWords] = useState("");

  // Debouncing logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchWords(searchWords);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler); // Clear the timeout if `searchWords` changes
    };
  }, [searchWords]);

  // Perform the search whenever `debouncedSearchWords` changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (debouncedSearchWords !== "") {
          const datas = await searchQuery(debouncedSearchWords);
          setItems(datas);
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchWords]);

  return (
    <>
      <div className="flex flex-row pt-6 items-center justify-end">
        <div className="form-control px-5 pb-5">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchWords(e.target.value)}
            value={searchWords}
            className="input input-bordered h-8 md:w-auto w-full"
          />
        </div>
        
      </div>
      <div className="px-4 pb-20 flex flex-col h-full overflow-y-scroll">
        <div className="divider divider-success">
          <span className="text-green-700">BERITA</span>
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center md:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {isLoading ? (
                <span className="loading self-center text-success loading-ring loading-lg"></span>
            ) : searchWords === "" ? (
                <ListBeritaFrontEnd />
            ) : items?.length > 0 ? (
                items.map((berita) => (
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
                        className="card-title cursor-pointer hover:text-red-500"
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
                ))
            ) : (
                <p className="text-center text-gray-500 self-center">
                Tidak ada berita ditemukan.
                </p>
            )}

            </div>
        </div>
      </div>
    </>
  );
};

export default BeritaFrontEndSearch;
