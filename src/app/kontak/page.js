import Map from '@/components/kontak/Map';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';
import Image from 'next/image';
import Link from 'next/link';
import MetaData from '@/components/metaData/MetaData';

// Metadata
export async function generateMetadata({ params }) {
  try {
    const datas = {
      title: 'Kontak  ',
      desc: 'Kontak, Alamat , Pusat Kegiatan Belajar Masyarakat (PKBM) Gelora Nusantara Wonosobo.',
      url: '/kontak',
    };
    return MetaData(datas);
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}

export default function Kontak() {
  return (
    <div className="container mt-28 md:mt-36  space-y-3 md:space-y-5 pb-6">
      <h1 className=" font-bold text-3xl md:text-4xl lg:text-3xl lg:text-center pt-5">Kontak</h1>
      <ul className=" pb-24 rounded-lg w-fit flex flex-col justify-around items-start space-y-9 lg:mx-auto  p-14 px-0 md:px-0  md:flex-row md:items-center  md:space-y-0 md:w-full">
        <li>
          <Link href={LINK_REDIRECT[1].link} target="_blank" className=" flex flex-row items-center justify-between w-fit space-x-4">
            <div className={`h-14 w-14 bg-primary text-white font-bold text-4xl md:text-3xl lg-text-4xl rounded-xl flex items-center justify-center`}>
              <Image src={LINK_REDIRECT[1].svg} width={100} height={100} alt={LINK_REDIRECT[1].instagram} className="w-9 lg:w-8" />
            </div>
            <div>
              <h6 className=" text-primary  font-bold text-2xl md:text-xl lg:text-xl uppercase">{LINK_REDIRECT[1].instagram}</h6>
              <span className="uppercase text-sm md:text-xs font-medium lg:text-sm text-blue italic hover:underline">@{LINK_REDIRECT[1].profil}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={LINK_REDIRECT[0].link} target="_blank" className=" flex flex-row items-center justify-between w-fit space-x-4">
            <div className={`h-14 w-14 bg-primary text-white font-bold text-4xl md:text-3xl lg-text-4xl rounded-xl flex items-center justify-center`}>
              <Image src={LINK_REDIRECT[0].svg} width={100} height={100} alt={LINK_REDIRECT[0].whatsapp} className="w-9 lg:w-8" />
            </div>
            <div>
              <h6 className=" text-primary  font-bold text-2xl md:text-xl lg:text-xl uppercase">{LINK_REDIRECT[0].whatsapp}</h6>
              <span className="uppercase text-sm md:text-xs font-medium lg:text-sm text-blue italic hover:underline">{LINK_REDIRECT[0].number}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href={LINK_REDIRECT[2].link} target="_blank" className=" flex flex-row items-center justify-between w-fit space-x-4">
            <div className={`h-14 w-14 bg-primary text-white font-bold text-4xl md:text-3xl lg-text-4xl rounded-xl flex items-center justify-center`}>
              <Image src={LINK_REDIRECT[2].svg} width={100} height={100} alt={LINK_REDIRECT[2].tel} className="w-9 lg:w-8" />
            </div>
            <div>
              <h6 className=" text-primary  font-bold text-2xl md:text-xl lg:text-xl uppercase">{LINK_REDIRECT[2].tel}</h6>
              <span className="uppercase text-sm md:text-xs font-medium lg:text-sm text-blue italic hover:underline">{LINK_REDIRECT[2].number}</span>
            </div>
          </Link>
        </li>
      </ul>
      <h2 className="font-bold text-2xl md:text-4xl lg:text-3xl">Alamat</h2>
      <p className="text-base md:text-base ">Jl. Raya Parakan - Wonosobo No.37, Gondang, Candimulyo, Kec. Kertek, Kabupaten Wonosobo, Jawa Tengah 56371</p>
      <Map />
    </div>
  );
}
