import { base_URL } from "@/utils/index.js";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/utils/*",
    },
    sitemap: `${base_URL}/sitemap.xml`,
  };
}
