import { prisma } from "@/app/lib/db";
import React from "react";

const SiaranTundaDTV = async () => {
  const digoeltvs = await prisma.digoeltv.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const tundaCategory = digoeltvs.filter((item) => item.kategori === "tunda");
  return (
    <>
      <div className="divider divider-success">
        <span className="text-green-700">SIARAN TUNDA DIGOEL-TV</span>
      </div>

      {/* carousal siaran ulang */}
      <div className="carousel w-full">
        {tundaCategory.length > 0 &&
          tundaCategory.map((tunda, index) => {
            const isLast = index === tundaCategory.length - 1;
            return (
              <div
                key={index}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <iframe
                  className="rounded-md"
                  width="520"
                  height="315"
                  src={tunda.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 transform flex">
                  {index > 0 && (
                    <a
                      href={`#slide${index - 1}`}
                      className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500 absolute left-5"
                    >
                      ❮
                    </a>
                  )}

                  {!isLast && (
                    <a
                      href={`#slide${index + 1}`}
                      className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500 absolute right-5"
                    >
                      ❯
                    </a>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SiaranTundaDTV;
