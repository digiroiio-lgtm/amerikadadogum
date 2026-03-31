"use client";

import { useState } from "react";

interface FormData {
  adSoyad: string;
  telefon: string;
  whatsapp: string;
  dogumTarihi: string;
  mesaj: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    adSoyad: "",
    telefon: "",
    whatsapp: "",
    dogumTarihi: "",
    mesaj: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="form" className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-navy mb-2">Ücretsiz Danışmanlık Talep Et</h2>
      <p className="text-gray-600 mb-6">Uzmanlarımız en kısa sürede sizinle iletişime geçecektir.</p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">✅</div>
          <p className="text-green-700 font-semibold text-lg">
            Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ad Soyad *
            </label>
            <input
              type="text"
              name="adSoyad"
              required
              value={formData.adSoyad}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:border-transparent"
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon *
              </label>
              <input
                type="tel"
                name="telefon"
                required
                value={formData.telefon}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:border-transparent"
                placeholder="+90 XXX XXX XX XX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:border-transparent"
                placeholder="+90 XXX XXX XX XX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tahmini Doğum Tarihi
            </label>
            <input
              type="date"
              name="dogumTarihi"
              value={formData.dogumTarihi}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mesaj
            </label>
            <textarea
              name="mesaj"
              rows={4}
              value={formData.mesaj}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4A843] focus:border-transparent resize-none"
              placeholder="Sorularınızı veya notlarınızı buraya yazabilirsiniz..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold text-navy font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-lg"
          >
            Ücretsiz Danışmanlık Talep Et
          </button>
        </form>
      )}
    </div>
  );
}
