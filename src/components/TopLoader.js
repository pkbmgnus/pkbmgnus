import NextTopLoader from 'nextjs-toploader';

export default function TopLoader() {
  return <NextTopLoader color={`#10b981`} initialPosition={0.2} crawlSpeed={100} height={3.5} crawl={true} showSpinner={false} easing="ease" speed={300} shadow="0 0 50px #2299DD,0 0 5px #2299DD" />;
}
