'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Link from 'next/link';
import KETERAMPILAN_LIST from '../../../utils/KETERAMPILAN_LIST';
import Image from 'next/image';

export default function KeterampilanCardImg() {
  useEffect(() => {
    AOS();
  }, []);

  return (
    <section className="container space-y-5 mt-20 mb-20 lg:my-40 lg:mt-32 md:mb-32 ">
      <div className="lg:text-center flex items-center justify-center flex-col mx-auto md:w-[70%] lg:w-[50rem] space-y-5">
        <h2 className="font-bold lg:text-4xl lg:max-w-xl md:text-3xl text-2xl  -tracking-tight" data-aos={'zoom-in'}>
          Kursus Keterampilan peluang untuk berkembang.
        </h2>
        <p className="text-gray text-base md:text-base  lg:w-[90%] mx-auto" data-aos={'zoom-in'}>
          Semangat kreativitas dan inovasi melalui beragam Kursus Keterampilan, Temukan bakat tersembunyi melalui pilihan 4 Kursus Keterampilan
        </p>
      </div>
      <ul className="cardScroll px-5   pt-10 items-center grid grid-flow-col transition-all justify-start lg:justify-center w-full croll-smooth lg:gap-10 md:gap-12 gap-7  overflow-x-auto overflow-y-hidden snap-mandatory">
        {KETERAMPILAN_LIST.map((post) => (
          <li key={post.keterampilan} className="w-[17rem] md:w-[19rem] lg:w-[13rem] transition-all group " data-aos={'zoom-in'}>
            <Link href={`${post.slug}`} className=" group capitalize">
              <div className="space-y-4">
                <Image src={`${post.img}`} alt={post.keterampilan} width={500} height={500} className="w-full aspect-[3/2] shadow-md lg:rounded-lg rounded-xl md:rounded-2xl object-cover" />
                <div className="space-y-2 group-hover:text-primary">
                  <h5 className="font-bold text-xl md:text-2xl lg:text-lg ">{post.keterampilan}</h5>
                  <p className="text-gray text-sm line-clamp-2">{post.desc}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
