"use client";

import React, { useState } from "react";

const categories = ["Semua", "Espresso", "Manual Brew", "Non Coffee", "Snack"];

const menuItems = [
  {
    id: 1,
    category: "Espresso",
    name: "Dahayu Latte",
    desc: "Espresso, susu segar, dan sentuhan karamel manis",
    price: "Rp 25.000",
    emoji: "☕",
    bg: "bg-amber-50",
    hot: true,
  },
  {
    id: 2,
    category: "Espresso",
    name: "Iced Americano",
    desc: "Double shot espresso dengan air dingin segar",
    price: "Rp 20.000",
    emoji: "🧊",
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    category: "Espresso",
    name: "Mocha Bliss",
    desc: "Espresso, cokelat gelap, dan busa susu lembut",
    price: "Rp 28.000",
    emoji: "🍫",
    bg: "bg-orange-50",
  },
  {
    id: 4,
    category: "Espresso",
    name: "Matcha Latte",
    desc: "Matcha premium Jepang blend dengan susu oat",
    price: "Rp 30.000",
    emoji: "🌿",
    bg: "bg-lime-50",
    hot: true,
  },
  {
    id: 5,
    category: "Manual Brew",
    name: "V60 Pour Over",
    desc: "Single origin diseduh slow pour untuk rasa bersih",
    price: "Rp 32.000",
    emoji: "🫗",
    bg: "bg-amber-50",
  },
  {
    id: 6,
    category: "Manual Brew",
    name: "Aeropress Bold",
    desc: "Full body dengan tekanan manual, cocok untuk penikmat kopi kuat",
    price: "Rp 30.000",
    emoji: "🔬",
    bg: "bg-yellow-100",
  },
  {
    id: 7,
    category: "Non Coffee",
    name: "Strawberry Yakult",
    desc: "Stroberi segar blended dengan yakult dan es batu",
    price: "Rp 22.000",
    emoji: "🍓",
    bg: "bg-pink-50",
  },
  {
    id: 8,
    category: "Non Coffee",
    name: "Taro Milk Tea",
    desc: "Teh susu talas ungu dengan topping pearl lembut",
    price: "Rp 25.000",
    emoji: "🍵",
    bg: "bg-purple-50",
  },
  {
    id: 9,
    category: "Snack",
    name: "Burnt Cheesecake",
    desc: "Basque cheesecake creamy dengan pinggiran karamel",
    price: "Rp 30.000",
    emoji: "🧁",
    bg: "bg-yellow-50",
  },
  {
    id: 10,
    category: "Snack",
    name: "Garlic Toast",
    desc: "Roti panggang mentega bawang putih, garing di luar",
    price: "Rp 18.000",
    emoji: "🍞",
    bg: "bg-orange-50",
  },
];

const OurMenu = () => {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <div className="bg-base-100 py-8 sm:py-16 lg:py-24 px-24">
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-orange-950 px-5 py-2 text-sm font-semibold text-amber-100">
          Our Menu
        </span>
        <h2 className="text-5xl font-extrabold text-orange-950 md:text-6xl">
          Crafted With Love
        </h2>
        <p className="mt-3 text-orange-700">
          Pilih favoritmu dari koleksi kopi pilihan kami
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border border-orange-950 px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? "bg-orange-950 text-amber-100"
                  : "text-orange-950 hover:bg-orange-950 hover:text-amber-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-amber-200 bg-white transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className={`flex h-36 items-center justify-center text-5xl ${item.bg}`}
            >
              {item.emoji}
            </div>

            <div className="p-4">
              <span className="inline-block rounded-full  px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                {item.category}
              </span>

              <p className="mt-2 flex items-center gap-1 font-bold text-orange-950">
                {item.name}
                {item.hot && (
                  <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
                    HOT
                  </span>
                )}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-orange-700">
                {item.desc}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-base font-extrabold text-orange-950">
                  {item.price}
                </span>
                <button className="rounded-full bg-orange-950 px-4 py-1.5 text-xs font-bold text-amber-100 transition hover:bg-orange-800 active:scale-95">
                  + Pesan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
