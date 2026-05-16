import React from "react";

const Hero = () => {
  return (
    <section className="relative h-96 overflow-hidden">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="bg-amber-100 px-8 py-20 md:px-32">
          <h1 className="text-4xl font-bold text-orange-950">Dahayu Coffee</h1>
          <p className="mt-4 text-orange-900">
            Fresh coffee for your best day.
          </p>
        </div>

        <div className="bg-orange-950 px-8 py-20 text-white md:px-32">
          <h2 className="text-3xl font-semibold">Signature Drink</h2>
          <p className="mt-4 text-orange-100">
            Enjoy our favorite coffee menu.
          </p>
        </div>
      </div>

      {/* Product di tengah */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/coffe.png"
          alt="Dahayu coffee product"
          className="w-96 md:w-64"
        />
      </div>
    </section>
  );
};

export default Hero;
