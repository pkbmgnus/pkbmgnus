import './globals.css';
import Navbar from '@/components/elements/Navbar/index';
import NavMobileListMenu from './../components/elements/Navbar/NavMobileListMenu';
import Footer from './../components/elements/Footer/Index';
import { base_URL } from '@/utils';

export const metadata = {
  metadataBase: new URL(base_URL),
  title: {
    default: 'PKBM Gelora Nusantara',
    template: '%s | PKBM Gelora Nusantara',
  },
  description: 'Pusat Kegiatan Belajar Masyarakat Gelora Nusantara Wonosobo.',
  openGraph: {
    title: 'PKBM Gelora Nusantara',
    description: 'Pusat Kegiatan Belajar Masyarakat Gelora Nusantara Wonosobo.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <NavMobileListMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
