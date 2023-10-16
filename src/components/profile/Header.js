'use client';
import AOS from '@/utils/AOS';
import Button, { ButtonLight } from '../elements/Button';
import { useEffect } from 'react';
import Link from 'next/link';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';

export default function Header() {
  useEffect(() => {
    AOS();
  }, []);
  return (
    <div className="flex flex-col justify-center lg:text-center mx-auto md:w-[90%] lg:w-[80%] space-y-5 lg:items-center h-[60vh] lg:h-screen" data-aos="zoom-in">
      {/* <!-- == text header ==--> */}
      <h1 className=" leading-relaxed text-sm md:text-2xl text-primary font-semibold">Pusat Kegiatan Belajar Masyarakat (PKBM)</h1>
      <h2 className="!mt-2 font-bold text-3xl leading-10 lg:text-5xl lg:leading-tight lg:-tracking-tight capitalize"> Gelora Nusantara Wonosobo.</h2>
      <p className=" leading-relaxed lg:text-base text-gray lg:max-w-3xl">
        Gelora Nusantara, hadir untuk memberikan kesempatan emas bagi Anda yang ingin mengejar impian dan meraih keberhasilan. Sebagai Pusat Kegiatan Belajar Masyarakat di Wonosobo.
      </p>
      <div className="flex lg:flex-col md:flex-row w-full space-x-3 md:space-y-0 md:space-x-5 items-center  justify-center ">
        <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[0].link}>
          <Button> WhatsApp</Button>
        </Link>
        <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[2].link}>
          <ButtonLight>Telepon</ButtonLight>
        </Link>
      </div>
    </div>
  );
}
