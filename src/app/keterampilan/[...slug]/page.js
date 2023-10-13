import Button from '@/components/elements/Button';
import TextHeader from '@/components/elements/TextHeader';
import CardKeterampilan from '@/components/home/Keterampilan/KeterampilanCardImg';
import KETERAMPILAN_LIST from '@/utils/KETERAMPILAN_LIST';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MetaData from '@/components/metaData/MetaData';

// Metadata
export async function generateMetadata({ params }) {
  const [keterampilan] = params.slug;

  try {
    const filteredketerampilanList = KETERAMPILAN_LIST.filter((item) => item.slug === `/keterampilan/${keterampilan}`);

    //   Since we used filter, filteredketerampilanList could still be an array, so we need to access the first element
    const keterampilanItem = filteredketerampilanList[0];
    const datas = {
      title: `${keterampilanItem.keterampilan}`,
      desc: [keterampilanItem.desc],
      url: `/keterampilan/${keterampilanItem.keterampilan}`,
      img: keterampilanItem.img,
    };
    return MetaData(datas);
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}

export default function Keterampilan({ params }) {
  // read route params
  const [keterampilan] = params.slug;

  const filteredketerampilanList = KETERAMPILAN_LIST.filter((item) => item.slug === `/keterampilan/${keterampilan}`);

  if (filteredketerampilanList.length === 0) {
    return notFound();
  }

  //   Since we used filter, filteredketerampilanList could still be an array, so we need to access the first element
  const keterampilanItem = filteredketerampilanList[0];

  return (
    <>
      <article className="container space-y-6 mt-32">
        <div
          style={{
            backgroundImage: `url(${keterampilanItem.img})`,
          }}
          className={`w-full bg-cover bg-center h-[14rem] md:h-[19rem] lg:h-[14rem] rounded-xl  md:rounded-se-full  md:rounded-ee-full`}
        >
          <div className="h-full w-full text-white font-bold text-5xl rounded-xl   md:rounded-se-full  md:rounded-ee-full   flex flex-col items-center justify-center bg-darkPrimary/20 md:bg-darkPrimary/50  ">
            <h1 className={'hidden md:block text-center'}>{keterampilanItem.keterampilan}</h1>
          </div>
        </div>
        <h1 className="font-bold text-2xl md:text-4xl pt-4 block md:hidden">{keterampilanItem.keterampilan}</h1>
        <TextHeader desc={keterampilanItem.desc} />
        <Link className={'w-full md:w-fit'} target="_blank" href={LINK_REDIRECT[0].link}>
          <Button>Daftar Sekarang</Button>
        </Link>
      </article>
      <CardKeterampilan />
    </>
  );
}
