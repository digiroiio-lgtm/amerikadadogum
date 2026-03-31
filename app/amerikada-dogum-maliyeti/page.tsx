import type { Metadata } from "next";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Amerika'da Doğum Maliyeti 2026 | Amerika Doğum Paketleri",
  description:
    "2026 yılı Amerika'da doğum maliyeti: hastane ücretleri, konaklama, vize ve organizasyon giderleri hakkında detaylı rehber.",
};

const costs = [
  { item: "Hastane Doğum Paketi", low: "$8,000", high: "$15,000" },
  { item: "Doktor Ücreti", low: "$2,000", high: "$5,000" },
  { item: "Konaklama (1-2 ay)", low: "$3,000", high: "$8,000" },
  { item: "Uçak Bileti (Gidiş-Dönüş)", low: "$1,500", high: "$3,500" },
  { item: "Vize & Belge Hazırlığı", low: "$500", high: "$1,500" },
  { item: "Organizasyon & Danışmanlık", low: "$2,000", high: "$5,000" },
  { item: "Araç Kiralama / Ulaşım", low: "$800", high: "$2,000" },
];

const faqs = [
  {
    q: "Amerika'da doğum ne kadar tutar?",
    a: "Amerika'da doğum maliyeti paket içeriğine göre $15,000 ile $40,000 arasında değişmektedir. Temel paketler $15,000'dan başlarken premium paketler $40,000'a kadar çıkabilmektedir.",
  },
  {
    q: "Amerika'da doğum sigortası karşılar mı?",
    a: "Türkiye'deki sağlık sigortanız veya SGK, Amerika'da doğum masraflarını karşılamaz. Seyahat sağlık sigortası satın almanız önerilir; ancak doğum masrafları genellikle kapsam dışı kalır.",
  },
  {
    q: "Ödeme planı var mı?",
    a: "Evet, bazı paketlerimizde taksitli ödeme imkânı sunuyoruz. Detaylar için danışmanlarımızla iletişime geçebilirsiniz.",
  },
];

export default function MaliyetPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amerika&apos;da Doğum Maliyeti 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hastane, konaklama, vize ve organizasyon giderleri dahil kapsamlı maliyet rehberi.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8">Maliyet Kalemleri</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-3 rounded-tl-lg">Hizmet</th>
                  <th className="text-center px-6 py-3">Minimum</th>
                  <th className="text-center px-6 py-3 rounded-tr-lg">Maksimum</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-3 text-gray-700">{row.item}</td>
                    <td className="px-6 py-3 text-center text-green-600 font-semibold">{row.low}</td>
                    <td className="px-6 py-3 text-center text-navy font-semibold">{row.high}</td>
                  </tr>
                ))}
                <tr className="bg-gold/20">
                  <td className="px-6 py-4 font-bold text-navy">TOPLAM TAHMİN</td>
                  <td className="px-6 py-4 text-center font-bold text-navy">$17,800</td>
                  <td className="px-6 py-4 text-center font-bold text-navy">$40,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">* Fiyatlar tahmini olup değişiklik gösterebilir.</p>
        </div>
      </section>

      <CTA title="Kişisel Fiyat Teklifi Alın" description="Size özel paket fiyatı için hemen danışın." />

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
