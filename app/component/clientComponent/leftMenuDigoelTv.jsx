"use client";
import { Tv } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const LeftMenuDigoelTv = () => {
  const pathName = usePathname();


  const menus = [
    
    
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
export default LeftMenuDigoelTv;
