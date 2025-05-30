"use client";
import axios from "axios";
import { BookMinus, Building, CalendarDays, ChartNoAxesCombined, FileDown, ImagePlus, Landmark, Mails, Newspaper, Settings, SquareLibrary, Tv, UserCog, Users, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";


const LeftMenuAdmin = () => {
  const pathName = usePathname();
  const [instansis, setInstansis] = useState([])

  useEffect(() => {
    const url  = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin-opd/get-all-instansi"
    const getAllInstansi = async () => {
        try {
            const res = await axios.get(url, {
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            if (res.status === 200) {
                setInstansis(res.data.instansis)
            }
        } catch (error) {
            
        }
    }

    getAllInstansi()
}, [])


function toSlug(text) {
  return text.toLowerCase().replace(/\s+/g, '-');
}


  const menus = [
    {
      title: "Berita",
      path: "/admin",
      match: "berita",
      icon: <Newspaper color="black" size={18} />
    },
    {
      title: "Pengumuman",
      path: "/admin/pengumuman/pengumuman-list",
      match: "pengumuman",
      icon: <SquareLibrary color="black" size={18} />
    },
    {
      title: "Kalender Kegiatan",
      path: "/admin/kalender/kegiatan-list",
      match: "kalender",
      icon: <CalendarDays color="black" size={18} />
    },
    {
      title: "Unduhan",
      path: "/admin/unduhan/unduhan-list",
      match: "unduhan",
      icon: <FileDown color="black" size={18} />
    },
    {
      title: "Pejabat",
      path: "/admin/pejabat",
      match: "pejabat",
      icon: <Users color="black" size={18} />
    },
    {
      title: "Sarana & Prasarana",
      path: "/admin/sarana-dan-prasarana",
      match: "sarana-dan-prasarana",
      icon: <Building color="black" size={18} />
    },
    {
      title: "Potensi Daerah",
      path: "/admin/potensi-daerah",
      match: "potensi-daerah",
      icon: <ChartNoAxesCombined color="black" size={18} />
    },
    {
      title: "Digoel TV",
      match: "digoel-tv",
      icon: <Tv color="black" size={18} />,
      submenu: [
        {
          title: "Siaran Langsung (LIVE)",
          path: "/admin/digoel-tv/live-list",
          match: "live",
        },
        {
          title: "Siaran Tunda",
          path: "/admin/digoel-tv/siaran-tunda-list",
          match: "siaran-tunda",
        },
      ],
    },
    {
      title: "Profil",
      match: "profil",
      icon: <BookMinus color="black" size={18} />,
      submenu: [
        {
          title: "Visi-misi",
          path: "/admin/profil/visi-misi",
          match: "visi-misi",
        },
        {
          title: "Kondisi Geografis",
          path: "/admin/profil/kondisi-geografis",
          match: "kondisi-geografis",
        },
        {
          title: "Demografi",
          path: "/admin/profil/demografi",
          match: "demografi",
        },
        {
          title: "Peta",
          path: "/admin/profil/peta",
          match: "peta",
        },
        {
          title: "Politik Hukum & Keamanan",
          path: "/admin/profil/politik-hukum-keamanan",
          match: "politik-hukum-keamanan",
        },
        {
          title: "Kesejahteraan Sosial",
          path: "/admin/profil/kesejahteraan-sosial",
          match: "kesejahteraan-sosial",
        },
        {
          title: "RPJMD 2021-2025",
          path: "/admin/profil/rpjmd-boven-digoel",
          match: "rpjmd-boven-digoel",
        },
        {
          title: "APBD Boven Digoel",
          path: "/admin/profil/apbd",
          match: "apbd",
        },
      ],
    },
    {
      title: "Galery",
      match:"galery",
      icon: <ImagePlus color="black" size={18} />,
      submenu: [
        {
          title: "Foto",
          path: "/admin/galery/foto-list",
          match:"foto-list"
        },
        {
          title: "Video",
          path: "/admin/galery/video-list",
          match:"video-list"
        },
      ],
    },
    {
      title: "Kotak Masuk",
      path: "/admin/kotak-masuk",
      match: "kotak-masuk",
      icon: <Mails color="black" size={18} />
    },
    {
      title: "User",
      match: "settings-user",
      icon: <UserCog color="black" size={18} />,
      submenu: [
        {
          title: "Website",
          path: "/admin/settings-user/website",
          match: "website",
        },
        {
          title: "OPD",
          path: "/admin/settings-user/opd",
          match: "opd",
        }
      ],
    },
    {
      title: "Pengaturan web",
      match: "setting-web",
      icon: <Settings color="black" size={18} />,
      submenu: [
        {
          title: "Hero",
          path: "/admin/setting-web/hero",
          match: "hero",
        },
        {
          title: "Ucapan",
          path: "/admin/setting-web/ucapan",
          match: "ucapan",
        },
        {
          title: "Kontak/Sosial media",
          path: "/admin/setting-web/kontak",
          match: "kontak",
        },
      ],
    },
    // {
    //   title: "Pengaturan OPD",
    //   match: "hh",
    //   icon: <Landmark color="black" size={18} />,
    //   submenu: [
        
    //     ...(instansis.length > 0 ? 
    //       instansis.map((item) => ({
    //         title: item.namaInstansi,
    //         path: toSlug(item.namaInstansi),
    //         match: "hh",
    //       }))
    //     : [])
    //   ],
    // },
    {
      title: "Pengaturan INSTANSI",
      path: "/admin/setting-instansi",
      match: "/admin/setting-instansi",
      icon: <Landmark color="black" size={18} />
    },
    {
      title: "Email",
      path: process.env.NEXT_PUBLIC_SERVER_MAIL_URL,
      match: "#",
      icon: <Mail color="black" size={18} />
    },
    {
      title: "Modul Instansi",
      path: process.env.NEXT_PUBLIC_SERVER_OPD,
      match: "#",
      icon: <Building color="black" size={18} />
    },
  ];

  return (
    <ul className="menu w-full overflow-y-auto">
      {menus.map((menu, index) =>
        menu.submenu ? (
          <li key={index} className="">
            <details>
              <summary
                className={`hover:bg-success hover:text-slate-100 ${
                  pathName.includes(menu.match) && "bg-success text-slate-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {menu.icon} 
                  <span>{menu.title}</span>
                </div>
              </summary>
              <ul>
                {menu.submenu.map((sub, index) => (
                  <li key={index} className="py-1">
                    <Link
                      href={sub.path}
                      className={`hover:bg-success hover:text-slate-100 ${
                        pathName.includes(sub.match) &&
                        "bg-success text-slate-100"
                      }`}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={index}>
            <Link
              href={menu.path}
              target={menu.title === 'Modul Instansi' || menu.title === 'Email' ? '_blank' : ''}
              className={`hover:bg-success hover:text-slate-100 ${
                pathName.includes(menu.match) && "bg-success text-slate-100"
              }`}
            >
              <div className="flex items-center gap-2">
                  {menu.icon} 
                  <span>{menu.title}</span>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
{
  /* <li><a>{menu.title}</a></li> */
}
export default LeftMenuAdmin;
