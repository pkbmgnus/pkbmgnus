'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Keterampilancard from './KeterampilanCard';

export default function Keterampilan() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <section className=" space-y-5 my-20 lg:my-40  flex flex-col justify-center items-center  ">
      <div className="lg:text-center !mx-auto md:w-[80%] lg:w-[100%] space-y-5 container">
        <h2 className="font-bold !mx-auto lg:max-w-3xl lg:text-3xl md:text-3xl text-2xl -tracking-tight" data-aos={'zoom-in'}>
          Kembangkan Diri, Berkarya Nyata, Menuju Prestasi Terbaik
        </h2>
        <p className="text-gray text-base md:text-lg lg:text-base lg:max-w-3xl lg:w-[100%] mx-auto" data-aos={'zoom-in'}>
          Kami juga menyediakan berbagai Kursus Keterampilan yang menawarkan peluang untuk berkembang dalam berbagai bidang kreatif dan teknis.
        </p>
      </div>
      <ul
        className="cardScroll px-5   py-5 pb-8 items-center  grid grid-flow-col transition-all justify-start lg:justify-center w-full scroll-smooth md:gap-16 lg:gap-7 gap-7 overflow-x-auto overflow-y-hidden snap-mandatory"
        data-aos={'zoom-in'}
      >
        <Keterampilancard />
      </ul>
    </section>
  );
}
