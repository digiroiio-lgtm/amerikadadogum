import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika'da Doğum Paketleri | Amerika Doğum Danışmanlık",
  description:
    "Amerika'da doğum yapmak isteyen aileler için profesyonel doğum paketleri, Miami doğum organizasyonu ve vatandaşlık danışmanlığı. Hemen bilgi alın.",
};

const packages = [
  {
    name: "Temel Paket",
    price: "$15,000",
    features: [
      "Hastane rezervasyonu",
      "Doğum öncesi vizit koordinasyonu",
      "Tercüman desteği",
      "Airport transfer",
      "Temel konaklama",
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
      "Lüks konaklama (1 ay)",
      "7/24 danışmanlık",
    ],
    highlighted: true,
  },
  {
    name: "Premium Paket",
    price: "$40,000",
    features: [
      "Standart paket dahil tüm hizmetler",
      "Özel doktor seçimi",
      "Gidiş-dönüş uçak bileti",
      "Lüks konaklama (2 ay)",
      "Araç kiralama",
      "Hukuki danışmanlık",
      "Bebek sağlık sigortası",
    ],
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-gold/20 text-gold text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🇺🇸 Amerika Doğum Danışmanlık
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Amerika&apos;da Doğum Paketleri
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Bebeğinizin Amerikan vatandaşı olarak dünyaya gelmesi için eksiksiz organizasyon ve danışmanlık hizmeti.
          </p>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Miami&apos;nin en iyi hastanelerinde güvenli, konforlu ve profesyonel doğum deneyimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#form"
              className="bg-gold text-navy font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors text-lg"
            >
              Ücretsiz Danışmanlık Al
            </Link>
            <Link
              href="/#paketler"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-navy transition-colors text-lg"
            >
              Paketleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "5+", label: "Yıl Deneyim" },
              { value: "500+", label: "Mutlu Aile" },
              { value: "%100", label: "Güvenilir" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amerika'da Doğum Nedir */}
      <section id="hizmetler" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">
            Amerika&apos;da Doğum Nedir?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Amerika&apos;da doğum turizmi; hamile annelerin doğumlarını gerçekleştirmek üzere Amerika Birleşik Devletleri&apos;ne gitmesi ve bebeklerinin Amerikan vatandaşı olarak doğmasını sağlaması anlamına gelir.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ABD Anayasası&apos;nın 14. maddesi gereğince, Amerikan topraklarında doğan her çocuk otomatik olarak ABD vatandaşı sayılmaktadır. Bu hak doğumla kazanılır ve herhangi bir başvuru gerektirmez.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Biz, bu sürecin her aşamasında — vize başvurusundan hastane seçimine, doğum sonrası belgelere kadar — yanınızdayız.
              </p>
            </div>
            <div className="bg-navy text-white rounded-2xl p-8">
              <h3 className="text-gold font-semibold text-lg mb-4">Neden Amerika&apos;da Doğum?</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "🇺🇸 ABD vatandaşlığı doğumla kazanılır",
                  "🏥 Dünya standartlarında tıbbi hizmet",
                  "🎓 ABD'de ücretsiz eğitim hakkı",
                  "🌍 Güçlü pasaport (186+ ülkeye vizesiz)",
                  "💼 ABD'de çalışma ve yaşam hakkı",
                  "👨‍👩‍👧 21 yaşında ebeveyne green card imkânı",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Amerika'da Doğum Hakkında Bilgi Alın"
        description="Uzman ekibimiz tüm sorularınızı ücretsiz yanıtlıyor."
      />

      {/* Maliyet */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Amerika&apos;da Doğum Maliyeti
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Amerika&apos;da doğum maliyeti birçok faktöre göre değişmektedir. Hastane seçimi, konaklama süresi ve paket içeriğine bağlı olarak fiyatlar farklılık gösterir.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Hastane Doğum Ücreti", range: "$8,000 – $15,000" },
              { label: "Konaklama (1-2 ay)", range: "$3,000 – $8,000" },
              { label: "Organizasyon & Destek", range: "$2,000 – $5,000" },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gold mb-2">{item.range}</div>
                <div className="text-gray-600 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/amerikada-dogum-maliyeti"
              className="text-navy font-semibold hover:text-gold transition-colors underline"
            >
              Detaylı maliyet bilgisi için tıklayın →
            </Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="paketler" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-4 text-center">
            Amerika Doğum Paketleri
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            İhtiyaçlarınıza ve bütçenize uygun doğum paketleri sunuyoruz. Tüm paketlerimiz kapsamlı danışmanlık hizmeti içerir.
          </p>
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
                <h3
                  className={`text-xl font-bold mb-2 ${
                    pkg.highlighted ? "text-gold" : "text-navy"
                  }`}
                >
                  {pkg.name}
                </h3>
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

      {/* Vatandaşlık */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">
            Amerika Doğum Vatandaşlık Hakkı
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Amerika&apos;da doğan her bebek, ABD Anayasası güvencesiyle otomatik olarak Amerikan vatandaşı olur.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Eğitim Hakkı", desc: "ABD'de devlet okullarında ücretsiz eğitim" },
              { icon: "🏥", title: "Sağlık Güvencesi", desc: "Kapsamlı sağlık sigortası ve hizmetleri" },
              { icon: "🌍", title: "Güçlü Pasaport", desc: "186+ ülkeye vizesiz seyahat imkânı" },
              { icon: "💼", title: "Çalışma Hakkı", desc: "ABD'de yasal çalışma ve kariyer imkânı" },
              { icon: "🏠", title: "Yaşam Hakkı", desc: "ABD'de dilediğiniz şehirde yaşayabilme" },
              { icon: "👨‍👩‍👧", title: "Aile Sponsorluğu", desc: "21 yaşında ebeveynlerine green card hakkı" },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/amerika-dogum-vatandaslik" className="text-navy font-semibold hover:text-gold transition-colors underline">
              Vatandaşlık hakkı hakkında daha fazla bilgi →
            </Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* Miami */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">
            Miami&apos;de Doğum Yapmak
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Miami, Amerika&apos;da doğum yapmak isteyen aileler için en çok tercih edilen şehirlerin başında geliyor. Hem uçuş kolaylığı hem de Türk topluluğunun varlığı sebebiyle Miami birinci seçenek haline gelmiştir.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Miami&apos;de dünya standartlarında hastaneler, uzman doktorlar ve modern doğum tesisleri bulunmaktadır. Jackson Memorial Hospital, Baptist Health ve Nicklaus Children&apos;s Hospital en çok tercih edilen kurumlar arasındadır.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "✈️ Türkiye'den direkt uçuş imkânı",
                  "🌴 Güzel iklim ve yaşam kalitesi",
                  "🇹🇷 Büyük Türk topluluğu",
                  "🏥 Dünya standartlarında hastaneler",
                  "🏖️ Konforlu konaklama seçenekleri",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-navy text-white rounded-2xl p-8">
              <h3 className="text-gold font-semibold text-lg mb-4">Miami Hastaneleri</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Jackson Memorial Hospital",
                  "Baptist Health South Florida",
                  "Mount Sinai Medical Center",
                  "Nicklaus Children's Hospital",
                  "Cleveland Clinic Florida",
                ].map((hospital) => (
                  <li key={hospital} className="flex items-center gap-2">
                    <span className="text-gold">🏥</span>
                    {hospital}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Danışmanlık */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">
            Amerika Doğum Danışmanlık Hizmeti
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Vize başvurusundan hastane rezervasyonuna, doğum sonrası belgelere kadar her adımda yanınızdayız.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Danışmanlık", desc: "Ücretsiz ilk görüşme ve süreç planlaması" },
              { step: "2", title: "Vize Desteği", desc: "B2 vize başvurusu ve belge hazırlığı" },
              { step: "3", title: "Organizasyon", desc: "Hastane, konaklama ve transfer ayarları" },
              { step: "4", title: "Doğum & Sonrası", desc: "Doğum sürecinde ve sonrasında tam destek" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gold text-navy font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turizm */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Amerika Doğum Turizmi
          </h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            Doğum turizmi; sağlık hizmetleri, vatandaşlık avantajları ve yaşam kalitesi için tercih edilen bir uygulama. Biz bu yolculuğu güvenli ve konforlu hale getiriyoruz.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Güvenli Süreç",
                desc: "Tüm yasal süreçler ve belgeler eksiksiz hazırlanır.",
              },
              {
                title: "7/24 Destek",
                desc: "Doğum öncesinden sonrasına kadar her an yanınızdayız.",
              },
              {
                title: "Gizlilik",
                desc: "Tüm kişisel bilgileriniz tam gizlilik içinde korunur.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-gold font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Ücretsiz Danışmanlık Talep Edin
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Formu doldurun, uzman danışmanımız en kısa sürede sizinle iletişime geçsin.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
