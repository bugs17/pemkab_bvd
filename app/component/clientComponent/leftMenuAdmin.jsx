"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftMenuAdmin = () => {
  const pathName = usePathname();
  const menus = [
    {
      title: "Berita",
      path: "/admin",
      match: "berita",
    },
    {
      title: "Pengumuman",
      path: "/admin/pengumuman/pengumuman-list",
      match: "pengumuman",
    },
    {
      title: "Kalender Kegiatan",
      path: "/admin/kalender/kegiatan-list",
      match: "kalender",
    },
    {
      title: "Unduhan",
      path: "/admin/unduhan/unduhan-list",
      match: "unduhan",
    },
    {
      title: "Pejabat",
      path: "/admin/pejabat",
      match: "pejabat",
    },
    {
      title: "Sarana & Prasarana",
      path: "/admin/sarana-dan-prasarana",
      match: "sarana-dan-prasarana",
    },
    {
      title: "Potensi Daerah",
      path: "/admin/potensi-daerah",
      match: "potensi-daerah",
    },
    {
      title: "Digoel TV",
      match: "digoel-tv",
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
                {menu.title}
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
              className={`hover:bg-success hover:text-slate-100 ${
                pathName.includes(menu.match) && "bg-success text-slate-100"
              }`}
            >
              {menu.title}
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
