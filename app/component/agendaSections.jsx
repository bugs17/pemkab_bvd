import React from 'react'
import Pengumuman from './clientComponent/pengumuman';
import Unduhan from './clientComponent/unduhan';
import Agenda from './clientComponent/agenda';
import KolomKalender from './clientComponent/kolomKalender';
import SiaranTundaDTV from './clientComponent/siaranTundaDTV';
import SiaranLangsungDTV from './clientComponent/siaranLangsungDTV';

const AgendaSections = () => {
  return (
    <div className="px-4 py-8 flex md:flex-row flex-col-reverse">
        <div className="md:w-[60%]">
          {/* pengumuman & kalender kegiatan */}
          <div className=" flex md:flex-row flex-col h-full w-full gap-4">
            
            <div className="h-full w-full">
                {/* Pengumuman */}
                <Pengumuman />

                {/* unduhan */}
                <Unduhan />

                {/* agenda */}
                <Agenda />
            </div>

            {/* kalender */}
            <div className="h-full w-full">
                {/* kalender */}
              <KolomKalender />
            </div>

          </div>
        </div>


        <div className="md:w-[40%]  px-4">
          <SiaranTundaDTV />

          <SiaranLangsungDTV />
        
        </div>
      </div>
  )
}

export default AgendaSections