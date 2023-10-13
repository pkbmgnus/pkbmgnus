import { base_URL } from '@/utils';

export default function MetaData(datas) {
  return {
    title: datas?.title,
    description: datas?.desc,
    openGraph: {
      title: `${datas?.title} | PKBM Gelora Nusantara Wonosobo`,
      description: datas?.desc,
      url: `${base_URL}/${datas?.url}`,
      siteName: 'PKBM Gelora Nusantara Wonosobo',
      images: [
        {
          url: datas.img ? datas.img : '../../../opengraph-image.jpg',
          width: 800,
          height: 600,
        },
        {
          url: datas.img ? datas.img : '../../../opengraph-image.jpg',
          width: 1800,
          height: 1600,
          alt: 'PKBM Gelora Nusantara Wonosobo',
        },
      ],
      locale: 'id_ID',
      type: 'website',
      robots: {
        index: true,
        follow: true,
        nocache: true,
      },
    },
  };
}
