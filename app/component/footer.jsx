import Image from 'next/image'
import React from 'react'
import LogoBvd from '../asset/img/logoBvd.png'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer bg-primary text-slate-50 p-10">
  <aside>
    <Image src={LogoBvd} className='h-14 w-14' alt='logo' />
    <p>
      PEMERINTAH KABUPATEN BOVEN DIGOEL
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Kontak</h6>
    <span className="flex items-center gap-3">
    <MdEmail size={25} />
    info@bovendigoelkab.go.id</span>
    <a href='https://www.instagram.com/kominfobovendigoel/' target='_blank' className="link link-hover flex items-center gap-3">
        <FaInstagramSquare size={25} />
        Pemda_BVD
    </a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Alamat</h6>
    <span className="flex items-center gap-3">
    <HiBuildingOffice2 size={25} />
    Jalan. Trans Papua Tanah Merah Kampung Persatuan, 
    <br/>
    Distrik Mandobo, Tanah Merah - Kabupaten Boven Digoel
    </span>
    
  </nav>
  <nav>
    <h6 className="footer-title">Peta</h6>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031016.705988434!2d140.32221644999998!3d-6.1535839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6848129190de5abd%3A0x1c058ec2ee75402!2sKabupaten%20Boven%20Digoel%2C%20Papua!5e0!3m2!1sid!2sid!4v1736763081042!5m2!1sid!2sid" width="200" height="150" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </nav>
    </footer>

    <footer className="footer footer-center bg-primary text-slate-50 pb-4">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - Situs Resmi Pemerintah Kabupaten Boven Digoel. All rights reserved.</p>
        </aside>
    </footer>
    </>
  )
}

export default Footer