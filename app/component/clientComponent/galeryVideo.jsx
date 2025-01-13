import React from "react";

const GaleryVideo = () => {
  return (
    <div className="carousel carousel-center bg-slate-100 rounded-box max-w-full space-x-4 p-4 shadow-md">
      <div className="carousel-item">
        <iframe className="rounded-box" width="560" height="315" src="https://www.youtube.com/embed/Yb31T2Pf_1c?si=Z5Q0mbPg70qe9_VD&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="carousel-item">
        <iframe className="rounded-box" width="560" height="315" src="https://www.youtube.com/embed/6s6oVfsU5Ds?si=NAA4ohTmixqUwTKN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      
    </div>
  );
};

export default GaleryVideo;
