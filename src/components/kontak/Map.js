import React, { Suspense } from 'react';

export default function Map() {
  const Map = React.lazy(() => import('@/components/kontak/Gmap'));

  const loading = <div className="w-full h-80 rounded-2xl bg-primary/40"></div>;
  return (
    <section className="mt-7 pb-20 space-y-5">
      <Suspense fallback={loading}>
        <Map />
      </Suspense>
    </section>
  );
}
