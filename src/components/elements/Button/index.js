export default function Button({ children, addClass }) {
  return (
    <button
      className={`bg-primary w-full md:w-fit  border-primary border-2 px-14 capitalize py-3 rounded-full hover:bg-primary/90 transition-all inline-flex justify-center  items-center text-white text-center font-semibold text-sm -tracking-tighter ${addClass}`}
    >
      {children}
    </button>
  );
}

export function ButtonLight({ children, addClass }) {
  return (
    <button
      className={`bg-none  border-secondary w-full md:w-fit border-2 px-14 capitalize py-3 rounded-full hover:bg-secondary/90 transition-all inline-flex justify-center  items-center text-secondary hover:text-white text-center font-semibold text-sm -tracking-tighter ${addClass}`}
    >
      {children}
    </button>
  );
}
