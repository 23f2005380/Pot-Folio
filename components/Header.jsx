"use client";
import { useState } from "react";
import "../app/styles.css";
import SVG from "../components/cloudssvg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center w-full h-[10vh] bg-[#0B192C] p-4" id="menu">
      {/* Top bar for navigation */}
      <div className="flex w-full justify-between items-center h-auto">
        <div className="text-white text-lg font-bold gap-1rem">
          <img src="/Vase10Line.svg" width={"30px"} style={{ display: "inline-block" }} /> Folio
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="/" className="text-white hover:text-[#A0E9FF] transition-colors duration-200">
            Home
          </a>
          <a href="/Certi" className="text-white hover:text-[#A0E9FF] transition-colors duration-200">
            Certificates
          </a>
          <a href="/Resum" className="text-white hover:text-[#A0E9FF] transition-colors duration-200">
            Resume
          </a>
          <a href="/Contact" className="text-white hover:text-[#A0E9FF] transition-colors duration-200">
            Contact
          </a>
        </nav>
        {/* Hamburger menu for small screens */}
        <div className="sm:hidden flex items-center z-[1001]">
          <button
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 my-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu with backdrop */}
      <div
        className={`fixed inset-0 z-[1000] transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300`}
        />
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-[#1B2A41] rounded-l-lg shadow-lg flex flex-col gap-6 pt-20 px-8 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="/"
            className="text-white py-2 rounded hover:bg-[#A0E9FF] hover:text-[#1B2A41] active:bg-[#A0E9FF] active:text-[#1B2A41] transition-all duration-200 text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/Certi"
            className="text-white py-2 rounded hover:bg-[#A0E9FF] hover:text-[#1B2A41] active:bg-[#A0E9FF] active:text-[#1B2A41] transition-all duration-200 text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>
          <a
            href="/Resum"
            className="text-white py-2 rounded hover:bg-[#A0E9FF] hover:text-[#1B2A41] active:bg-[#A0E9FF] active:text-[#1B2A41] transition-all duration-200 text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
          <a
            href="/Contact"
            className="text-white py-2 rounded hover:bg-[#A0E9FF] hover:text-[#1B2A41] active:bg-[#A0E9FF] active:text-[#1B2A41] transition-all duration-200 text-lg font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}