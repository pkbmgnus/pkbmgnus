export default function BtnSosmed({ children, addClass }) {
  return <button className={`bg-secondary h-12 w-12 rounded-full hover:bg-secondary/90 transition-all inline-flex justify-center  items-center text-white text-center ${addClass}`}>{children}</button>;
}
