import KETERAMPILAN_LIST from '@/utils/KETERAMPILAN_LIST';
import Link from 'next/link';
export default function Keterampilancard() {
  return (
    <>
      {KETERAMPILAN_LIST.map((post) => (
        <li key={post.keterampilan}>
          <Link href={`${post.slug}`} className=" group capitalize">
            <div className="bg-white  transition-all shadow-lg rounded-xl p-6 space-y-3 max-w-[18rem] min-w-[16rem] group-hover:scale-105 group-hover:bg-primary ">
              <div className="bg-primary group-hover:bg-white w-14 h-14 p-2 flex items-center text-white  group-hover:text-primary justify-center rounded-lg">{post.svg}</div>
              <p className="font-semibold text-xl group-hover:text-white">{post.keterampilan}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
