"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftMenuAdmin = () => {
  const pathName = usePathname()
  const menus = [
    {
        title:"Berita",
        path:"/admin",
        match: 'berita'
    },
    {
        title:"Pengumuman",
        path:"/admin/pengumuman/pengumuman-list",
        match: 'pengumuman'
    },
    {
        title:"Kalender Kegiatan",
        path:"/admin/kalender/kegiatan-list",
        match: 'kalender'
    },
    {
        title:"Unduhan",
        path:"/admin/unduhan/unduhan-list",
        match: 'unduhan'
        
    },
    {
      title:"Digoel TV",
      match:'digoel-tv',
      submenu:[
          {
              title:"Siaran Langsung (LIVE)",
              path:"/admin/digoel-tv/live-list",
              match:'live'
          },
          {
              title:"Siaran Tunda",
              path:"/admin/digoel-tv/siaran-tunda-list",
              match:'siaran-tunda'
          }
      ]
  },
    {
      title: "Profil",
      match:'profil',
      submenu: [
        {
          title: "Visi-misi",
          path: "/admin/profil/visi-misi",
          match:'visi-misi'

        },
        {
          title: "Kondisi Geografis",
          path: "/admin/profil/kondisi-geografis",
          match:'kondisi-geografis'
        },
        {
          title: "Demografi",
          path: "/admin/profil/demografi",
          match:'demografi'
        },
        {
          title: "Peta",
          path: "/admin/peta",
        },
        {
          title: "Politik Hukum & Keamanan",
          path: "/admin/politik-hukum-keamanan",
        },
        {
          title: "Kesejahteraan Sosial",
          path: "/admin/kesejahteraan-sosial",
        },
        {
          title: "RPJMD 2021-2025",
          path: "/admin/rpjmd-boven-digoel",
        },
        {
          title: "APBD Boven Digoel",
          path: "/admin/apbd-boven-digoel",
        },
      ],
    },
    {
        title:"Pejabat",
        submenu:[
            {
                title:"Bupati",
                path:"/admin/bupati"
            },
            {
                title:"Wakil Bupati",
                path:"/admin/wakil-bupati"
            },
            {
                title:"Sekertaris Daerah",
                path:"/admin/sekertaris-daerah"
            },
            {
                title:"Asisten Bidang Administrasi Umum",
                path:"/admin/asisten-bidang-administrasi-umum"
            },
            {
                title:"Asisten Bidang Pemerintahan & Kesejahteraan Rakyat",
                path:"/admin/asisten-bidang-pemerintahan-dan-kesejahteraan-rakyat"
            },
            {
                title:"Asisten Bidang Perekonomian & Pembangunan",
                path:"/admin/asisten-bidang-perekonomian-dan-pembangunan"
            },
            {
                title:"Staf Ahli 1",
                path:"/admin/staf-ahli-satu"
            },
            {
                title:"Staf Ahli 2",
                path:"/admin/staf-ahli-dua"
            },
            {
                title:"Staf Ahli 3",
                path:"/admin/staf-ahli-tiga"
            },
        ]
    },
    {
        title:"Sarana & Prasarana",
        submenu:[
            {
                title:"Transportasi",
                path:"/admin/transportasi"
            },
            {
                title:"Kesehatan",
                path:"/admin/kesehatan"
            },
            {
                title:"Pendidikan",
                path:"/admin/pendidikan"
            },
            {
                title:"Tempat Ibadah",
                path:"/admin/tempat-ibadah"
            },
            {
                title:"Pos, Komunikasi & Telematika Ibadah",
                path:"/admin/pos-komunikasi-telematika"
            },
            {
                title:"Industri & Perdagangan",
                path:"/admin/industri-perdagangan"
            },
            {
                title:"Energi",
                path:"/admin/energi"
            },
        ]
    },
    {
        title:"Potensi Daerah",
        submenu:[
            {
                title:"Buku Pedoman",
                path:"/admin/buku-pedoman"
            },
            {
                title:"Satu Data",
                path:"/admin/satu-data"
            },
            {
                title:"Statistik Sektoral Daerah",
                path:"/admin/statistik-sektoral-daerah"
            },
            {
                title:"SK Wali Data",
                path:"/admin/sk-wali-data"
            },
            {
                title:"Publikasi",
                path:"/admin/publikasi"
            },
            {
                title:"SOP",
                path:"/admin/sop"
            },
            {
                title:"Pertanian",
                path:"/admin/pertanian"
            },
            {
                title:"Perkebunan",
                path:"/admin/perkebunan"
            },
            {
                title:"Perikanan",
                path:"/admin/perikanan"
            },
            {
                title:"Peternakan",
                path:"/admin/peternakan"
            },
            {
                title:"Kehutanan",
                path:"/admin/kehutanan"
            },
            {
                title:"Pariwisata & Kebudayaan",
                path:"/admin/pariwisata-kebudayaan"
            },
        ]
    },
    {
        title:"Galery",
        submenu:[
            {
                title:"Foto",
                path:"/admin/galery/foto"
            },
            {
                title:"Video",
                path:"/admin/galery/foto"
            }
        ]
    }
  ];

  return (
    <ul className="menu w-full overflow-y-auto">
        
      {menus.map((menu, index) => (
        menu.submenu ? 
        (<li key={index} className="">
          <details>
            <summary className={`hover:bg-success hover:text-slate-100 ${pathName.includes(menu.match) && 'bg-success text-slate-100' }`}>{menu.title}</summary>
            <ul>
              {menu.submenu.map((sub, index) => (
                <li key={index} className="py-1">
                  <Link href={sub.path} className={`hover:bg-success hover:text-slate-100 ${pathName.includes(sub.match) && 'bg-success text-slate-100'}`}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>) :
        (<li key={index}><Link href={menu.path} className={`hover:bg-success hover:text-slate-100 ${pathName.includes(menu.match) && 'bg-success text-slate-100' }`}>{menu.title}</Link></li> )
      ))}

    </ul>
  );
};
{/* <li><a>{menu.title}</a></li> */}
export default LeftMenuAdmin;