'use client';
import AOS from '@/utils/AOS';
import { useEffect } from 'react';
import Link from 'next/link';
import PAKET_LIST from '../../../utils/PAKET_LIST';
import { usePathname } from 'next/navigation';

export default function BannerPaket({ bg }) {
  useEffect(() => {
    AOS();
  }, []);

  const pathname = usePathname();

  return (
    <section className="container  mb-20 mt-14" data-aos="zoom-in">
      <div className={`py-14 w-full bg-primary text-white ${bg}  space-y-6 md:space-y-0 rounded-3xl md:rounded-2xl lg:rounded-3xl flex items-center justify-around lg:justify-center text-left flex-col md:flex-row `}>
        <div className="space-y-3 w-64 text-center md:text-left md:hidden lg:block">
          <h4 className=" text-2xl lg:text-xl font-bold ">3 Paket pendidikan</h4>
          <p className="lg:text-sm">Membuka pintu kesempatan untuk meraih masa depan yang gemilang.</p>
        </div>
        {/* card */}
        <div>
          <ul className="  bg-opacity-10 w-full md:space-x-7 lg:space-x-3  rounded-lg  flex flex-col justify-around items-center  space-y-7  mx-auto  md:flex-row md:items-center  md:space-y-0 md:w-full">
            {PAKET_LIST.map((post) => (
              <li key={post.title}>
                <Link
                  href={post.slug}
                  className={`flex flex-row items-center justify-between w-fit space-x-4 group hover:bg-white p-5  md:p-3 lg:p-3 md: font-bold hover:shadow hover:text-black transition-all rounded-xl ${
                    pathname === `/paket/${post.paket.toLowerCase()}` ? 'bg-white text-black' : 'bg-none'
                  } `}
                >
                  <div
                    className={`${post.color} ${
                      pathname === `/paket/${post.paket.toLowerCase()}` ? 'bg-primary/20' : 'bg-white'
                    }  h-14 w-14  group-hover:bg-primary/20 font-bold text-4xl md:text-2xl lg:text-3xl rounded-lg flex items-center justify-center text-green`}
                  >
                    {post.paket}
                  </div>
                  <div className=" group-hover:text-black">
                    <h6 className=" ont-bold text-2xl md:text-lg lg:text-xl uppercase">{post.title}</h6>
                    <span className="uppercase text-sm md:text-xs font-medium lg:text-xs">{post.descShort}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
