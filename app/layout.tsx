import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Popup from "@/components/Popup";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amerika'da Doğum Paketleri | Miami Doğum Danışmanlık 2026",
  description:
    "Amerika'da doğum yapmak isteyen aileler için Amerika doğum paketleri, Miami doğum organizasyonu ve vatandaşlık danışmanlığı hizmeti. 2026 güncel bilgi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "GA_MEASUREMENT_ID";
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} font-sans`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Popup />
      </body>
    </html>
  );
}
