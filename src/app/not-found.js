import Button from '@/components/elements/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="h-[90vh] md:h-screen  w-full flex justify-center items-center  bg-cover ">
      <div className="flex flex-col md:flex-row justify-center items-center w-full text-center md:text-left">
        <p className="md:hidden block text-xl mb-5">Oopss</p>
        <h1 className="text-6xl mb-5 md:mb-0  md:text-8xl font-medium ">404</h1>
        <div className="h-12 w-0.5 bg-gray-500 mx-14 hidden md:block "></div>
        <div>
          <h5 className="text-xl font-semibold  ">PKBMGNUS</h5>
          <p className=" text-xl md:text-2xl w-[15rem] my-3 md:my-4 font-light">Halaman tidak tersedia!</p>
          <Link href={'/'}>
            <Button bg={' bg-gray-950 dark:bg-white  dark:hover:bg-gray-200 dark:text-gray-950 '} addClass={' text-white text-sm !py-3'}>
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
