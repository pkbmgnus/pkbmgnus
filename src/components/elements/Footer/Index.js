'use client';
import Link from 'next/link';
import Image from 'next/image';
import KETERAMPILAN_LIST from '@/utils/KETERAMPILAN_LIST';
import PAKET_LIST from '@/utils/PAKET_LIST';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';

export default function Footer() {
  return (
    <footer className="px-4 divide-y border-t border-gray text-white bg-darkPrimary  ">
      <div className="container flex flex-col justify-between items-start py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <Image property="true" src={'/logo.png'} alt="Logo PKBM Glora Nusantara" height={500} width={500} className="h-auto w-12" />
            </div>
            <div className="flex flex-col justify-center ">
              <h4 className="self-center text-lg font-semibold">PKBMGNUS</h4>
              <span className="tracking-widest text-sm -mt-1">Wonosobo</span>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-5/6 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase font-semibold ">Paket PKBM</h3>
            <ul className="space-y-1">
              {PAKET_LIST.map((post, idx) => (
                <li key={idx}>
                  <Link className="text-white/80 hover:text-white" rel="noopener noreferrer" href={`${post.slug}`}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase font-semibold ">Sub Menu</h3>
            <ul className="space-y-1">
              <li>
                <Link className="text-white/80 hover:text-white" rel="noopener noreferrer" href="/profil">
                  Profil PKBM
                </Link>
              </li>
              <li>
                <Link className="text-white/80 hover:text-white" rel="noopener noreferrer" href="/kontak">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-semibold ">Keterampilan</h3>
            <ul className="space-y-1">
              {KETERAMPILAN_LIST.map((post, idx) => (
                <li key={idx}>
                  <Link className="text-white/80 hover:text-white" rel="noopener noreferrer" href={`${post.slug}`}>
                    {post.keterampilan}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 pl-4">
            <div className="uppercase font-semibold ">Kontak</div>
            <div className="flex justify-start space-x-3">
              {LINK_REDIRECT.map((post, idx) => (
                <Link key={idx} rel="noopener noreferrer" href={post.link} title={post.name} className="flex items-center p-1">
                  <Image src={post.svg} width={100} height={100} alt={post.link} className="w-6 h-6 fill-current" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">© {new Date().getFullYear()} PKBM Gelora Nusantara. All rights reserved.</div>
    </footer>
  );
}
