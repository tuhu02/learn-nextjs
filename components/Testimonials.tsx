import { Quote } from "lucide-react";
import React from "react";

interface Itestimonials {
  id: number;
  quote: string;
  name: string;
}

const testimonials: Itestimonials[] = [
  {
    id: 1,
    quote:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Project, etc.",
    name: "Intan Aulia Majid Cantik",
  },
  {
    id: 2,
    quote:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Project, etc.",
    name: "Intan Aulia Majid Cantik",
  },
  {
    id: 3,
    quote:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Project, etc.",
    name: "Intan Aulia Majid Cantik",
  },
  {
    id: 4,
    quote:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Project, etc.",
    name: "Intan Aulia Majid Cantik",
  },
  {
    id: 5,
    quote:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Project, etc.",
    name: "Intan Aulia Majid Cantik",
  },
  {
    id: 6,
    quote:
      "Fore Coffee is one of the best merchants that I ever handled as a key account manager. We had a great journey to create some collaborations such as Exclusive Seasonal Menu, Percaya Project, etc.",
    name: "Intan Aulia Majid Cantik",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#F3E5D0] px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-[#3B2416] md:text-5xl">
          Testimoni
        </h2>

        <h2 className="mx-auto mt-7 w-60 rounded-2xl border border-dashed border-[#6F4E37] bg-[#C8A27A]/20 px-5 py-2.5 text-[#6F4E37]">
          Kolaborasi Sukses Kami
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimoni) => (
          <div
            className="rounded-lg border border-[#C8A27A] bg-white/60 p-5 text-[#3B2416] shadow-sm transition hover:border-[#6F4E37] hover:shadow-md"
            key={testimoni.id}
          >
            <div className="flex items-start gap-3">
              <Quote className="mr-1 inline-block h-8 w-8 shrink-0 fill-[#6F4E37] text-[#6F4E37]" />
              <p className="leading-7 text-[#3B2416]/90">{testimoni.quote}</p>
            </div>

            <div className="mt-5 text-center text-[#6F4E37]">
              <i>~ {testimoni.name} ~</i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
