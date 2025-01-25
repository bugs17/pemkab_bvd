"use client";
import React from "react";
import Link from "next/link";

const DropDownMobile = () => {
  const menus = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Profil",
      match: "profil",
      submenu: [
        {
          title: "Sejarah",
          path: "/front/sejarah",
        },
        {
          title: "Visi-misi",
          path: "/front/visi-misi",
        },
        {
          title: "Lambang Daerah",
          path: "/front/lambang-daerah",
        },
        {
          title: "Kondisi Geografis",
          path: "/front/kondisi-geografis",
        },
        {
          title: "Demografi",
          path: "/front/demografi",
        },
        {
          title: "Peta",
          path: "/front/peta",
        },
        {
          title: "Politik Hukum & Keamanan",
          path: "/front/politik-hukum-dan-keamanan",
        },
        {
          title: "Kesejahteraan Sosial",
          path: "/front/kesejahteraan-sosial",
        },
        {
          title: "RPJMD 2021-2025",
          path: "/front/rpjmd-2021-2025",
        },
        {
          title: "APBD Boven Digoel",
          path: "/front/apbd",
        },
      ],
    },
    {
      title: "Pejabat",
      submenu: [
        {
          title: "Bupati",
          path: "/front/bupati",
        },
        {
          title: "Wakil Bupati",
          path: "/front/wakil-bupati",
        },
        {
          title: "Sekertaris Daerah",
          path: "/front/sekda",
        },

        {
          title: "Asisten Bidang Administrasi Umum",
          path: "/front/asisten-bidang-administrasi-umum",
        },
        {
          title: "Asisten Bidang Pemerintahan & Kesejahteraan Rakyat",
          path: "/front/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat",
        },
        {
          title: "Asisten Bidang Perekonomian & Pembangunan",
          path: "/front/asisten-bidang-perekonomian-dan-pembangunan",
        },
        {
          title: "Staf Ahli 1",
          path: "/front/staf-ahli-satu",
        },
        {
          title: "Staf Ahli 2",
          path: "/front/staf-ahli-dua",
        },
        {
          title: "Staf Ahli 3",
          path: "/front/staf-ahli-tiga",
        },
      ],
    },
    {
      title: "SARANA & PRASARANA",
      submenu: [
        {
          title: "Transportasi",
          path: "/front/transportasi",
        },
        {
          title: "Kesehatan",
          path: "/front/kesehatan",
        },
        {
          title: "Pendidikan",
          path: "/front/pendidikan",
        },

        {
          title: "Tempat Ibadah",
          path: "/front/tempat-ibadah",
        },
        {
          title: "Pos, Telekomunikasi & Telemetika",
          path: "/front/pos-telekomunikasi-dan-telematika",
        },
        {
          title: "Industri & Perdagangan",
          path: "/front/industri-dan-perdagangan",
        },
        {
          title: "Energi",
          path: "/front/energy",
        },
      ],
    },
    {
      title: "POTENSI DAERAH",
      submenu: [
        {
          title: "Buku Pedoman",
          path: "/front/buku-pedoman-statistik-sektoral",
        },
        {
          title: "Satu Data",
          path: "/front/satu-data",
        },
        {
          title: "Statistik Sektoral Daerah",
          path: "/front/statistik-sektoral-daerah",
        },
        {
          title: "SK Wali Data",
          path: "/front/sk-wali-data",
        },
        {
          title: "Publikasi",
          path: "/front/publikasi",
        },
        {
          title: "SOP",
          path: "/front/sop-meta-data",
        },
        {
          title: "Pertanian",
          path: "/front/pertanian",
        },
        {
          title: "Perkebuana",
          path: "/front/perkebunan",
        },
        {
          title: "Perikanan",
          path: "/front/perikanan",
        },
        {
          title: "Peternakan",
          path: "/front/peternakan",
        },
        {
          title: "Kehutanan",
          path: "/front/kehutanan",
        },
        {
          title: "Pariwisata & Kebudayaan",
          path: "/front/pariwisata-dan-kebudayaan",
        },
      ],
    },
    {
      title: "Berita",
      path: "/pages/berita",
    },
    {
      title: "Kontak",
      path: "/front/kontak",
    },
  ];
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu bg-base-100 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {menus.map((menu, index) =>
            menu.submenu ? (
              <li key={index}>
                <details open={false}>
                  <summary className="hover:bg-success hover:text-slate-100">
                    {menu.title}
                  </summary>
                  <ul>
                    {menu.submenu.map((sub, subIndex) => (
                      <li key={subIndex} className="py-1">
                        {sub.path ? (
                          <Link
                            href={sub.path}
                            className="hover:bg-success hover:text-slate-100"
                          >
                            {sub.title}
                          </Link>
                        ) : (
                          <span className="hover:bg-success hover:text-slate-100">
                            {sub.title}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={index}>
                {menu.path ? (
                  <Link
                    href={menu.path}
                    className="hover:bg-success hover:text-slate-100"
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <span className="hover:bg-success hover:text-slate-100">
                    {menu.title}
                  </span>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default DropDownMobile;
