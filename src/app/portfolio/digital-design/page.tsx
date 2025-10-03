"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TimeLocation from "@/components/TimeLocation";

interface Project {
  id: number;
  title: string;
  description: string;
  details: {
    client: string;
    year: string;
    category: string;
  };
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BRAND IDENTITY",
    description:
      "Complete brand identity design including logo, typography, color palette, and brand guidelines.",
    details: {
      client: "Tech Startup",
      year: "2024",
      category: "Branding",
    },
    image: "/images/p4.jpg",
  },
  {
    id: 2,
    title: "UI/UX DESIGN",
    description:
      "Modern and intuitive user interface design for a mobile banking application.",
    details: {
      client: "FinTech Corp",
      year: "2024",
      category: "UI/UX",
    },
    image: "/images/p4.jpg",
  },
  {
    id: 3,
    title: "WEB PLATFORM",
    description:
      "Responsive web platform design with focus on user experience and performance.",
    details: {
      client: "E-commerce",
      year: "2023",
      category: "Web Design",
    },
    image: "/images/p4.jpg",
  },
  {
    id: 4,
    title: "MOBILE APP",
    description:
      "Innovative mobile app design for health and wellness tracking.",
    details: {
      client: "Healthcare",
      year: "2023",
      category: "App Design",
    },
    image: "/images/p4.jpg",
  },
];

const DigitalDesignPage = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10%",
      threshold: 0.2,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          // Animate text content
          const textContent = target.querySelector(".text-content");
          if (textContent) {
            textContent.classList.add("opacity-100", "translate-x-0");
            textContent.classList.remove("opacity-0", "translate-x-[-100px]");
          }
          // Animate image
          const image = target.querySelector(".image-content");
          if (image) {
            image.classList.add("opacity-100", "translate-x-0", "scale-100");
            image.classList.remove(
              "opacity-0",
              "translate-x-[100px]",
              "scale-95"
            );
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

      {/* Projects */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            projectRefs.current[index] = el;
          }}
          className="min-h-screen flex items-center py-16"
        >
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Left side - Project Info */}
            <div className="text-content flex flex-col justify-center space-y-8 opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                  {project.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                <div>
                  <p className="font-medium">Client</p>
                  <p>{project.details.client}</p>
                </div>
                <div>
                  <p className="font-medium">Year</p>
                  <p>{project.details.year}</p>
                </div>
                <div>
                  <p className="font-medium">Category</p>
                  <p>{project.details.category}</p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="image-content relative aspect-[3/4] md:aspect-[4/5] overflow-hidden opacity-0 translate-x-[100px] scale-95 transition-all duration-1000 ease-out delay-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DigitalDesignPage;
