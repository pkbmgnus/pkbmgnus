'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Image from 'next/image';

export default function VisiMisi() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <div className="flex container  md:mb-28 -mt-16 md:mt-0   text-center md:text-left flex-col-reverse lg:flex-row  justify-between lg:items-start items-center">
      {/* <!-- == img header ==--> */}
      <div className=" w-fit mt-10 lg:mt-0 " data-aos="fade-right">
        <div className=" lg:w-[33rem] md:w-full">
          <Image src="/visiMisi.jpg" width={500} height={500} className="object-cover object-top md:w-[20rem] rounded-xl aspect-[2/3] shadow-xl  ml-auto" alt="" />
        </div>
      </div>

      {/* <!-- == text header ==--> */}
      <div className="lg:pl-20 space-y-3 md:space-y-6  lg:pt-0 h-full lg:flex lg:flex-col lg:items-start lg:justify-end lg:border-r-0" data-aos="fade-left">
        {/* <p className=" leading-relaxed lg:text-base text-primary font-semibold italic">Visi&Misi PKMB Glora Nusantara</p> */}
       <div>
       <h1 className=" font-bold text-3xl leading-10 lg:text-5xl lg:leading-tight lg:-tracking-tight capitalize">Visi&Misi PKBM  </h1>
        <span className='font-bold text-4xl'>Gelora Nusantara</span>
       </div>
        <p className=" leading-relaxed lg:text-lg text-gray lg:w-[100%]">Saatnya berani bermimpi dan mengambil langkah maju menuju kesuksesan. Bersama Gelora Nusantara, mari wujudkan impian dan raih prestasi gemilang.</p>
      </div>
    </div>
  );
}
