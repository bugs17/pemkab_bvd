import React from "react";

const SiaranTundaDTV = () => {
  return (
    <>
      <div className="divider divider-success">
        <span className="text-green-700">SIARAN TUNDA DIGOEL-TV</span>
      </div>

      {/* carousal siaran ulang */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <iframe
            className="rounded-md"
            width="520"
            height="315"
            src="https://www.youtube.com/embed/uuZE_IRwLNI?si=2ecXBNlVOU7sh4lm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <iframe
            className="rounded-md"
            width="520"
            height="315"
            src="https://www.youtube.com/embed/R072rB3b9dA?si=-JOROIYXKHK067VI"
            title="YouTube video player"
            frameorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-violet-300 text-slate-100 hover:bg-violet-500"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiaranTundaDTV;
