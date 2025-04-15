"use client";

import Image from "next/image";
import Link from "next/link";
import TimeLocation from "@/components/TimeLocation";

export default function Portfolio() {
  return (
    <main className="bg-white text-black relative">
      {/* Portfolio Header */}
      <section className="min-h-screen relative flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-6">
          <h1 className="text-7xl font-light mb-32 mt-32">Portfolio</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col space-y-6">
              <h2 className="text-lg uppercase tracking-wider">
                INTERIOR DESIGN
              </h2>
              <div className="relative h-80 w-full bg-gray-100">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Interior Design"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-sm">
                Residential and commercial interior design projects
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-lg uppercase tracking-wider">
                DIGITAL DESIGN
              </h2>
              <div className="relative h-80 w-full bg-gray-100">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Digital Design"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-sm">
                UI/UX, web design, and digital experiences
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-lg uppercase tracking-wider">ART</h2>
              <div className="relative h-80 w-full bg-gray-100">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Art"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-sm">
                Installations, exhibitions, and creative projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed side navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 text-right z-50">
        <nav className="flex flex-col space-y-8">
          <Link
            href="/"
            className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-sm uppercase tracking-widest font-bold hover:text-red-600 transition-colors"
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
    </main>
  );
}
