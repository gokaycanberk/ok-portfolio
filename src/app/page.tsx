"use client";

import TimeLocation from "@/components/TimeLocation";
import HeroThreeD from "@/components/HeroThreeD";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to determine if we're in hero section or below
  useEffect(() => {
    const handleScroll = () => {
      // When scrolled past hero section
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white text-black relative w-full overflow-x-hidden">
      {/* Hero Section with 3D Animation */}
      <section className="min-h-screen relative w-full">
        <HeroThreeD />
      </section>

      {/* Design Philosophy Section - inspired by oharchitecture.com.au */}
      <section
        id="scrollthis"
        className="min-h-screen bg-white pt-16 pb-32 w-full"
      >
        <div className="w-full">
          {/* First row - DESIGNING HOMES WITH */}
          <div className="w-full mb-0 pl-10 md:pl-16 lg:pl-24">
            <h2 className="text-7xl md:text-8xl font-normal leading-none">
              DESIGNING
              <br />
              HOMES WITH
            </h2>
          </div>

          {/* Second row - Photo and PEOPLE AT HEART */}
          <div className="w-full px-0 mt-0">
            <div className="flex justify-end pr-10 md:pr-16 lg:pl-[calc(320px-24px)]">
              <div className="flex items-start">
                <div
                  className="w-[450px] h-[320px] relative"
                  id="image-reference"
                >
                  <Image
                    src="/images/img1.png"
                    alt="Architecture design"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="object-center"
                  />
                </div>
                <div className="ml-0 mt-1">
                  <h2 className="text-7xl md:text-8xl font-normal leading-none">
                    PEOPLE
                    <br />
                    AT HEART
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Third row - Text section aligned with the image */}
          <div className="w-full mt-20 px-0">
            <div className="container mx-auto flex justify-center">
              <div className="w-full max-w-4xl flex justify-start transform -translate-x-12 md:-translate-x-20 lg:-translate-x-24">
                <div className="max-w-3xl">
                  <p className="text-lg mb-10 font-normal">
                    We design spaces for people. No matter the scale of the
                    projects, our down-to-earth approach stays the same. We
                    listen first, design second. We take the time to understand
                    how you live, work, and move through your space.
                  </p>
                  <p className="text-lg mb-16 font-normal">
                    Then, we bring your vision to life. Drawing from real
                    experience, we create contemporary, aspirational spaces that
                    feel effortless and truly yours.
                  </p>
                  <div className="mt-12">
                    <a
                      href="/studio"
                      className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors rounded-full"
                    >
                      LEARN MORE ABOUT OUR STUDIO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed side navigation - only visible in hero section */}
      <div
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 text-right z-50 transition-opacity duration-500 ${
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <nav className="flex flex-col space-y-8">
          <Link
            href="/"
            className="text-sm uppercase tracking-widest font-bold hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/news"
            className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Bottom right time location */}
      <div className="fixed bottom-6 right-6 text-right z-50">
        <TimeLocation />
      </div>

      {/* Top navigation - only visible when scrolled */}
      <div
        className={`fixed top-6 right-6 z-50 flex items-center gap-4 transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="/contact"
          className="bg-black text-white text-xs uppercase tracking-widest px-5 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          GET IN TOUCH
        </a>

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
    </main>
  );
}
