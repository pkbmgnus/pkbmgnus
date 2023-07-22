import Banner from '@/components/home/Banner';
import Header from '@/components/home/Header';
import KeterampilanCardImg from '@/components/home/Keterampilan/KeterampilanCardImg';
import BannerPaket from '@/components/home/Paket/BannerPaket';
import SyaratMendaftar from '@/components/home/SyaratMendaftar';
export default function Home() {
  return (
    <main>
      <Header />
      <BannerPaket bg={'bg-primary/10 !text-primary'} />
      <KeterampilanCardImg />
      <SyaratMendaftar />
      <Banner />
    </main>
  );
}
