'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Button, { ButtonLight } from '../elements/Button';
import Link from 'next/link';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';

export default function Banner() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <section className="container hidden md:block mb-20 mt-40">
      <div data-aos="zoom-in" className="py-12 w-full bg-primary rounded-3xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center text-center flex-col">
        <div className="flex flex-col justify-center text-center mx-auto md:w-[90%]  space-y-3 items-center ">
          {/* <!-- == text header ==--> */}
          <h4 className="text-white font-bold lg:text-3xl md:text-3xl text-2xl "> {`"Satu Langkah Menuju Prestasi, Bersama Gelora Nusantara!"`}</h4>
          <p className=" leading-relaxed lg:text-base text-sm  lg:w-[70%] text-white">Kami berkomitmen untuk memberikan pengalaman belajar yang bermakna dan membantu Anda mencapai potensi terbaik dalam menggapai masa depan yang cerah.</p>
          <div className="flex flex-col md:flex-row w-full pt-5 md:space-y-0 md:space-x-5 items-center  justify-center ">
            <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[0].link}>
              <Button addClass={'bg-white hover:bg-white/90 !text-primary '}>Daftar Sekarang</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
