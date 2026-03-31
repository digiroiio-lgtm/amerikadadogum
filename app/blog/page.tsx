import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amerika Doğum Blogu | Amerika Doğum Paketleri",
  description:
    "Amerika'da doğum, Miami doğum paketleri, vize süreci ve vatandaşlık hakkı hakkında kapsamlı blog yazıları.",
};

const posts = [
  {
    title: "Amerika'da Doğum Maliyeti 2026",
    excerpt:
      "2026 yılında Amerika'da doğum yapmanın toplam maliyeti, hastane ücretleri, konaklama ve organizasyon giderlerinin detaylı analizi.",
    href: "/blog/amerikada-dogum-maliyeti-2026",
    date: "1 Ocak 2026",
    readTime: "8 dk okuma",
    tag: "Maliyet",
  },
  {
    title: "Amerika'da Doğum Yapmak Rehberi",
    excerpt:
      "Vize başvurusundan hastane seçimine, doğum gününden belge çıkarımına kadar Amerika'da doğum sürecinin adım adım rehberi.",
    href: "/blog/amerikada-dogum-yapmak-rehberi",
    date: "15 Ocak 2026",
    readTime: "12 dk okuma",
    tag: "Rehber",
  },
  {
    title: "Miami'de Doğum Yapmak",
    excerpt:
      "Amerika'da doğum için en çok tercih edilen şehir Miami'deki hastaneler, konaklama seçenekleri ve yaşam kalitesi hakkında kapsamlı bilgi.",
    href: "/blog/miamide-dogum-yapmak",
    date: "20 Ocak 2026",
    readTime: "6 dk okuma",
    tag: "Miami",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amerika Doğum Blogu
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Amerika&apos;da doğum hakkında kapsamlı rehberler, güncel bilgiler ve uzman tavsiyeleri.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.href}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-navy h-3" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gold/20 text-gold text-xs font-semibold px-2 py-1 rounded">
                      {post.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <Link
                      href={post.href}
                      className="text-navy font-semibold text-sm hover:text-gold transition-colors"
                    >
                      Devamını oku →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
