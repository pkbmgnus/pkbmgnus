import NavListMenu from '@/components/elements/Navbar/NavListMenu';
import Button from '@/components/elements/Button/index';
import Link from 'next/link';
import Image from 'next/image';
import BtnSosmed from './../Button/BtnSosmed';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';
export default function Footer() {
  return (
    <footer className=" py-3 md:pt-9 pb-9 flex flex-col space-y-5 border-t-2 border-primary border-opacity-60">
      <section className="container">
        {/* Link */}
        <div className=" flex flex-col lg:flex-row justify-between items-center space-y-6 md:pb-6">
          <Link href={'/'} className=" lg:w-48 " aria-label="Logo">
            <Image property="true" src={'/logo.png'} alt="Logo PKBM Glora Nusantara" height={500} width={500} className="hidden lg:block h-auto w-24" />
          </Link>
          <div className="lg:grow flex flex-row justify-center  ">
            <NavListMenu />
          </div>
          <div className="flex items-center flex-row sm:right-0">
            <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[0].link} aria-label="">
              <Button addClass={'w-full '}>Hubungi Kami</Button>
            </Link>
          </div>
        </div>

        <div className=" text-sm  flex justify-center lg:justify-between text-gray flex-col-reverse lg:flex-row items-center mt-10 lg:mt-10 lg:items-end">
          {/* Cr */}
          <p className=" mt-7 lg:mt-0">© Copyright 2023. All rights reserved.</p>
          {/* sosmed */}
          <div className="flex flex-row justify-center space-x-5 lg:space-x-8">
            <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[1].link}>
              <BtnSosmed>
                <Image src={'/icon/ig.svg'} width={500} height={500} className="w-6 h-auto " alt="Icon Ig" />
              </BtnSosmed>
            </Link>
            <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[2].link}>
              <BtnSosmed>
                <Image src={'/icon/tel.svg'} width={500} height={500} className="w-6 h-auto " alt="Icon Fb" />
              </BtnSosmed>
            </Link>
            <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[0].link}>
              <BtnSosmed>
                <Image src={'/icon/wa.svg'} width={500} height={500} className="w-5 h-auto " alt="Icon Wa" />
              </BtnSosmed>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
