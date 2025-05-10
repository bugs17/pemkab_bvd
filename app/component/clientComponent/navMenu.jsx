"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";

import Link from "next/link";
import { isNavMenuOpen } from "@/app/lib/globalState";

const NavMenu = () => {
  const pathName = usePathname();
  const [curentOpen, setCurentOpen] = useAtom(isNavMenuOpen)

  

  const dinasDaerah = [
    {
      name: "Dinas Perkebunan",
      link: "#",
    },
    {
      name: "Dinas Ketahanan Pangan",
      link: "#",
    },
    {
      name: "Dinas Pekerjaan Umum dan Penataan Ruang",
      link: "#",
    },
    {
      name: "Dinas Pemberdayaan Masyarakat Kampung",
      link: "#",
    },
    {
      name: "Dinas Kependudukan & Pencataan Sipil",
      link: "#",
    },
    {
      name: "Dinas Kesehatan",
      link: "#",
    },
    {
      name: "Dinas Pengendalian Penduduk dan Keluarga Berencana",
      link: "#",
    },
    {
      name: "Dinas Perhubungan",
      link: "#",
    },
    {
      name: "Dinas Perpustakaan dan Kearsipan Daerah",
      link: "#",
    },
    {
      name: "Dinas Komunikasi & Informatika",
      link: "#",
    },
    {
      name: "Dinas Sosial",
      link: "#",
    },
    {
      name: "Dinas Koperasi, Usaha Kecil dan Menengah, Perindustrian dan Perdagangan",
      link: "#",
    },
    {
      name: "Dinas Parawisata, Pemuda dan Olahraga",
      link: "#",
    },
    {
      name: "Dinas Pendidikan & Kebudayaan",
      link: "#",
    },
    {
      name: "Dinas Tanaman Pangan, Holtikultura, Peternakan dan Perikanan",
      link: "#",
    },
    {
      name: "Dinas Tenaga Kerja & Transmigrasi",
      link: "#",
    },
    {
      name: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
      link: "#",
    },
    {
      name: "Satuan Polisi Pamong Praja",
      link: "#",
    },
    {
      name: "RSUD",
      link: "#",
    },
    {
      name: "Dinas Pemberdayaan Perempuan dan Perlindungan Anak",
      link: "#",
    },
    {
      name: "Dinas Perumahan, Kawasan Permukiman, Lingkungan Hidup dan Pertanahan",
      link: "#",
    },
  ]

  const lembagaTeknis = [
    {
      name: "Inspektorat",
      link: "#",
    },
    {
      name: "Badan Pengelola Keuangan dan Aset Daerah",
      link: "#",
    },
    {
      name: "Badan Kesatuan Bangsa",
      link: "#",
    },
    {
      name: "Badan Perencanaan, Penelitian dan Pengembangan Pembangunan Daerah",
      link: "#",
    },
    {
      name: "Badan Kepegawaian dan Pengembangan Sumber Daya Manusia",
      link: "#",
    },
    {
      name: "Badan Penanggulangan Bencana Daerah",
      link: "#",
    },
    {
      name: "Badan Pengelola Perbatasan Daerah",
      link: "#",
    },
  ]

  const sekretariat = [
    {
      name: "Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Sekretariat DPRD",
      link: "#",
    },
    {
      name: "Bagian Kesejahteraan Rakyat, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Hukum, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Pemerintahan, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Perekonomian dan SDA, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Administrasi Pembangunan, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Pengadaan Barang & Jasa, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Umum, Sekretariat Daerah",
      link: "#",
    },
    {
      name: "Bagian Organisasi, Sekretariat Daerah",
      link: "#",
    },
  ]


  return (
    <ul className="menu menu-horizontal px-1 gap-2 z-50" >
      <li onMouseEnter={() => setCurentOpen('')} onClick={() => setCurentOpen('')}>
        <Link
          href={"/"}
          className={`hover:bg-red-500 hover:text-white hover:rounded-lg ${
            pathName === "/" && "bg-red-500 text-white"
          }`}
        >
          BERANDA
        </Link>
      </li>

      <li onMouseEnter={() => setCurentOpen('profil')} onClick={() => setCurentOpen('profil')} className="group hover:bg-red-500 hover:rounded-lg ">
        <details id="profil" className="group-hover:text-inherit " open={curentOpen === 'profil'}>
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/front/sejarah" ||
                pathName === "/front/visi-misi" ||
                pathName === "/front/lambang-daerah" ||
                pathName === "/front/kondisi-geografis" ||
                pathName === "/front/demografi" ||
                pathName === "/front/peta" ||
                pathName === "/front/politik-hukum-dan-keamanan" ||
                pathName === "/front/kesejahteraan-sosial" ||
                pathName === "/front/rpjmd-2021-2025" ||
                pathName === "/front/apbd") &&
              "bg-red-500 text-white"
            }`}
          >
            PROFIL
          </summary>
          <ul className="p-2">
            <li>
              <Link
                href={"/front/sejarah"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/sejarah" && "bg-red-500 text-white"
                }`}
              >
                Sejarah
              </Link>
            </li>
            <li>
              <Link
                href={"/front/visi-misi"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/visi-misi" && "bg-red-500 text-white"
                }`}
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                href={"/front/lambang-daerah"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/lambang-daerah" && "bg-red-500 text-white"
                }`}
              >
                Lambang Daerah
              </Link>
            </li>
            <li>
              <Link
                href={"/front/kondisi-geografis"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/kondisi-geografis" && "bg-red-500 text-white"
                }`}
              >
                Kondisi Geografis
              </Link>
            </li>
            <li>
              <Link
                href={"/front/demografi"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/demografi" && "bg-red-500 text-white"
                }`}
              >
                Demografi
              </Link>
            </li>
            <li>
              <Link
                href={"/front/peta"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/peta" && "bg-red-500 text-white"
                }`}
              >
                Peta
              </Link>
            </li>
            <li>
              <Link
                href={"/front/politik-hukum-dan-keamanan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/politik-hukum-dan-keamanan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Politik Hukum & Keamanan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/kesejahteraan-sosial"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/kesejahteraan-sosial" &&
                  "bg-red-500 text-white"
                }`}
              >
                Kesejahteraan Sosial
              </Link>
            </li>
            <li>
            <Link
                href={"/front/rpjmd-2021-2025"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/rpjmd-2021-2025" &&
                  "bg-red-500 text-white"
                }`}
              >
                RPJMD Kabupaten Boven Digoel 2021-2025
              </Link>
              
            </li>
            <li>
              <Link
                href={"/front/apbd"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/apbd" && "bg-red-500 text-white"
                }`}
              >
                APBD Boven Digoel
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li onMouseEnter={() => setCurentOpen('instansi')} onClick={() => setCurentOpen('instansi')} className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit" open={curentOpen === 'instansi'}>
          <summary
            className={`text-black group-hover:text-white `}
          >
            INSTANSI
          </summary>
          <ul className="p-2">
            <li className="">
              <details className="group-hover:text-inherit">
                <summary
                  className={`text-black `}
                >
                  Dinas Daerah
                </summary>
                <ul className="p-2 max-h-60 overflow-y-auto">

                {dinasDaerah.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                  
                  
                  
                </ul>
              </details>
            </li>

            <li className="">
              <details className="group-hover:text-inherit">
                <summary
                  className={`text-black `}
                >
                  Lembaga Teknis
                </summary>
                <ul className="p-2 max-h-60 overflow-y-auto">

                {lembagaTeknis.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                  
                  
                  
                </ul>
              </details>
            </li>

            <li className="">
              <details className="group-hover:text-inherit">
                <summary
                  className={`text-black `}
                >
                  SEKRETARIAT
                </summary>
                <ul className="p-2 max-h-60 overflow-y-auto">

                {sekretariat.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white `}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                  
                  
                  
                </ul>
              </details>
            </li>
            
            
          </ul>
        </details>
      </li>

      <li onMouseEnter={() => setCurentOpen('pejabat')} onClick={() => setCurentOpen('pejabat')} className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit" open={curentOpen === 'pejabat'}>
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/front/bupati" ||
                pathName === "/front/wakil-bupati" ||
                pathName === "/front/sekda" ||
                pathName === "/front/asisten-bidang-administrasi-umum" ||
                pathName ===
                  "/front/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat" ||
                pathName === "/front/asisten-bidang-perekonomian-dan-pembangunan" ||
                pathName === "/front/staf-ahli-satu" ||
                pathName === "/front/staf-ahli-dua" ||
                pathName === "/front/staf-ahli-tiga") &&
              "bg-red-500 text-white"
            }`}
          >
            PEJABAT
          </summary>
          <ul className="p-2">
            <li>
              <Link
                href={"/front/bupati"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/bupati" && "bg-red-500 text-white"
                }`}
              >
                Bupati
              </Link>
            </li>
            <li>
              <Link
                href={"/front/wakil-bupati"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/wakil-bupati" && "bg-red-500 text-white"
                }`}
              >
                Wakil Bupati
              </Link>
            </li>
            <li>
              <Link
                href={"/front/sekda"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/sekda" && "bg-red-500 text-white"
                }`}
              >
                Sekertaris Daerah
              </Link>
            </li>
            <li>
              <Link
                href={"/front/asisten-bidang-administrasi-umum"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/asisten-bidang-administrasi-umum" &&
                  "bg-red-500 text-white"
                }`}
              >
                Asisten Bidang Administrasi Umum
              </Link>
            </li>
            <li>
              <Link
                href={"/front/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName ===
                    "/front/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat" &&
                  "bg-red-500 text-white"
                }`}
              >
                Asisten Bidang Pemerintahan & Kesejahteraan Rakyat
              </Link>
            </li>
            <li>
              <Link
                href={"/front/asisten-bidang-perekonomian-dan-pembangunan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/asisten-bidang-perekonomian-dan-pembangunan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Asisten Bidang Perekonomian & Pembangunan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/staf-ahli-satu"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/staf-ahli-satu" && "bg-red-500 text-white"
                }`}
              >
                Staf Ahli 1
              </Link>
            </li>
            <li>
              <Link
                href={"/front/staf-ahli-dua"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/staf-ahli-dua" && "bg-red-500 text-white"
                }`}
              >
                Staf Ahli 2
              </Link>
            </li>
            <li>
              <Link
                href={"/front/staf-ahli-tiga"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/staf-ahli-tiga" && "bg-red-500 text-white"
                }`}
              >
                Staf Ahli 3
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li onMouseEnter={() => setCurentOpen('sarana-prasarana')} onClick={() => setCurentOpen('sarana-prasarana')} className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit" open={curentOpen === 'sarana-prasarana'}>
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/front/transportasi" ||
                pathName === "/front/kesehatan" ||
                pathName === "/front/pendidikan" ||
                pathName === "/front/pos-telekomunikasi-dan-telematika" ||
                pathName === "/front/industri-dan-perdagangan" ||
                pathName === "/front/energy" ||
                pathName === "/front/tempat-ibadah") &&
              "bg-red-500 text-white"
            }`}
          >
            SARANA & PRASARANA
          </summary>
          <ul className="p-2">
            <li>
              <Link
                href={"/front/transportasi"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/transportasi" && "bg-red-500 text-white"
                }`}
              >
                Transportasi
              </Link>
            </li>
            <li>
              <Link
                href={"/front/kesehatan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/kesehatan" && "bg-red-500 text-white"
                }`}
              >
                Kesehatan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/pendidikan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pendidikan" && "bg-red-500 text-white"
                }`}
              >
                Pendidikan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/tempat-ibadah"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/tempat-ibadah" && "bg-red-500 text-white"
                }`}
              >
                Tempat Ibadah
              </Link>
            </li>
            <li>
              <Link
                href={"/front/pos-telekomunikasi-dan-telematika"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pos-telekomunikasi-dan-telematika" &&
                  "bg-red-500 text-white"
                }`}
              >
                Pos, Telekomunikasi & Telemetika
              </Link>
            </li>
            <li>
              <Link
                href={"/front/industri-dan-perdagangan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/industri-dan-perdagangan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Industri & Perdagangan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/energy"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/energy" && "bg-red-500 text-white"
                }`}
              >
                Energi
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li onMouseEnter={() => setCurentOpen('potensi-daerah')} onClick={() => setCurentOpen('potensi-daerah')} className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit" open={curentOpen === 'potensi-daerah'}>
          <summary
            className={`text-black group-hover:text-white ${
              (pathName === "/front/buku-pedoman-statistik-sektoral" ||
                pathName === "/front/satu-data" ||
                pathName === "/front/sk-wali-data" ||
                pathName === "/front/publikasi" ||
                pathName === "/front/sop-meta-data" ||
                pathName === "/front/pertanian" ||
                pathName === "/front/perkebunan" ||
                pathName === "/front/perikanan" ||
                pathName === "/front/peternakan" ||
                pathName === "/front/kehutanan" ||
                pathName === "/front/pariwisata-dan-kebudayaan" ||
                pathName === "/front/statistik-sektoral-daerah") &&
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
                    (pathName === "/front/buku-pedoman-statistik-sektoral" ||
                      pathName === "/front/satu-data" ||
                      pathName === "/front/sk-wali-data" ||
                      pathName === "/front/publikasi" ||
                      pathName === "/front/sop-meta-data" ||
                      pathName === "/front/statistik-sektoral-daerah") &&
                    "bg-red-500 text-white"
                  }`}
                >
                  Statistik Sektoral
                </summary>
                <ul className="p-2">
                  <li>
                    <Link
                      href={"/front/buku-pedoman-statistik-sektoral"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/front/buku-pedoman-statistik-sektoral" &&
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
                          (pathName === "/front/satu-data" ||
                            pathName === "/front/statistik-sektoral-daerah") &&
                          "bg-red-500 text-white"
                        }`}
                      >
                        Regulasi
                      </summary>
                      <ul className="p-2">
                        <li>
                          <Link
                            href={"/front/satu-data"}
                            className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                              pathName === "/front/satu-data" &&
                              "bg-red-500 text-white"
                            }`}
                          >
                            Satu Data
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/front/statistik-sektoral-daerah"}
                            className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                              pathName === "/front/statistik-sektoral-daerah" &&
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
                      href={"/front/sk-wali-data"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/front/sk-wali-data" && "bg-red-500 text-white"
                      }`}
                    >
                      SK Wali Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/front/publikasi"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/front/publikasi" && "bg-red-500 text-white"
                      }`}
                    >
                      Publikasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/front/sop-meta-data"}
                      className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                        pathName === "/front/sop-meta-data" && "bg-red-500 text-white"
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
                href={"/front/pertanian"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pertanian" && "bg-red-500 text-white"
                }`}
              >
                Pertanian
              </Link>
            </li>
            <li>
              <Link
                href={"/front/perkebunan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/perkebunan" && "bg-red-500 text-white"
                }`}
              >
                Perkebunan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/perikanan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/perikanan" && "bg-red-500 text-white"
                }`}
              >
                Perikanan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/peternakan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/peternakan" && "bg-red-500 text-white"
                }`}
              >
                Peternakan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/kehutanan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/kehutanan" && "bg-red-500 text-white"
                }`}
              >
                Kehutanan
              </Link>
            </li>
            <li>
              <Link
                href={"/front/pariwisata-dan-kebudayaan"}
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pariwisata-dan-kebudayaan" &&
                  "bg-red-500 text-white"
                }`}
              >
                Pariwisata & Kebudayaan
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li onMouseEnter={() => setCurentOpen('e-gov app')} onClick={() => setCurentOpen('e-gov app')} className="group hover:bg-red-500 hover:rounded-lg">
        <details className="group-hover:text-inherit" open={curentOpen === 'e-gov app'}>
          <summary
            className={`text-black group-hover:text-white`}
          >
            E-GOV APP
          </summary>
          <ul className="p-2">
            
            <li>
              <Link
                href={'https://www.ppid.bovendigoelkab.go.id/'} target='_blank'
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pertanian" && "bg-red-500 text-white"
                }`}
              >
                PPID
              </Link>
            </li>
            <li>
              <Link
                href={'https://etpp.bovendigoelkab.go.id/login/login'} target='_blank'
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pertanian" && "bg-red-500 text-white"
                }`}
              >
                ETPP
              </Link>
            </li>
            <li>
              <Link
                href={'https://lpse.bovendigoelkab.go.id/eproc4'} target='_blank'
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pertanian" && "bg-red-500 text-white"
                }`}
              >
                LPSE
              </Link>
            </li>
            <li>
              <Link
                href={'https://data.bovendigoelkab.go.id/'} target='_blank'
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pertanian" && "bg-red-500 text-white"
                }`}
              >
                SATU DATA
              </Link>
            </li>
            <li>
              <Link
                href={'#'} target='_blank'
                className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
                  pathName === "/front/pertanian" && "bg-red-500 text-white"
                }`}
              >
                Email
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li onMouseEnter={() => setCurentOpen('')} onClick={() => setCurentOpen('')}>
        <Link
          href={"/pages/berita"}
          className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
            (pathName === "/pages/berita" || pathName.includes('detail-berita')) && "bg-red-500 text-white"
          }`}
        >
          Berita
        </Link>
      </li>

      <li onMouseEnter={() => setCurentOpen('')} onClick={() => setCurentOpen('')}>
        <Link
          href={"/front/kontak"}
          className={`text-black whitespace-nowrap hover:bg-red-500 hover:text-white ${
            pathName === "/front/kontak" && "bg-red-500 text-white"
          }`}
        >
          Kontak
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
