import PaketCard from './PaketCard';

export default function Paket() {
  return (
    <section className="container my-10 md:my-24 ">
      <ul className="bg-primary bg-opacity-10 rounded-lg w-fit flex flex-col justify-around items-start space-y-9 mx-auto  p-14 px-10 md:px-10  md:flex-row md:items-center  md:space-y-0 md:w-full">
        <PaketCard />
      </ul>
    </section>
  );
}
