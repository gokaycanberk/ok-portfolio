"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TimeLocation from "@/components/TimeLocation";

interface ArtWork {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const artWorks: ArtWork[] = [
  {
    id: 1,
    title: "Abstract Composition I",
    category: "Digital Art",
    year: "2024",
    image: "/images/p4.jpg",
  },
  {
    id: 2,
    title: "Urban Landscape",
    category: "Photography",
    year: "2024",
    image: "/images/p4.jpg",
  },
  {
    id: 3,
    title: "Geometric Patterns",
    category: "Digital Art",
    year: "2023",
    image: "/images/p4.jpg",
  },
  {
    id: 4,
    title: "Nature Study",
    category: "Photography",
    year: "2023",
    image: "/images/p4.jpg",
  },
  {
    id: 5,
    title: "Color Theory",
    category: "Digital Art",
    year: "2023",
    image: "/images/p4.jpg",
  },
  {
    id: 6,
    title: "Light & Shadow",
    category: "Photography",
    year: "2023",
    image: "/images/p4.jpg",
  },
];

const ArtWorksPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<ArtWork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (work: ArtWork) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed side navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 text-right z-50 transition-opacity duration-500 hidden md:block">
        <nav className="flex flex-col space-y-8">
          <Link
            href="/"
            className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
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

      {/* Top navigation for mobile */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm uppercase tracking-widest font-medium flex items-center"
          >
            {/* Hamburger icon */}
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
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

      {/* Art Works Grid */}
      <div className="min-h-screen pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artWorks.map((work) => (
              <div
                key={work.id}
                className="group cursor-pointer"
                onClick={() => openModal(work)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-light">{work.title}</h3>
                    <p className="text-sm opacity-80 mt-2">{work.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-6">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              Close
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-light">{selectedWork.title}</h2>
              <div className="flex space-x-4 mt-2 text-sm opacity-80">
                <span>{selectedWork.category}</span>
                <span>{selectedWork.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtWorksPage;
