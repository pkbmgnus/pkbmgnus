export default function TextHeader({ title, desc }) {
  return (
    <section className="mt-28 md:mt-36  space-y-3 md:space-y-5 pb-6">
      <h1 className="font-bold text-3xl md:text-4xl">{title}</h1>
      <p className="text-base md:text-lg lg:text-base ">{desc[0]}</p>
      <p className="text-base md:text-lg lg:text-base ">{desc[1]}</p>
    </section>
  );
}
