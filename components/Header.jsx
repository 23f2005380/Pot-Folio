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
        <nav className="sm:hidden sm:flex gap-6">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/Certi" className="text-white hover:text-gray-300">Certificates</Link>
          <Link href="/Resum" className="text-white hover:text-gray-300">Resume</Link>
          <Link href="/Contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>
        {/* Hamburger menu for small screens */}
        
      </div>

      {/* Mobile menu */}
      {/* <div
        className={`
          absolute top-0 right-0 h-full w-3/4 max-w-xs bg-[#658964] z-[999]
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0 scale-[1]" : "translate-x-full scale-[0.9]"}
          sm:hidden flex flex-col pt-20 gap-6 text-center
        `}
      >
        <a href="/" className="text-white hover:text-gray-300 text-lg" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/Certi" className="text-white hover:text-gray-300 text-lg" onClick={() => setMenuOpen(false)}>Certificates</a>
        <a href="/Resum" className="text-white hover:text-gray-300 text-lg" onClick={() => setMenuOpen(false)}>Resume</a>
        <a href="/Contact" className="text-white hover:text-gray-300 text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
      </div> */}

      {/* Optional: Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[998] sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}