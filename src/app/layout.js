import './globals.css';
import Navbar from '@/components/elements/Navbar/index';
import NavMobileListMenu from './../components/elements/Navbar/NavMobileListMenu';
import Footer from './../components/elements/Footer/Index';
import { base_URL } from '@/utils';
import TopLoader from '@/components/TopLoader';

export const metadata = {
  metadataBase: new URL(base_URL),
  title: {
    default: 'PKBM Gelora Nusantara Wonosobo',
    template: '%s | PKBM Gelora Nusantara Wonosobo',
  },
  description: 'Pusat Kegiatan Belajar Masyarakat (PKBM) Gelora Nusantara Wonosobo.',
  openGraph: {
    title: 'PKBM Gelora Nusantara Wonosobo',
    description: 'Pusat Kegiatan Belajar Masyarakat (PKBM) Gelora Nusantara Wonosobo.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <TopLoader />
        <NavMobileListMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
