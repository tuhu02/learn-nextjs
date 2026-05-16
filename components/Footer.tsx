import React from "react";
import { MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-50 px-6 py-10 text-emerald-950">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
        <div className="flex flex-col justify-between gap-12">
          <div className="flex items-center font-semibold">
            <img
              src="https://img.freepik.com/premium-vector/ddf-logo-design_695270-1111.jpg?w=360"
              alt="logo dahayu"
              className="w-24"
            />
            <span className="text-xl">Tuhu Coffe</span>
          </div>

          <p className="text-sm text-emerald-950/80">
            © 2026 Tuhu Coffee. All rights reserved
            <span className="text-emerald-800 mx-2">●</span>
            <a href="#" className="text-slate-500 hover:text-emerald-800">
              Terms and Conditions
            </a>
            <span className="text-emerald-800 mx-2">●</span>
            <a href="#" className="text-slate-500 hover:text-emerald-800">
              Privacy Policy
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-bold text-emerald-950">Customer Center</h3>

          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 fill-emerald-900 text-emerald-900" />

              <p className="text-sm leading-6 text-emerald-950/90">
                Jurangniti, Tinawun, Kec. Malo, Kabupaten Bojonegoro, Jawa Timur
                62153
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 shrink-0 fill-emerald-900 text-emerald-900" />

              <p className="text-sm text-emerald-950/90">0851-1717-2141</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-emerald-950">
            Consumer Complaints Service Contact Information
          </h3>

          <p className="mt-4 text-sm leading-6 text-emerald-950/90">
            Directorate General of Consumer Protection and Trade Compliance,
            Ministry of Trade of the Republic of Indonesia
          </p>

          <p className="mt-4 text-sm italic text-emerald-950/90">
            WhatsApp Ditjen PKTN: 0853-1111-1010
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-950 transition hover:bg-emerald-900 hover:text-white"
            >
              <FaYoutube className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-950 transition hover:bg-emerald-900 hover:text-white"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-950 transition hover:bg-emerald-900 hover:text-white"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-950 transition hover:bg-emerald-900 hover:text-white"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
