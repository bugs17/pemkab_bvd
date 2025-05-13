"use client";
import { BookMinus, Building, CalendarDays, ChartNoAxesCombined, FileDown, ImagePlus, Mails, Newspaper, Settings, SquareLibrary, Tv, UserCog, Users } from "lucide-react";
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
          path: "#",
          match: "user-opd",
        }
      ],
    },
    {
      title: "Pengaturan",
      match: "pengaturan",
      icon: <Settings color="black" size={18} />,
      submenu: [
        {
          title: "Hero",
          path: "#",
          match: "hero",
        }
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
