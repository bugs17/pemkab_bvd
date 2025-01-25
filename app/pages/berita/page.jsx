import React from "react";
import Link from "next/link";
import { FaCalendarDays } from "react-icons/fa6";
import { prisma } from "@/app/lib/db";
import { truncate } from "@/app/lib/truncKalimat";

const Beritas = async () => {
  let beritas;
  try {
    beritas = await prisma.berita.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 16,
    });
  } catch (error) {}
  return (
    <div className={`flex flex-col h-screen overflow-hidden`}>
      <div className="flex flex-row pt-6 items-center justify-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 h-8 md:w-auto w-full"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 pb-20 flex flex-col h-full overflow-y-scroll">
        <div className="divider divider-success">
          <span className="text-green-700">BERITA</span>
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center md:flex-row">
          {beritas.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {beritas.map((berita) => (
                  <div
                    key={berita.id}
                    className="card lg:w-full md:w-full bg-base-100 shadow-xl"
                  >
                    <figure className="h-48 w-full overflow-hidden">
                      <img
                        className="object-cover w-full h-full"
                        src={berita.coverUrl}
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
                          {new Date(berita.createdAt).toLocaleDateString(
                            "id-ID",
                            {
                              weekday: "long",
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="btn btn-xs btn-success mb-3"
                  disabled={false}
                  // onClick={() => console.log("Load More")}
                >
                  Muat Data Berikutnya
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Beritas;
