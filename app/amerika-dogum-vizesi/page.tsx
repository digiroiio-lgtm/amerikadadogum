import type { Metadata } from "next";
import CTA from "@/components/CTA";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Amerika Doğum Vizesi | B2 Vize Başvurusu",
  description:
    "Amerika'da doğum için B2 vize başvurusu, gerekli belgeler ve süreç hakkında kapsamlı rehber.",
};

export default function VizePage() {
  return (
    <>
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Amerika Doğum Vizesi
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            B2 turist/tıbbi vizesiyle Amerika&apos;da doğum yapabilirsiniz. Vize süreci ve gerekli belgeler hakkında bilmeniz gerekenler.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">B2 Vize ile Amerika&apos;da Doğum</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Amerika&apos;da doğum yapmak için B-2 (Turist / Tıbbi) vizesi yeterlidir. Bu vize, tıbbi tedavi veya kişisel ziyaret amacıyla ABD&apos;ye girişe izin verir. Doğum turizmi bu kapsam dahilindedir.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Vize başvurusu esnasında hamile olduğunuzu gizlemenize gerek yoktur. Ancak doğum amacıyla gittiğinizi belirterek tüm finansal gücünüzü belgeleyen evraklarınızı eksiksiz hazırlamanız büyük önem taşır.
          </p>

          <h3 className="text-xl font-bold text-navy mb-4">Gerekli Belgeler</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Geçerli Türk pasaportu",
              "Doldurulmuş DS-160 formu",
              "Banka hesap dökümleri (mali yeterlilik)",
              "Hastane rezervasyon belgesi",
              "Doktor onayı ve hamilelik belgesi",
              "Nüfus cüzdanı ve aile cüzdanı",
              "Çalışıyorsanız maaş belgesi",
              "Konaklama rezervasyonu",
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-gold">✓</span>
                {doc}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-navy mb-4">Vize Başvuru Süreci</h3>
          <div className="space-y-4">
            {[
              { step: "1", title: "DS-160 Başvuru Formu", desc: "Online olarak doldurulur ve onaylanır." },
              { step: "2", title: "Vize Ücreti Ödeme", desc: "Belirlenen vize harcı ödenir." },
              { step: "3", title: "Randevu", desc: "ABD Büyükelçiliği veya Konsolosluğu'ndan randevu alınır." },
              { step: "4", title: "Mülakat", desc: "Belgelerin eksiksiz hazırlanmasıyla mülakat gerçekleştirilir." },
              { step: "5", title: "Pasaport Teslimi", desc: "Vize onayı sonrasında pasaportunuz iade edilir." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-gold text-navy font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-navy">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Vize Başvurusu için Destek Alın" description="Vize belgelerinizi eksiksiz hazırlamanıza yardımcı oluyoruz." />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
