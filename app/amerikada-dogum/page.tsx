import type { Metadata } from "next";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Amerika'da Doğum | Amerika Doğum Paketleri",
  description:
    "Amerika'da doğum yapmak hakkında kapsamlı rehber. ABD'de doğum süreci, maliyetler, vatandaşlık hakkı ve danışmanlık hizmetleri.",
};

const faqs = [
  {
    q: "Amerika'da doğum yasal mı?",
    a: "Evet, Amerika'da doğum tamamen yasal bir uygulamadır. B2 (turist) vizesiyle Amerika'ya gidip doğum yapabilirsiniz. ABD Anayasası'nın 14. maddesi, Amerikan topraklarında doğan her çocuğa vatandaşlık hakkı tanımaktadır.",
  },
  {
    q: "Amerika'da doğum için hangi vize gerekli?",
    a: "Çoğu durumda B2 (turist/tıbbi) vizesi yeterlidir. Vize başvurusunda hamileliği gizlemenize gerek yoktur; ancak finansal gücünüzü belgeleyen evrakları hazır bulundurmanız önerilir.",
  },
  {
    q: "Amerika'da doğum ne kadar sürer?",
    a: "Genellikle doğumdan 6-8 hafta önce Amerika'ya gitmeniz önerilir. Doğum sonrasında bebek pasaportu ve diğer belgelerin tamamlanması için 4-6 hafta daha kalmanız gerekebilir. Toplam süre 3-4 aydır.",
  },
  {
    q: "Amerika'da doğumun toplam maliyeti ne kadar?",
    a: "Amerika'da doğum maliyeti paket içeriğine göre değişmekte olup genellikle $15,000 ile $40,000 arasındadır. Bu maliyet; hastane, konaklama, organizasyon ve danışmanlık hizmetlerini kapsar.",
  },
  {
    q: "Doğum sonrası bebek için hangi belgeler çıkar?",
    a: "Amerika'da doğan bebek için ABD nüfus cüzdanı (birth certificate), ABD pasaportu ve Sosyal Güvenlik Numarası (SSN) çıkarılır. Bu belgeler bebeğin Amerikan vatandaşı olduğunu resmi olarak kanıtlar.",
  },
];

export default function AmeriakadaDogumPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        name: "Amerika Doğum Paketleri",
        description:
          "Amerika'da doğum danışmanlık ve organizasyon hizmetleri",
        url: "https://www.amerikadogumpaketleri.com",
        telephone: "+90XXXXXXXXXX",
        address: {
          "@type": "PostalAddress",
          addressCountry: "TR",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
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
            Amerika&apos;da Doğum Yapmak
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bebeğinizin Amerikan vatandaşı olarak dünyaya gelmesi için bilmeniz gereken her şey.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">Amerika&apos;da Doğum Nasıl Yapılır?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Amerika&apos;da doğum yapmak, doğum öncesinde vize alınması, Amerika&apos;ya seyahat edilmesi, doğumun gerçekleştirilmesi ve doğum sonrası belgelerin hazırlanması aşamalarından oluşur.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ABD Anayasası&apos;nın 14. maddesi gereğince, Amerikan topraklarında doğan her çocuk otomatik olarak ABD vatandaşı olmaktadır. Bu vatandaşlık hakkı, ebeveynlerin uyruğuna veya göç statüsüne bakılmaksızın geçerlidir.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Profesyonel danışmanlık hizmetimiz sayesinde bu süreç başından sonuna kadar sorunsuz yönetilmektedir.
          </p>
        </div>
      </section>

      <CTA title="Amerika'da Doğum Danışmanlığı" description="Süreci eksiksiz yönetmek için hemen iletişime geçin." />

      {/* FAQs */}
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
