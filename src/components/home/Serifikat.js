'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Sertifikat() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <div className="flex container text-center md:text-left my-16 md:my-28 md:mt-24 lg:mt-44  flex-col md:flex-col-reverse lg:flex-row  justify-between lg:items-start items-center">
      {/* <!-- == text header ==--> */}
      <div className="lg:px-5 space-y-3 md:space-y-6 pt-12 lg:pt-0 h-full lg:flex lg:flex-col lg:items-start lg:justify-end lg:border-r-0">
        <p className=" leading-relaxed lg:text-base text-primary font-semibold italic">Sertifikat Akreditasi</p>
        <h1 className="!mt-2 font-bold text-3xl leading-10 lg:text-5xl lg:leading-tight lg:-tracking-tight capitalize">Menginspirasi, Membangun, Berkembang Bersama Gelora Nusantara!</h1>
        <p className=" leading-relaxed lg:text-lg text-gray lg:w-[70%]">Grelora Nusantara telah mendapatkan sertifikat akreditasi, menjadi bukti komitmen kami dalam menyediakan pendidikan dan pelatihan berkualitas.</p>
      </div>
      {/* <!-- == img header ==--> */}
      <div className=" w-fit mt-10 lg:mt-0 " data-aos="fade-left">
        <div className=" lg:w-[33rem] md:w-full">
          <Image src="/sertifikat.webp" width={500} height={500} className="object-cover object-bottom shadow-xl aspect-[4/5] w-full md:w-[30rem] rounded-2xl md:rounded-3xl  ml-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
