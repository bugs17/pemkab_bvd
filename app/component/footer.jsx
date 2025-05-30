import Image from 'next/image'
import React from 'react'
import LogoBvd from '../asset/img/logoBvd.png'
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { prisma } from '../lib/db';
import { FacebookIcon, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = async () => {

  let kontak = {}

  try {
    kontak = await prisma.kontak.findFirst()
  } catch (error) {
    console.log("error get kontak pada footer", error.message)
  }

  return (
    <>
    <footer className="footer bg-primary text-slate-50 p-10">
    <aside className='flex lg:flex-col flex-row gap-2 justify-center items-center'>
      <Image src={LogoBvd} className='lg:h-14 lg:w-14 h-9 w-9' alt='logo' />
      <p>
        PEMERINTAH KABUPATEN BOVEN DIGOEL
      </p>
    </aside>
  <nav>
    <h6 className="footer-title">Kontak</h6>
    <span className="flex items-center gap-3">
    <Mail size={18} className="text-white" />
    {kontak.email}
    </span>
    <Link href={kontak.instagram} target='_blank' className="link link-hover flex items-center gap-3">
      <Instagram size={18} className="text-white hover:text-purple-800" />
      @bvdkab
    </Link>
    <Link href={kontak.facebook} target='_blank' className="link link-hover flex items-center gap-3">
      <FacebookIcon size={18} className="text-white hover:text-blue-400" />
      pemkab_boven
    </Link>
    <Link href={kontak.twitter} target='_blank' className="link link-hover flex items-center gap-3">
      <Twitter size={18} className="text-white hover:text-blue-400" />
      pemkab_boven
    </Link>
    <Link href={kontak.linkedIn} target='_blank' className="link link-hover flex items-center gap-3">
      <Linkedin size={18} className="text-white hover:text-blue-400" />
      pemkab_boven
    </Link>
    
  </nav>
  <nav>
    <h6 className="footer-title">Alamat</h6>
    <span className="flex items-center gap-3">
    <MapPin size={28} className="text-white" />
    {kontak.alamat}
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