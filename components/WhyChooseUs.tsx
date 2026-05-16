"use client";

import React, { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: "🫘",
    title: "Biji Kopi Pilihan",
    desc: "Kami hanya menggunakan biji kopi single origin terbaik dari petani lokal Nusantara — dipilih tangan, disangrai segar setiap hari.",
    bg: "bg-amber-100",
  },
  {
    icon: "⚡",
    title: "Freshly Brewed",
    desc: "Setiap cangkir dibuat langsung saat kamu memesan. Tidak ada kopi yang duduk lama — selalu segar, selalu nikmat.",
    bg: "bg-orange-100",
  },
  {
    icon: "💰",
    title: "Harga Bersahabat",
    desc: "Kualitas premium tidak harus mahal. Kami percaya semua orang berhak menikmati kopi yang enak tanpa menguras kantong.",
    bg: "bg-yellow-100",
  },
  {
    icon: "🏡",
    title: "Suasana Nyaman",
    desc: "Tempat yang hangat, tenang, dan instagramable. Cocok untuk kerja, ngobrol santai, atau sekadar me-time.",
    bg: "bg-amber-50",
  },
  {
    icon: "👨‍🍳",
    title: "Barista Berpengalaman",
    desc: "Tim barista kami terlatih dan bersertifikat, memastikan setiap seduhan menghadirkan rasa yang konsisten dan sempurna.",
    bg: "bg-orange-50",
  },
  {
    icon: "🌱",
    title: "Ramah Lingkungan",
    desc: "Kami menggunakan kemasan biodegradable dan mendukung praktik pertanian kopi yang berkelanjutan untuk masa depan lebih hijau.",
    bg: "bg-lime-50",
  },
];

const stats = [
  { value: "20+", label: "Menu Tersedia" },
  { value: "1K+", label: "Pelanggan Puas" },
  { value: "4.9", label: "Rating Rata-rata" },
  { value: "2+", label: "Tahun Berdiri" },
];

const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative overflow-hidden bg-orange-950 px-6 py-24 md:px-16 lg:px-24"
    >
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-amber-700/30 blur-3xl" />

      <div
        className="relative z-10 mb-16 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <span className="mb-4 inline-block rounded-full bg-amber-200 px-5 py-2 text-sm font-semibold text-orange-950">
          Kenapa Dahayu?
        </span>
        <h2 className="text-4xl font-extrabold text-amber-100 md:text-5xl">
          Lebih dari Sekadar Kopi
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-orange-300">
          Kami hadir bukan hanya untuk menyajikan kopi, tapi untuk menciptakan
          pengalaman yang selalu ingin kamu ulangi.
        </p>
      </div>

      <div className="relative z-10 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((item, i) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s, background 0.3s, translate 0.3s`,
            }}
          >
            <div
              className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${item.bg}`}
            >
              {item.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-amber-100">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-orange-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        className="relative z-10 grid grid-cols-2 gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:grid-cols-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity 0.6s ease ${0.8 + i * 0.1}s`,
            }}
          >
            <p className="text-4xl font-extrabold text-amber-200">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-orange-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
