import React from "react";

const GaleryFoto = () => {
  return (
    <div className="carousel carousel-center bg-slate-100 rounded-box max-w-full space-x-4 p-4 shadow-md">
      <div className="carousel-item">
        <img
          src="https://bovendigoelkab.go.id/uploads/gallery/228_15062021_103613_covid.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://bovendigoelkab.go.id/uploads/gallery/822_15062021_103358_titik_nol_boven.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://bovendigoelkab.go.id/uploads/gallery/685_15062021_103613_forkopimda_kab_boven.jpg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://bovendigoelkab.go.id/uploads/gallery/17_15062021_103613_Forum_Konsultasi.jpeg"
          className="rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://bovendigoelkab.go.id/uploads/gallery/292_15062021_103358_peta_wilayah.png"
          className="rounded-box"
        />
      </div>
      
    </div>
  );
};

export default GaleryFoto;
