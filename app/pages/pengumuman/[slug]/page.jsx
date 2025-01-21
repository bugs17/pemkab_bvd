import PdfViewerComponent from "@/app/component/clientComponent/pdfViewer";
import { prisma } from "@/app/lib/db";
import React from "react";
import { FaDownload } from "react-icons/fa6";

const DetailPengumuman = async ({ params }) => {
  const slug = params.slug;

  let pengumuman = null;

  try {
    pengumuman = await prisma.pengumuman.findFirst({
      where: {
        slug: slug,
      },
    });
  } catch (error) {
    console.log(
      `gagal mengambil pengumuman dengan slug: ${slug}`,
      error.message
    );
  }

  return (
    <>
      {pengumuman && (
        <div className="flex flex-col gap-6 md:mb-8">
          <h1 className="font-semibold text-center">
            {pengumuman.judul.toUpperCase()}
          </h1>
          {pengumuman.urlFile !== null && (
            <>
              <PdfViewerComponent urlPdf={pengumuman.urlFile} />
              <a href={pengumuman.urlFile} download="file1.pdf" className="btn">
                <FaDownload />
                Download
              </a>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default DetailPengumuman;
