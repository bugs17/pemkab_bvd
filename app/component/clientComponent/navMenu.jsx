"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavMenu = () => {
  const pathName = usePathname();

  return (
    <ul className="menu menu-horizontal px-1 gap-2 z-50">
      <li>
        <Link
          href={"/"}
          className={`hover:bg-red-500 hover:text-white hover:rounded-lg ${
            pathName === "/" && "bg-red-500 text-white"
          }`}
        >
          BERANDA
        </Link>
      </li>

      <li className="group hover:bg-red-500 hover:rounded-lg ">
        <details className="group-hover:text-inherit ">
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/sejarah" ||
                pathName === "/visi-misi" ||
                pathName === "/lambang-daerah" ||
                pathName === "/kondisi-geografis" ||
                pathName === "/demografi" ||
                pathName === "/peta" ||
                pathName === "/politik-hukum-dan-keamanan" ||
                pathName === "/kesejahteraan-sosial" ||
                pathName === "/apbd") &&
              "bg-red-500 text-white"
            }`}
          >
            PROFIL
          </summary>
          <ul className="p-2">
            <li>
              <Link
                href={"/sejarah"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/sejarah" && "bg-red-500 text-white"
                }`}
              >
                Sejarah
              </Link>
            </li>
            <li>
              <Link
                href={"/visi-misi"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/visi-misi" && "bg-red-500 text-white"
                }`}
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                href={"/lambang-daerah"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/lambang-daerah" && "bg-red-500 text-white"
                }`}
              >
                Lambang Daerah
              </Link>
            </li>
            <li>
              <Link
                href={"/kondisi-geografis"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/kondisi-geografis" && "bg-red-500 text-white"
                }`}
              >
                Kondisi Geografis
              </Link>
            </li>
            <li>
              <Link
                href={"/demografi"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/demografi" && "bg-red-500 text-white"
                }`}
              >
                Demografi
              </Link>
            </li>
            <li>
              <Link
                href={"/peta"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/peta" && "bg-red-500 text-white"
                }`}
              >
                Peta
              </Link>
            </li>
            <li>
              <Link
                href={"/politik-hukum-dan-keamanan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/politik-hukum-dan-keamanan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Politik Hukum & Keamanan
              </Link>
            </li>
            <li>
              <Link
                href={"/kesejahteraan-sosial"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/kesejahteraan-sosial" &&
                  "bg-red-500 text-white"
                }`}
              >
                Kesejahteraan Sosial
              </Link>
            </li>
            <li>
              <a className="text-black whitespace-nowrap hover:bg-red-500 hover:text-white">
                RPJMD Kabupaten Boven Digoel 2021-2025
              </a>
            </li>
            <li>
              <Link
                href={"/apbd"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/apbd" && "bg-red-500 text-white"
                }`}
              >
                APBD Boven Digoel
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit">
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/bupati" ||
                pathName === "/wakil-bupati" ||
                pathName === "/sekda" ||
                pathName === "/asisten-bidang-administrasi-umum" ||
                pathName ===
                  "/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat" ||
                pathName === "/asisten-bidang-perekonomian-dan-pembangunan" ||
                pathName === "/staf-ahli-satu" ||
                pathName === "/staf-ahli-dua" ||
                pathName === "/staf-ahli-tiga") &&
              "bg-red-500 text-white"
            }`}
          >
            PEJABAT
          </summary>
          <ul className="p-2">
            <li>
              <Link
                href={"/bupati"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/bupati" && "bg-red-500 text-white"
                }`}
              >
                Bupati
              </Link>
            </li>
            <li>
              <Link
                href={"/wakil-bupati"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/wakil-bupati" && "bg-red-500 text-white"
                }`}
              >
                Wakil Bupati
              </Link>
            </li>
            <li>
              <Link
                href={"/sekda"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/sekda" && "bg-red-500 text-white"
                }`}
              >
                Sekertaris Daerah
              </Link>
            </li>
            <li>
              <Link
                href={"/asisten-bidang-administrasi-umum"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/asisten-bidang-administrasi-umum" &&
                  "bg-red-500 text-white"
                }`}
              >
                Asisten Bidang Administrasi Umum
              </Link>
            </li>
            <li>
              <Link
                href={"/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName ===
                    "/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat" &&
                  "bg-red-500 text-white"
                }`}
              >
                Asisten Bidang Pemerintahan & Kesejahteraan Rakyat
              </Link>
            </li>
            <li>
              <Link
                href={"/asisten-bidang-perekonomian-dan-pembangunan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/asisten-bidang-perekonomian-dan-pembangunan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Asisten Bidang Perekonomian & Pembangunan
              </Link>
            </li>
            <li>
              <Link
                href={"/staf-ahli-satu"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/staf-ahli-satu" && "bg-red-500 text-white"
                }`}
              >
                Staf Ahli 1
              </Link>
            </li>
            <li>
              <Link
                href={"/staf-ahli-dua"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/staf-ahli-dua" && "bg-red-500 text-white"
                }`}
              >
                Staf Ahli 2
              </Link>
            </li>
            <li>
              <Link
                href={"/staf-ahli-tiga"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/staf-ahli-tiga" && "bg-red-500 text-white"
                }`}
              >
                Staf Ahli 3
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit">
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/transportasi" ||
                pathName === "/kesehatan" ||
                pathName === "/pendidikan" ||
                pathName === "/pos-telekomunikasi-dan-telematika" ||
                pathName === "/industri-dan-perdagangan" ||
                pathName === "/energy" ||
                pathName === "/tempat-ibadah") &&
              "bg-red-500 text-white"
            }`}
          >
            SARANA & PRASARANA
          </summary>
          <ul className="p-2">
            <li>
              <Link
                href={"/transportasi"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/transportasi" && "bg-red-500 text-white"
                }`}
              >
                Transportasi
              </Link>
            </li>
            <li>
              <Link
                href={"/kesehatan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/kesehatan" && "bg-red-500 text-white"
                }`}
              >
                Kesehatan
              </Link>
            </li>
            <li>
              <Link
                href={"/pendidikan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/pendidikan" && "bg-red-500 text-white"
                }`}
              >
                Pendidikan
              </Link>
            </li>
            <li>
              <Link
                href={"/tempat-ibadah"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/tempat-ibadah" && "bg-red-500 text-white"
                }`}
              >
                Tempat Ibadah
              </Link>
            </li>
            <li>
              <Link
                href={"/pos-telekomunikasi-dan-telematika"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/pos-telekomunikasi-dan-telematika" &&
                  "bg-red-500 text-white"
                }`}
              >
                Pos, Telekomunikasi & Telemetika
              </Link>
            </li>
            <li>
              <Link
                href={"/industri-dan-perdagangan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/industri-dan-perdagangan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Industri & Perdagangan
              </Link>
            </li>
            <li>
              <Link
                href={"/energy"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/energy" && "bg-red-500 text-white"
                }`}
              >
                Energi
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit">
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/buku-pedoman-statistik-sektoral" ||
                pathName === "/satu-data" ||
                pathName === "/sk-wali-data" ||
                pathName === "/publikasi" ||
                pathName === "/sop-meta-data" ||
                pathName === "/pertanian" ||
                pathName === "/perkebunan" ||
                pathName === "/perikanan" ||
                pathName === "/peternakan" ||
                pathName === "/kehutanan" ||
                pathName === "/pariwisata-dan-kebudayaan" ||
                pathName === "/statistik-sektoral-daerah") &&
              "bg-red-500 text-white"
            }`}
          >
            POTENSI DAERAH
          </summary>
          <ul className="p-2">
            <li className="">
              <details className="group-hover:text-inherit">
                <summary
                  className={`text-black group-hover:text-white ${
                    (pathName === "/buku-pedoman-statistik-sektoral" ||
                      pathName === "/satu-data" ||
                      pathName === "/sk-wali-data" ||
                      pathName === "/publikasi" ||
                      pathName === "/sop-meta-data" ||
                      pathName === "/statistik-sektoral-daerah") &&
                    "bg-red-500 text-white"
                  }`}
                >
                  Statistik Sektoral
                </summary>
                <ul className="p-2">
                  <li>
                    <Link
                      href={"/buku-pedoman-statistik-sektoral"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/buku-pedoman-statistik-sektoral" &&
                        "bg-red-500 text-white"
                      }`}
                    >
                      Buku Pedoman
                    </Link>
                  </li>
                  <li>
                    <details className="group-hover:text-inherit">
                      <summary
                        className={`text-black group-hover:text-white ${
                          (pathName === "/satu-data" ||
                            pathName === "/statistik-sektoral-daerah") &&
                          "bg-red-500 text-white"
                        }`}
                      >
                        Regulasi
                      </summary>
                      <ul className="p-2">
                        <li>
                          <Link
                            href={"/satu-data"}
                            className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                              pathName === "/satu-data" &&
                              "bg-red-500 text-white"
                            }`}
                          >
                            Satu Data
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/statistik-sektoral-daerah"}
                            className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                              pathName === "/statistik-sektoral-daerah" &&
                              "bg-red-500 text-white"
                            }`}
                          >
                            Statistik Sektoral Daerah
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link
                      href={"/sk-wali-data"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/sk-wali-data" && "bg-red-500 text-white"
                      }`}
                    >
                      SK Wali Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/publikasi"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/publikasi" && "bg-red-500 text-white"
                      }`}
                    >
                      Publikasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/sop-meta-data"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/sop-meta-data" && "bg-red-500 text-white"
                      }`}
                    >
                      SOP
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href={"/pertanian"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/pertanian" && "bg-red-500 text-white"
                }`}
              >
                Pertanian
              </Link>
            </li>
            <li>
              <Link
                href={"/perkebunan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/perkebunan" && "bg-red-500 text-white"
                }`}
              >
                Perkebunan
              </Link>
            </li>
            <li>
              <Link
                href={"/perikanan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/perikanan" && "bg-red-500 text-white"
                }`}
              >
                Perikanan
              </Link>
            </li>
            <li>
              <Link
                href={"/peternakan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/peternakan" && "bg-red-500 text-white"
                }`}
              >
                Peternakan
              </Link>
            </li>
            <li>
              <Link
                href={"/kehutanan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/kehutanan" && "bg-red-500 text-white"
                }`}
              >
                Kehutanan
              </Link>
            </li>
            <li>
              <Link
                href={"/pariwisata-dan-kebudayaan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/pariwisata-dan-kebudayaan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Pariwisata & Kebudayaan
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          href={"/kontak"}
          className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
            pathName === "/kontak" && "bg-red-500 text-white"
          }`}
        >
          Kontak
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
