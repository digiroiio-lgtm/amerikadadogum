"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/#hizmetler" },
  { label: "Paketler", href: "/#paketler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/#form" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-white font-bold text-xl">Amerika</span>
            <span className="text-gold font-bold text-xl">Doğum</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#form"
              className="bg-gold text-navy font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm"
            >
              Danışmanlık Al
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-gold transition-colors py-2 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#form"
                className="bg-gold text-navy font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Danışmanlık Al
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
