import Link from 'next/link';
import Button, { ButtonLight } from '../elements/Button';
import Image from 'next/image';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';

export default function Header() {
  return (
    <div className="flex container my-16 md:my-28 md:mt-24 lg:mt-44 md:space-x-10 flex-col md:flex-col-reverse lg:flex-row  justify-center lg:items-start items-center">
      <div className="">
        {/* <!-- == text header ==--> */}
        <div className="lg:px-5 space-y-3 md:space-y-6 pt-12 lg:pt-0 h-full lg:flex lg:flex-col lg:items-start lg:justify-end lg:border-r-0" data-aos="zoom-in">
          <h1 className=" leading-relaxed lg:text-lg lg:max-w-md text-primary font-semibold italic">Pelatihan Pusat Kegiatan Belajar Masyarakat Gelora Nusantara Wonosobo.</h1>
          <h2 className="!mt-2 lg:max-w-md font-bold text-3xl leading-10 lg:text-4xl lg:leading-tight lg:-tracking-tight capitalize">Dorong Potensimu, Raih Masa Depanmu!</h2>
          <p className=" leading-relaxed lg:max-w-xl lg:text-base text-gray lg:w-[100%]">
            Kami adalah rumah bagi perubahan dan pertumbuhan, berkomitmen untuk memberikan pendidikan terbaik dan pelatihan keterampilan bagi seluruh masyarakat di Wonosobo dan sekitarnya.
          </p>
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 items-center  ">
            <Link className="w-full md:w-fit" target="_blank" href={LINK_REDIRECT[0].link}>
              <Button>Hubungi Kami</Button>
            </Link>
            <Link href={'/profil'} className={'w-full md:w-fit'}>
              <ButtonLight addclassName={'hidden md:block'}>Profil PKBMGNUS</ButtonLight>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- == img header ==--> */}
      <div className=" w-fit mt-10 lg:mt-0 " data-aos="zoom-in">
        <div className=" lg:w-[26rem] md:w-full">
          <Image src="/heroo.jpg" width={500} height={500} className="object-cover brightness-110 object-bottom shadow-2xl lg:aspect-[5/4] md:aspect-[2/1] aspect-[4/3]  md:w-[50rem] rounded-2xl md:rounded-3xl  ml-auto" alt="" />
        </div>
      </div>
    </div>
  );
}
