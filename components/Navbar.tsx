"use client";

import { useState } from "react";
import Search from "./Search";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-black drop-shadow-md">
      <div className="flex items-center justify-between px-8 py-6 md:px-32">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/premium-vector/ddf-logo-design_695270-1111.jpg?w=360"
            alt="logo dahayu"
            className="w-10"
          />
          <h1 className="font-semibold">Dahayu Coffe</h1>
        </a>

        <ul className="hidden items-center gap-12 text-base font-semibold xl:flex">
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-amber-100 hover:text-orange-900">
            Home
          </li>
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-amber-100 hover:text-orange-900">
            Products
          </li>
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-amber-100 hover:text-orange-900">
            Explore
          </li>
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-amber-100">
            Contact
          </li>
        </ul>

        <div className="relative hidden items-center justify-center gap-3 md:flex">
          <Search />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block cursor-pointer xl:hidden"
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-5xl`}></i>
        </button>
      </div>

      <div
        className={`absolute left-0 top-full z-50 flex w-full flex-col items-center gap-6 bg-white py-6 text-lg  shadow-md transition-all duration-300 xl:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <li className="w-full list-none cursor-pointer p-4 text-center active:bg-orange-700 active:text-white">
          Home
        </li>
        <li className="w-full list-none cursor-pointer p-4 text-center active:bg-orange-700 active:text-white">
          Products
        </li>
        <li className="w-full list-none cursor-pointer p-4 text-center active:bg-orange-700 active:text-white">
          Explore
        </li>
        <li className="w-full list-none cursor-pointer p-4 text-center active:bg-orange-700 active:text-white">
          Contact
        </li>
      </div>
    </header>
  );
}
