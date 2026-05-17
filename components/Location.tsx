import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-emerald-800 md:text-5xl">
            Lokasi Kami
          </h2>

          <p className="mt-4 text-slate-600">
            Kunjungi cafe kami dan nikmati suasana terbaik bersama kopi pilihan.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="flex max-w-3xl items-start gap-3 rounded-full border border-emerald-100 bg-emerald-50 px-6 py-3 text-center text-slate-700">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

            <p>
              Jl. M.H. Thamrin, Kota Jakarta Pusat, Daerah Khusus Ibukota
              Jakarta, Indonesia
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
          <iframe
            title="Lokasi Fore Coffee"
            src="https://www.google.com/maps?q=Thamrin%20Plaza%20Jakarta&output=embed"
            className="h-105 w-full border-0 md:h-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
