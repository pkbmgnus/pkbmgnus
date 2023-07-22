import TextHeader from '@/components/elements/TextHeader';
import Keterampilan from '@/components/home/Keterampilan';
import Sertifikat from '@/components/home/Serifikat';
import VisiMisi from '@/components/home/VisiMisi';
import Header from '@/components/profile/Header';

export const metadata = {
  title: `Profil`,
  description: 'Pusat Kegiatan Belajar Masyarakat Gelora Nusantara Wonosobo.',
  openGraph: {
    title: `Profil | PKBM Gelora Nusantara `,
    description: 'Gelora Nusantara, hadir untuk memberikan kesempatan emas bagi Anda yang ingin mengejar impian dan meraih keberhasilan. Sebagai Pusat Kegiatan Belajar Masyarakat di Wonosobo.',
  },
  alternates: {
    canonical: `/profil`,
    languages: {
      'en-US': `/profil`,
      'de-DE': `/profil`,
    },
  },
};
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
