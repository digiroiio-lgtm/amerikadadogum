import type { Metadata } from "next";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Miami'de Doğum Yapmak | Amerika Doğum Paketleri",
  description:
    "Miami'de doğum yapmak: en iyi Miami hastaneleri, maliyetler, avantajlar ve organizasyon hizmetleri hakkında kapsamlı rehber.",
};

const hospitals = [
  {
    name: "Jackson Memorial Hospital",
    desc: "Miami'nin en köklü devlet hastanesi. Geniş kadın doğum ve neonatoloji bölümü.",
  },
  {
    name: "Baptist Health South Florida",
    desc: "Bölgenin en büyük özel sağlık kuruluşu. Modern doğum odaları ve uzman kadro.",
  },
  {
    name: "Mount Sinai Medical Center",
    desc: "Miami Beach'in prestijli özel hastanesi. VIP doğum paketleri sunuyor.",
  },
  {
    name: "Nicklaus Children's Hospital",
    desc: "Florida'nın en iyi pediatri ve yenidoğan yoğun bakım merkezi.",
  },
  {
    name: "Cleveland Clinic Florida",
    desc: "Dünyaca ünlü Cleveland Clinic'in Florida şubesi. Uluslararası hastalara özel servis.",
  },
];

export default function MiamideDogumPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Miami&apos;de Doğum Yapmak
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Amerika&apos;da doğum için en çok tercih edilen şehir Miami&apos;de doğum paketleri ve hastane seçenekleri.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Neden Miami&apos;de Doğum?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Miami, Türkiye&apos;den gelen aileler için Amerika&apos;da doğum yapılacak en ideal şehir olmayı sürdürmektedir. İstanbul&apos;dan direkt uçuş seçenekleri, büyük Türk topluluğu ve tropikal iklimi ile Miami hem pratik hem de konforlu bir ortam sunar.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "✈️ İstanbul - Miami direkt uçuş (yaklaşık 13 saat)",
              "🇹🇷 Büyük ve aktif Türk topluluğu",
              "🌴 Sıcak ve güneşli tropikal iklim",
              "🏥 Dünya standartlarında hastaneler",
              "🏖️ Güzel plajlar ve konforlu yaşam",
              "🛍️ Alışveriş ve eğlence olanakları",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy mb-6">Miami&apos;de Önerilen Hastaneler</h2>
          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <div key={hospital.name} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy mb-1">🏥 {hospital.name}</h3>
                <p className="text-gray-600 text-sm">{hospital.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Miami'de Doğum Paketi Alın" description="Miami'deki en iyi hastanelerde doğum için hemen iletişime geçin." />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
