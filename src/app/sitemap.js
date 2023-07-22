import { base_URL } from '@/utils';
import KETERAMPILAN_LIST from '@/utils/KETERAMPILAN_LIST';
import PAKET_LIST from '@/utils/PAKET_LIST';

export default async function sitemap() {
  const baseUrl = base_URL;

  try {
    // Paket
    const listPaket = PAKET_LIST.map((paket) => ({
      url: `${baseUrl}${paket.slug}`,
      lastModified: new Date(),
    }));

    // Paket
    const listKeterampilan = KETERAMPILAN_LIST.map((keterampilan) => ({
      url: `${baseUrl}${keterampilan.slug}`,
      lastModified: new Date(),
    }));

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/profil`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/kontak`,
        lastModified: new Date(),
      },
      ...listPaket,
      ...listKeterampilan,
    ];
  } catch (error) {
    console.error(error.code);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/profil`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/kontak`,
        lastModified: new Date(),
      },
    ];
  }
}
