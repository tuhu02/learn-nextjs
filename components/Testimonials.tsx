import { Quote } from "lucide-react";
import { div, section } from "motion/react-client";
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
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">Testimoni</h2>
        <h2 className="mx-auto border border-dashed border-lime-500 mt-7  w-60  px-5 py-2.5 rounded-2xl">
          Kolaborasi Sukses Kami
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {testimonials.map((testimoni) => (
          <div
            className="border border-lime-500 p-5 rounded-lg shadow-lime-300 shadow-2xs"
            key={testimoni.id}
          >
            <div className="flex items-start gap-3">
              <Quote className="mr-1 inline-block h-8 w-8 fill-lime-600 text-lime-600" />
              {testimoni.quote}
            </div>
            <div className="mt-5 text-center">
              <i>~ {testimoni.name} ~</i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
