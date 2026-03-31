import type { Metadata } from "next";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Amerika Doğum Vatandaşlık Hakkı | Amerika Doğum Paketleri",
  description:
    "Amerika'da doğum yoluyla kazanılan ABD vatandaşlığı hakları, süreci ve avantajları hakkında kapsamlı rehber.",
};

export default function VatandaslikPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amerika Doğum Vatandaşlık Hakkı
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ABD Anayasası&apos;nın 14. maddesiyle güvence altında olan doğumla vatandaşlık hakkı ve avantajları.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Doğumla Vatandaşlık Nedir?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ABD Anayasası&apos;nın 14. maddesi, &quot;Amerika Birleşik Devletleri&apos;nde doğan veya vatandaşlığa kabul edilen tüm kişiler ABD vatandaşıdır&quot; der. Bu ilke, Jus Soli (toprak hakkı) olarak bilinir ve ebeveynlerin uyruğundan bağımsız olarak uygulanır.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Amerika&apos;da doğan bebeğiniz, doğumun hemen ardından ABD vatandaşı sayılır. Herhangi bir başvuru veya onay sürecine gerek yoktur; vatandaşlık doğumla kendiliğinden kazanılır.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {[
              {
                icon: "🎓",
                title: "Eğitim Hakkı",
                desc: "ABD'deki devlet okullarında K-12 eğitimi ücretsizdir. Üniversitede ise yerli öğrenci statüsünde burs ve kredi imkânları mevcuttur.",
              },
              {
                icon: "💼",
                title: "Çalışma Hakkı",
                desc: "ABD vatandaşı olarak herhangi bir çalışma iznine veya vizesine ihtiyaç duymadan tüm Amerika'da yasal olarak çalışabilirsiniz.",
              },
              {
                icon: "🌍",
                title: "Seyahat Kolaylığı",
                desc: "ABD pasaportu ile 186'dan fazla ülkeye vizesiz veya kapıda vize ile giriş yapabilirsiniz.",
              },
              {
                icon: "🏥",
                title: "Sağlık Güvencesi",
                desc: "Medicare, Medicaid ve diğer federal sağlık programlarından yararlanma hakkı.",
              },
              {
                icon: "🗳️",
                title: "Oy Kullanma Hakkı",
                desc: "18 yaşından itibaren federal, eyalet ve yerel seçimlerde oy kullanma hakkı.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Aile Sponsorluğu",
                desc: "21 yaşına gelen Amerikan vatandaşı çocuğunuz, ebeveynlerine green card (daimi oturma izni) başvurusunda bulunabilir.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Vatandaşlık Süreci Hakkında Bilgi Alın" />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
