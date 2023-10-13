'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Image from 'next/image';

export default function SyaratMendaftar() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <div className="flex container mt-0 md:my-24 md:mt-0  text-center md:text-left flex-col-reverse lg:flex-row  justify-between lg:items-center items-center mb-28 ">
      {/* <!-- == img header ==--> */}
      <div className="lg:-ml-10 w-fit mt-10 lg:mt-0 ">
        <div className=" lg:w-[33rem] md:w-full">
          <Image src="/img/IMG-20230709-WA0024.jpg" width={500} height={500} className="object-cover object-center lg:w-[23rem] md:w-full rounded-2xl lg:aspect-[1/1] md:aspect-[2/1] aspect-[1/1] shadow-xl  ml-auto" alt="" />
        </div>
      </div>

      {/* <!-- == text header ==--> */}
      <div className="lg:pl-10 space-y-3 md:space-y-6 md:pt-12 lg:pt-0 h-full lg:flex lg:flex-col lg:items-start lg:justify-end lg:border-r-0 text-left" data-aos="fade-right">
        {/* <p className=" leading-relaxed lg:text-base text-primary font-semibold italic">Visi&Misi PKMB Glora Nusantara</p> */}
        <h1 className="!mt-2 lg:text-4xl md:text-3xl text-2xl   leading-10 lg:leading-tight lg:-tracking-tight capitalize font-bold">Syarat Pendaftaran.</h1>
        <p className=" leading-relaxed lg:text-base  lg:w-[90%]">
          Kami dengan senang hati menyambut Anda untuk menjadi bagian dari komunitas belajar dan berkembang bersama kami. Sebelum mendaftar, harap perhatikan syarat-syarat pendaftaran di bawah ini:
        </p>
        {/* misi */}
        <ul className="list-disc  ml-5 md:text-lg">
          <li>Foto Copy (Ijazah, Kartu Keluarga, Akte) </li>
          <li>Foto 2x3 2 Lembar </li>
          <li>Foto 3x4 4 Lembar </li>
          <li>
            Raport Terakhir <span className="text-sm italic">*Bila putus sekolah</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
