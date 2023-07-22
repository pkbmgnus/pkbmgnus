import Button from '@/components/elements/Button';
import TextHeader from '@/components/elements/TextHeader';
import BannerPaket from '@/components/home/Paket/BannerPaket';
import LINK_REDIRECT from '@/utils/LINK_REDIRECT';
import PAKET_LIST from '@/utils/PAKET_LIST';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Metadata
export async function generateMetadata({ params }) {
  // read route params
  const [paket] = params.slug;

  const filteredPaketList = PAKET_LIST.filter((item) => item.paket === paket.toUpperCase());

  if (filteredPaketList.length === 0) {
    return notFound();
  }

  // Since we used filter, filteredPaketList could still be an array, so we need to access the first element
  const paketItem = filteredPaketList[0];

  // fetch data
  try {
    return {
      title: paketItem.title,
      description: [paketItem.descLong[0], paketItem.descLong[1]],
      openGraph: {
        title: `${paketItem.title} | PKBM Gelora Nusantara`,
        description: [paketItem.descLong[0], paketItem.descLong[1]],
      },
      alternates: {
        canonical: `${paketItem.slug}`,
        languages: {
          'en-US': `${paketItem.slug}`,
          'de-DE': `${paketItem.slug}`,
        },
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not axist',
    };
  }
}

export default function Paket({ params }) {
  // read route params
  const [paket] = params.slug;

  const filteredPaketList = PAKET_LIST.filter((item) => item.paket === paket.toUpperCase());

  if (filteredPaketList.length === 0) {
    return notFound();
  }

  // Since we used filter, filteredPaketList could still be an array, so we need to access the first element
  const paketItem = filteredPaketList[0];

  return (
    <>
      <article className="container space-y-6">
        <TextHeader title={paketItem.title} desc={[paketItem.descLong[0], paketItem.descLong[1]]} />
        <Link className="w-full md:w-fit" target="_blank" href={LINK_REDIRECT[0].link}>
          <Button>Daftar Sekarang</Button>
        </Link>
      </article>
      <BannerPaket />
    </>
  );
}
