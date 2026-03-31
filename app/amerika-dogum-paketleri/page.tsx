import type { Metadata } from "next";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amerika Doğum Paketleri | Amerika'da Doğum Organizasyonu",
  description:
    "Temel, Standart ve Premium Amerika doğum paketleri. Hastane rezervasyonu, konaklama, vize desteği ve doğum sonrası belgelendirme hizmetleri.",
};

const packages = [
  {
    name: "Temel Paket",
    price: "$15,000",
    features: [
      "Hastane rezervasyonu",
      "Doğum öncesi vizit koordinasyonu",
      "Tercüman desteği (Türkçe)",
      "Airport transfer",
      "Temel konaklama (1 ay)",
      "7 gün danışmanlık",
    ],
    highlighted: false,
  },
  {
    name: "Standart Paket",
    price: "$25,000",
    features: [
      "Temel paket dahil tüm hizmetler",
      "VIP hastane odası",
      "Doğum sonrası süreç desteği",
      "SSN ve pasaport başvurusu",
      "Lüks konaklama (1.5 ay)",
      "7/24 danışmanlık hattı",
      "Vize başvurusu desteği",
    ],
    highlighted: true,
  },
  {
    name: "Premium Paket",
    price: "$40,000",
    features: [
      "Standart paket dahil tüm hizmetler",
      "Özel doktor seçimi",
      "Gidiş-dönüş uçak bileti (2 kişi)",
      "Lüks konaklama (2 ay)",
      "Araç kiralama",
      "Hukuki danışmanlık",
      "Bebek sağlık sigortası",
      "VIP concierge hizmet",
    ],
    highlighted: false,
  },
];

export default function PaketlerPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amerika Doğum Paketleri
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            İhtiyaçlarınıza ve bütçenize uygun kapsamlı doğum paketi seçenekleri.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted
                    ? "bg-navy text-white shadow-2xl scale-105"
                    : "bg-white border border-gray-200 shadow-md"
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    EN POPÜLER
                  </div>
                )}
                <h2
                  className={`text-xl font-bold mb-2 ${
                    pkg.highlighted ? "text-gold" : "text-navy"
                  }`}
                >
                  {pkg.name}
                </h2>
                <div
                  className={`text-3xl font-bold mb-6 ${
                    pkg.highlighted ? "text-white" : "text-navy"
                  }`}
                >
                  {pkg.price}
                </div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        pkg.highlighted ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="text-gold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#form"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.highlighted
                      ? "bg-gold text-navy hover:bg-yellow-500"
                      : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  Teklif Al
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
