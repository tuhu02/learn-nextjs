import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">Hubungi Kami</h2>
        <h2 className="mx-auto  mt-7 text-muted-foreground">
          Ada pertanyaan atau komentar? Cukup tulis pesan kepada kami!
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-emerald-800 p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold">Informasi Kontak</h2>

          <p className="mt-6 max-w-xl leading-7 text-white/90">
            Jika Anda mempunyai pertanyaan atau kekhawatiran, Anda dapat
            menghubungi kami dengan mengisi formulir kontak, menelepon kami,
            datang ke kantor kami, menemukan kami di jejaring sosial lain, atau
            Anda dapat mengirim email pribadi kepada kami di:
          </p>

          <div className="mt-8 space-y-8">
            <div className="flex items-center gap-5">
              <Phone className="h-6 w-6 shrink-0 text-white" />
              <span>0812-1811-8126</span>
            </div>

            <div className="flex items-center gap-5">
              <Mail className="h-6 w-6 shrink-0 text-white" />
              <span>hello@tuhu.coffee</span>
            </div>

            <div className="flex items-start gap-5">
              <MapPin className="mt-1 h-7 w-7 shrink-0 fill-white text-white" />
              <span>
                Jurangniti, Tinawun, Kec. Malo, Kabupaten Bojonegoro, Jawa Timur
                62153
              </span>
            </div>
          </div>

          <div className="absolute -bottom-16 -right-20 h-56 w-56 rounded-full bg-white/20" />
          <div className="absolute bottom-14 right-16 h-36 w-36 rounded-full bg-white/15" />
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-1 block font-semibold text-gray-400">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-400">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-gray-400">
              Message
            </label>
            <textarea
              rows={7}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-800 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-900"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
