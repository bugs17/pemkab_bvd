"use client";
import { truncate } from "@/app/lib/truncKalimat";
import React from "react";

import { FaEye } from "react-icons/fa";
import Link from "next/link";
import ButtonEditSaranaPrasarana from "./buttonEditSaranaPrasarana";

const SaranaPrasaranList =  ({ instances }) => {
    


  return (
    <>
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="font-semibold ">
            Sarana Dan Prasarana
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Judul</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {instances.length > 0 && (
              instances.map((instance, index) => (

              <tr key={index}>
                <th>-</th>
                <td className="text-left">
                  <div className="tooltip z-50" data-tip={instance.judul.toUpperCase()}>
                    {instance.judul.toUpperCase()}
                  </div>
                </td>
                
                

                <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div
                    className="tooltip z-50"
                    data-tip={`Lihat ${instance.judul}`}
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${instance.urlFrontEnd}`}
                      passHref
                    >
                      <FaEye
                        size={20}
                        className="text-orange-500 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <ButtonEditSaranaPrasarana id={instance.id} judul={instance.judul} />
                </td>
              </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      
    </>
  );
};

export default SaranaPrasaranList;
