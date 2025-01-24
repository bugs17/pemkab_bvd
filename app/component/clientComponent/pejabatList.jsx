"use client";
import { truncate } from "@/app/lib/truncKalimat";
import React from "react";

import { FaEye } from "react-icons/fa";
import Link from "next/link";
import ButtonEditPejabat from "./buttonEditPejabat";

const PejabatList =  ({ instancePejabatProps }) => {
    


  return (
    <>
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="font-semibold ">
            Pejabat
          </div>
        </div>
      </div>
      <div className="h-full overflow-y-auto">
        <table className="table table-xs mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-left">Nama</th>
              <th className="text-center">Jabatan</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {instancePejabatProps.length > 0 && (
              instancePejabatProps.map((pejabat, index) => (

              <tr key={index}>
                <th>-</th>
                <td className="text-left">
                  <div className="tooltip z-50" data-tip={pejabat.nama}>
                    {pejabat.nama}
                  </div>
                </td>
                <td className="text-center">
                  <div className="tooltip z-50" data-tip={pejabat.jabatan}>
                    {truncate(pejabat.jabatan.toUpperCase(), 40)}
                  </div>
                </td>
                

                <td className="text-right flex flex-row justify-end gap-2 p-2 items-center">
                  <div
                    className="tooltip z-50"
                    data-tip={`Lihat ${pejabat.jabatan}`}
                  >
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${pejabat.urlFrontEnd}`}
                      passHref
                    >
                      <FaEye
                        size={20}
                        className="text-orange-500 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <ButtonEditPejabat id={pejabat.id} jabatanProps={pejabat.jabatan} namaProps={pejabat.nama} />
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

export default PejabatList;
