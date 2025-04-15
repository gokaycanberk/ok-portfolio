"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col items-end mb-10">
      <button
        onClick={toggleMenu}
        className="uppercase text-xs tracking-widest font-medium bg-white px-4 py-2 border border-gray-200 hover:border-gray-400 transition-colors"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen && (
        <div className="bg-white border border-gray-200 mt-2 shadow-lg">
          <div className="flex flex-col py-4">
            <Link
              href="/"
              className="py-2 px-6 hover:bg-gray-50 hover:text-red-600 transition-colors text-xs uppercase tracking-widest font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="py-2 px-6 hover:bg-gray-50 hover:text-red-600 transition-colors text-xs uppercase tracking-widest font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/news"
              className="py-2 px-6 hover:bg-gray-50 hover:text-red-600 transition-colors text-xs uppercase tracking-widest font-medium"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="/contact"
              className="py-2 px-6 hover:bg-gray-50 hover:text-red-600 transition-colors text-xs uppercase tracking-widest font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
