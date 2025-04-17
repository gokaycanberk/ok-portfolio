"use client";

import OurProcess from "@/components/OurProcess";
import TimeLocation from "@/components/TimeLocation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProcessPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to determine if we're in hero section or below
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-black relative w-full">
      {/* Page title */}
      <section className="py-28 bg-white w-full">
        <div className="w-full px-10 md:px-16 lg:px-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal">
            Our Process
          </h1>
        </div>
      </section>

      {/* Process Section */}
      <OurProcess />

      {/* Top navigation - only visible when scrolled */}
      <div
        className={`fixed top-6 right-6 z-50 transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm uppercase tracking-widest font-medium"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* Dropdown menu */}
          <div
            className={`absolute right-0 top-full mt-2 bg-white p-4 w-48 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/news"
                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom right time location */}
      <div className="fixed bottom-6 right-6 text-right z-50">
        <TimeLocation />
      </div>
    </main>
  );
}
