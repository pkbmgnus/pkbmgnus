import Link from 'next/link';
import PAKET_LIST from '../../../utils/PAKET_LIST';

export default function PaketCard() {
  return (
    <>
      {PAKET_LIST.map((post) => (
        <li key={post.title}>
          <Link href={post.slug} className=" flex flex-row items-center justify-between w-fit space-x-4">
            <div className={`${post.color} h-16 w-16 bg-white font-bold text-4xl md:text-3xl lg-text-4xl rounded-lg flex items-center justify-center`}>{post.paket}</div>
            <div>
              <h6 className=" text-primary  font-bold text-2xl md:text-xl lg:text-2xl uppercase">{post.title}</h6>
              <span className="uppercase text-sm md:text-xs font-medium lg:text-sm">{post.descShort}</span>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
