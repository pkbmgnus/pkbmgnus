'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Keterampilancard from './KeterampilanCard';

export default function Keterampilan() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <section className=" space-y-5 my-20 lg:my-40   ">
      <div className="text-center mx-auto md:w-[80%] lg:w-[80%] space-y-5 container">
        <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl -tracking-tight" data-aos={'zoom-in'}>
        Kembangkan Diri, Berkarya Nyata, Menuju Prestasi Terbaik
        </h2>
        <p className="text-gray text-base md:text-lg  lg:w-[90%] mx-auto" data-aos={'zoom-in'}>
        Kami juga menyediakan berbagai Kursus Keterampilan yang menawarkan peluang untuk berkembang dalam berbagai bidang kreatif dan teknis.
        </p>
      </div>
      <ul className="cardScroll px-5   py-5 pb-8 items-center  grid grid-flow-col transition-all justify-start lg:justify-center w-full scroll-smooth md:gap-16 gap-7 overflow-x-auto overflow-y-hidden snap-mandatory" data-aos={'zoom-in'}>
        <Keterampilancard />
      </ul>
    </section>
  );
}
