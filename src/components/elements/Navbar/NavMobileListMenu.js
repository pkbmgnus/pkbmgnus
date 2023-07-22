'use client';
import MENU_LIST from '@/utils/MENU_LIST';
import { usePathname } from 'next/navigation';
import Button from '@/components/elements/Button/index';
import KETERAMPILAN_LIST from '@/utils/KETERAMPILAN_LIST';

import Link from 'next/link';
import Image from 'next/image';
import PAKET_LIST from '@/utils/PAKET_LIST';
import { Menu } from '@headlessui/react';

export default function NavMobileListMenu() {
  const pathname = usePathname();

  const closeMenu = () => {
    const getMenus = window.document.getElementsByClassName('coverMobileNav');
    const getMenu = getMenus[0];

    const getBody = window.document.body.classList;
    getBody.remove('overflow-hidden');
    getMenu.classList.remove('!left-0'); //hide nav
    getMenu.classList.add('-left-[100vw]'); //hide nav
  };
  return (
    <aside className="coverMobileNav cardScroll capitalize  -left-[100vw] transition-all overflow-y-auto flex flex-row   w-screen fixed right-0 bottom-0  top-0 z-50 max-w-[100vh] ">
      <div className="mobileNav bg-white  w-[83rem] md:w-[30rem] min-h-screen  shadow-2xl transition-all p-5 ">
        <Link href={'/'} aria-label="home">
          <div className=" flex justify-center space-x-5 items-center flex-row  py-3 mb-7 ">
            <Image property="true" src={'/logo.png'} alt="Logo PKBM Glora Nusantara" height={500} width={500} className="h-auto w-11" />
            <h3 className="font-semibold  text-xl  ">PKBMGNUS</h3>
          </div>
        </Link>

        <ul className=" flex flex-col  justify-center  items-start ">
          {MENU_LIST.map((post) => (
            <li onClick={closeMenu} key={post.slug} className={`${pathname === post.slug ? 'bg-primary text-white shadow-sm' : ''} rounded-xl w-full px-3.5 text-sm   hover:bg-primary/10  dark:hover:bg-primary/10  mb-2`}>
              <Link href={`${post.slug}`} aria-label={post.title} className=" inline-flex items-center w-full py-3.5">
                {post.icon} <span className="pl-3.5">{post.title}</span>
              </Link>
            </li>
          ))}
          {/* Paket */}
          <li className="rounded-xl  px-3.5 text-sm  w-full py-3.5">
            <Menu>
              <Menu.Button className={'inline-flex items-center'}>
                Paket
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Menu.Button>
              <Menu.Items className={' flex text-gray text-sm flex-col mt-3 bg-graySoft/50 rounded-lg '}>
                {PAKET_LIST.map((post) => (
                  <Menu.Item key={post.title} className={' hover:bg-primary hover:text-white py-2 pr-7  pl-3 '} onClick={closeMenu}>
                    {({ active }) => (
                      <Link className={`${active && 'bg-blue-500'}`} href={post.slug}>
                        {post.title}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </li>

          {/* keterampilan */}
          <li className="rounded-xl  px-3.5 text-sm  w-full py-3.5">
            <Menu>
              <Menu.Button className={'inline-flex items-center'}>
                Keterampilan
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Menu.Button>
              <Menu.Items className={' flex text-gray text-sm flex-col mt-3 bg-graySoft/50 rounded-lg'}>
                {KETERAMPILAN_LIST.map((post) => (
                  <Menu.Item key={post.keterampilan} className={' hover:bg-primary hover:text-white py-2 pr-7  pl-3 '} onClick={closeMenu}>
                    {({ active }) => (
                      <Link className={`${active && 'bg-blue-500'}`} href={`${post.slug}`}>
                        {post.keterampilan}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Menu>
          </li>

          <li className="w-full px-2 !mt-[3rem]">
            <Link href={'#'} aria-label="">
              <Button addClass={'text-sm'}>Hubungi Kami</Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-full bg-none" onClick={closeMenu}></div>
    </aside>
  );
}
