'use client';

import NavListMenu from '@/components/elements/Navbar/NavListMenu';
import { ButtonLight } from '@/components/elements/Button/index';
import Link from 'next/link';
import BurgerButton from '@/components/elements/Button/BtnBurgerButton';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false); //ubah warna saat scroll
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      // Hilang saat scroll
      const prevScroll = scrollTop;
      window.onscroll = () => {
        const nav = window.document.querySelector('nav').classList;
        const curentScroll = window.scrollY;
        return prevScroll < curentScroll ? nav.add('-mt-96') : nav.remove('-mt-96');
      };
    };
  }, [scrollTop]);

  return (
    <nav className={` z-50 py-4 capitalize  fixed top-0 left-0 right-0 transition-all duration-300 z-20bg-transparent  ${isScrolled ? 'bg-white  backdrop-blur-2xl bg-opacity-80' : ''} shadow`}>
      <section className="flex container flex-row justify-between items-center ">
        <div className=" flex flex-row justify-center items-center">
          <Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <Image property="true" src={'/logo.png'} alt="Logo PKBM Glora Nusantara" height={500} width={500} className="h-auto w-11" />
            </div>
            <div className="flex flex-col justify-center ">
              <h4 className="self-center text-base font-semibold">PKBMGNUS</h4>
              <span className="tracking-widest text-xs -mt-1">Wonosobo</span>
            </div>
          </Link>
          <div className="hidden lg:flex  flex-row  justify-center  ">
            <NavListMenu />
          </div>
        </div>
        <div className="flex items-center flex-row sm:right-0">
          <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[0].link} aria-label="pkbmgnus">
            <ButtonLight addClass={'hidden bg-secondary text-white text-sm lg:flex lg:items-center'}>
              Hubungi
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            </ButtonLight>
          </Link>

          <BurgerButton data={true} />
        </div>
      </section>
    </nav>
  );
}
