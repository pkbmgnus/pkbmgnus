'use client';

import { useState, useEffect } from 'react';

export default function BurgerButton({ data }) {
  const [getBurgerMenu, setBurgerMenu] = useState(data);

  const burgerTriger = () => {
    const getMenus = window.document.getElementsByClassName('coverMobileNav');
    const getMenu = getMenus[0];

    const getBody = window.document.body.classList;
    if (getBurgerMenu) {
      setBurgerMenu(true);
      // overflow;

      getBody.add('overflow-hidden');
      // show side mobile nav
      getMenu.classList.remove('-left-[100vw]');
      getMenu.classList.add('!left-0');
    }
  };

  // line burger
  const genericHamburgerLine = `h-0.5  w-5 my-0.5 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button onClick={burgerTriger} aria-label="Button Menu" className={` burgerBtn ml-1  flex flex-col justify-center items-center lg:hidden  text-md hover:transition-all text-gray-950 dark:text-graybg-gray-100 rounded-lg py-2  px-1.5 `}>
      <div className={`${genericHamburgerLine} ${!getBurgerMenu ? 'rotate-45 translate-y-1.5 opacity-75 group-hover:opacity-100' : 'opacity-75 group-hover:opacity-100'}`} />
      <div className={`${genericHamburgerLine} ${!getBurgerMenu ? 'opacity-0' : 'opacity-75 group-hover:opacity-100'}`} />
      <div className={`${genericHamburgerLine} ${!getBurgerMenu ? '-rotate-45 -translate-y-1.5 opacity-75 group-hover:opacity-100' : 'opacity-75 group-hover:opacity-100'}`} />
    </button>
  );
}
