'use client';
import MENU_LIST from '@/utils/MENU_LIST';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import KETERAMPILAN_LIST from '@/utils/KETERAMPILAN_LIST';
import PAKET_LIST from '@/utils/PAKET_LIST';

export default function NavListMenu() {
  const pathname = usePathname();
  return (
    <ul className=" flex  text-black  items-center  px-10 text-sm md:text-sm space-x-10 md:space-x-8 ">
      {MENU_LIST.map((post) => (
        <li key={post.slug} className={pathname === post.slug ? 'text-primary font-semibold' : 'text-black'}>
          <Link href={`${post.slug}`} className="w-full">
            {post.title}
          </Link>
        </li>
      ))}
      <li className="hidden md:block">
        <Menu>
          <Menu.Button className={'inline-flex items-center'}>
            Paket
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Menu.Button>
          <Menu.Items className={'z-30 absolute flex text-gray text-sm flex-col mt-3 bg-white rounded-lg shadow-lg'}>
            {PAKET_LIST.map((post) => (
              <Menu.Item key={post.title} className={'hover:bg-primary hover:text-white py-2 pr-7  pl-3 '}>
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
      <li className="hidden md:block">
        <Menu>
          <Menu.Button className={'inline-flex items-center'}>
            Keterampilan
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Menu.Button>
          <Menu.Items className={'z-30 absolute flex text-gray text-sm flex-col mt-3 bg-white rounded-lg shadow-lg'}>
            {KETERAMPILAN_LIST.map((post) => (
              <Menu.Item key={post.keterampilan} className={'hover:bg-primary hover:text-white py-2 pr-7  pl-3 '}>
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
    </ul>
  );
}
