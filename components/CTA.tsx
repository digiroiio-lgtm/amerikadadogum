import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
}

export default function CTA({
  title = "Amerika'da Doğum İçin Hemen Danışın",
  description = "Uzman ekibimiz tüm sorularınızı yanıtlamak ve size özel paket oluşturmak için hazır.",
  primaryText = "Ücretsiz Danışmanlık Al",
  secondaryText = "Doğum Paketi Teklifi Al",
}: CTAProps) {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 mb-8 text-lg">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#form"
            className="bg-gold text-navy font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors text-center"
          >
            {primaryText}
          </Link>
          <Link
            href="/#paketler"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors text-center"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
