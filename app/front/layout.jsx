import React from "react";
import Navbar from "../component/navba";
import Footer from "../component/footer";
import { FaCalendarDays } from "react-icons/fa6";
import { prisma } from "../lib/db";
import { truncate } from "../lib/truncKalimat";
import Link from "next/link";

export const revalidate = 0;

const FrontLayout = async ({ children }) => {
  let beritas;
  let pengumumans;

  try {
    beritas = await prisma.berita.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 2,
      include: {
        kategori: {
          select: {
            nama: true,
          },
        },
      },
      where:{
        isDraft:false
      }
    });

    pengumumans = await prisma.pengumuman.findMany({
      orderBy: {
        id: "desc",
      },
    });
  } catch (error) {}

  return (
    <>
      <Navbar />
      <div className="w-full bg-base-200 p-4 flex md:flex-row flex-col">
        {children}

        <div className="md:w-[30%] md:pt-10">
          <div className="flex flex-col gap-3">
            <div className="divider divider-success">
              <span className="text-green-700">BERITA TERBARU</span>
            </div>
            {beritas.length > 0 &&
              beritas.map((berita, index) => (
                <div
                  key={index}
                  className="card md:w-full bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={`/api${berita.coverUrl}`} alt={berita.judul} />
                  </figure>
                  <div className="card-body">
                    <Link
                      href={`/pages/detail-berita/${berita.slug}`}
                      className="card-title cursor-pointer hover:text-red-500"
                    >
                      {truncate(berita.judul, 60)}
                    </Link>
                    <div className="card-actions justify-between">
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
                      <div className="badge badge-success">
                        <span className="text-slate-100 text-xs">
                          {berita.kategori.nama.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="divider divider-success">
              <span className="text-green-700">PENGUMUMAN</span>
            </div>
            {pengumumans.length > 0 && (
              pengumumans.map((pengumuman, index) => (
              <Link key={index} href={`/pages/pengumuman/${pengumuman.slug}`} className="bg-white shadow-md py-5 px-3 rounded-md cursor-pointer hover:bg-green-100 hover:shadow-lg flex flex-col gap-2">
                <span className="font-mono text-xs text-gray-400">
                {new Date(pengumuman.createdAt).toLocaleDateString(
                          "id-ID",
                          {
                            weekday: "long",
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                </span>
                <p className="text-black text-sm font-bold">
                  {truncate(pengumuman.judul.toUpperCase(), 60)}
                </p>
              </Link>

              ))
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FrontLayout;
