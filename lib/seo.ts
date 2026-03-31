import type { Metadata } from "next";

const SITE_NAME = "Amerika Doğum Paketleri";
const SITE_URL = "https://www.amerikadogumpaketleri.com";

const DEFAULT_TITLE = "Amerika'da Doğum Paketleri | Amerika Doğum Danışmanlık";
const DEFAULT_DESCRIPTION =
  "Amerika'da doğum yapmak isteyen aileler için Amerika doğum paketleri, Miami doğum organizasyonu ve vatandaşlık danışmanlığı hizmeti.";

const KEYWORDS = [
  "amerikada dogum",
  "amerikada doğum",
  "amerika doğum paketleri",
  "miami doğum",
  "amerikada doğum maliyeti",
  "amerikan vatandaşlığı",
  "doğum turizmi",
  "miami doğum organizasyonu",
  "amerikada doğum vizesi",
  "doğum paketi",
  "amerikada hastane doğumu",
  "bebek doğum Amerika",
];

export function generateMetadata(
  title?: string,
  description?: string
): Metadata {
  const metaTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: KEYWORDS,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}
