import Link from "next/link";

const footerLinks = [
  { label: "Amerika'da doğum", href: "/amerikada-dogum" },
  { label: "Amerika doğum paketleri", href: "/amerika-dogum-paketleri" },
  { label: "Amerika doğum maliyeti", href: "/amerikada-dogum-maliyeti" },
  { label: "Amerika doğum vatandaşlık", href: "/amerika-dogum-vatandaslik" },
  { label: "Amerika doğum vizesi", href: "/amerika-dogum-vizesi" },
  { label: "Miami'de doğum yapmak", href: "/miamide-dogum-yapmak" },
  { label: "Amerika doğum danışmanlık", href: "/amerikada-dogum" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-white font-bold text-xl">Amerika</span>
              <span className="text-gold font-bold text-xl">Doğum</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Amerika&apos;da doğum yapmak isteyen aileler için profesyonel danışmanlık ve organizasyon hizmetleri.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">İletişim</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 +90 XXX XXX XX XX</p>
              <p>📧 info@amerikadogumpaketleri.com</p>
              <p>🌐 www.amerikadogumpaketleri.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2026 Amerika Doğum Paketleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
