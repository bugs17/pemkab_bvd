import Hero from "./component/hero";

import HeadlineNews from "./component/headlineNews";
import AgendaSections from "./component/agendaSections";
import GalerySections from "./component/galerySections";
import Navbar from "./component/navba";
import Footer from "./component/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* sections hero */}
      <Hero />

      {/* section headline news */}
      <HeadlineNews />

      {/* section agenda dan digoel tv */}
      <AgendaSections />

      {/* galery sections */}
      <GalerySections />

      {/* footer */}
      <Footer />
    </>
  );
}


// <iframe className="rounded-md" width="520" height="315" src="https://www.youtube.com/embed/uuZE_IRwLNI?si=2ecXBNlVOU7sh4lm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>