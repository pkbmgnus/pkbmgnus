import Keterampilan from '@/components/home/Keterampilan';
import Sertifikat from '@/components/home/Serifikat';
import VisiMisi from '@/components/home/VisiMisi';
import Header from '@/components/profile/Header';
import MetaData from '@/components/metaData/MetaData';

// Metadata
export async function generateMetadata({ params }) {
  try {
    const datas = {
      title: 'Profil',
      desc: 'Pusat Kegiatan Belajar Masyarakat (PKBM) Gelora Nusantara Wonosobo, hadir untuk memberikan kesempatan emas bagi Anda yang ingin mengejar impian dan meraih keberhasilan. Sebagai Pusat Kegiatan Belajar Masyarakat di Wonosobo.',
      url: '/profil',
    };
    return MetaData(datas);
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist',
    };
  }
}
export default function Profil() {
  return (
    <section className="container">
      <Header />
      <VisiMisi />
      <Sertifikat />
      <Keterampilan />
    </section>
  );
}
