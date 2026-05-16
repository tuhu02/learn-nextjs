"use client";

import React, { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-amber-100">
      <div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"
        style={{
          animation: "blobPulse 6s ease-in-out infinite",
        }}
      />

      <div
        className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"
        style={{
          animation: "blobPulse 8s ease-in-out infinite reverse",
        }}
      />

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Left content */}
        <div
          className="relative z-10 flex flex-col justify-center px-6 pb-12 pt-24 md:px-24 md:py-20 lg:px-32"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span
            className="mb-5 w-fit rounded-full bg-orange-950 px-4 py-2 text-sm font-medium text-amber-100"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            Premium Coffee Since 2024
          </span>

          <h1
            className="max-w-xl text-4xl font-extrabold leading-tight text-orange-950 sm:text-5xl md:text-6xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Start Your Day With{" "}
            <span className="text-orange-600">Dahayu Coffee</span>
          </h1>

          <p
            className="mt-5 max-w-md text-base leading-relaxed text-orange-900 sm:text-lg"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
            }}
          >
            Freshly brewed coffee made from selected beans, crafted to bring
            warmth, energy, and joy to your best day.
          </p>

          <div
            className="relative mx-auto mt-8 flex justify-center md:hidden"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0) scale(1)"
                : "translateY(20px) scale(0.9)",
              transition:
                "opacity 0.8s ease 0.45s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.45s",
            }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-amber-300/40 blur-3xl" />

            <img
              src="/coffe.png"
              alt="Dahayu coffee product"
              className="w-56 max-w-full drop-shadow-2xl sm:w-72"
              style={{ animation: "floatCoffeeMobile 4s ease-in-out infinite" }}
            />
          </div>

          <div
            className="mt-8 flex flex-wrap gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
            }}
          >
            <a
              href="#menu"
              className="rounded-full bg-orange-950 px-7 py-3 font-semibold text-white transition hover:bg-orange-800 active:scale-95"
              style={{ transition: "background 0.2s, transform 0.1s" }}
            >
              Order Now
            </a>

            <a
              href="#about"
              className="rounded-full border border-orange-950 px-7 py-3 font-semibold text-orange-950 transition hover:bg-orange-950 hover:text-white active:scale-95"
              style={{
                transition: "background 0.2s, color 0.2s, transform 0.1s",
              }}
            >
              Explore Menu
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-6 text-orange-950 sm:gap-8"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.65s",
            }}
          >
            {[
              { value: "20+", label: "Coffee Menu" },
              { value: "100%", label: "Fresh Beans" },
              { value: "4.9", label: "Customer Rating" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.6s ease ${
                    0.7 + i * 0.12
                  }s, transform 0.6s ease ${0.7 + i * 0.12}s`,
                }}
              >
                <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
                <p className="text-sm text-orange-800">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right content */}
        <div
          className="relative flex flex-col justify-center bg-orange-950 px-6 py-16 text-white md:px-24 md:py-20 lg:px-32"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <div className="max-w-md md:self-end">
            <span className="mb-5 inline-block rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-orange-950">
              Signature Drink
            </span>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Creamy Latte With Rich Espresso Taste
            </h2>

            <p className="mt-5 leading-relaxed text-orange-100">
              Enjoy our favorite coffee menu with smooth milk, bold espresso,
              and a balanced sweet finish.
            </p>

            <div
              className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
              style={{
                animation: "cardShimmer 4s ease-in-out infinite",
              }}
            >
              <p className="text-sm text-orange-100">Today&apos;s Special</p>

              <div className="mt-2 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Dahayu Latte</h3>
                  <p className="mt-1 text-sm text-orange-200">
                    Espresso · Milk · Caramel
                  </p>
                </div>

                <p
                  className="text-2xl font-bold text-amber-200"
                  style={{ animation: "pricePulse 3s ease-in-out infinite" }}
                >
                  25K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/tablet center product image */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden md:block"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -40%) scale(0.85)",
          transition:
            "opacity 0.9s ease 0.4s, transform 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.4s",
        }}
      >
        <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-amber-300/40 blur-3xl" />

        <img
          src="/coffe.png"
          alt="Dahayu coffee product"
          className="w-75 max-w-none drop-shadow-2xl md:w-107.5 lg:w-130"
          style={{ animation: "floatCoffee 4s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes floatCoffee {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }

          50% {
            transform: translateY(-18px) rotate(1deg);
          }
        }

        @keyframes floatCoffeeMobile {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }

          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes blobPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes cardShimmer {
          0%, 100% {
            background: rgba(255, 255, 255, 0.1);
          }

          50% {
            background: rgba(255, 255, 255, 0.16);
          }
        }

        @keyframes pricePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.75;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
