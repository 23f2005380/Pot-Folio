"use client"; // Add this directive to make the component a Client Component
import "../app/styles.css"
import SVG from "../components/cloudssvg";

export default function Header() {
  return (
    <header className=" flex flex-col items-center w-full h-[10vh] bg-[#0B192C] p-4" id="menu">
      
      {/* Top bar for navigation */}
      <div className="flex w-full justify-between items-center h-auto">
        <div className="text-white text-lg font-bold gap-1rem"><img src="/Vase10Line.svg" width={"30px"} style={{display : "inline-block"}}/> Folio</div>
        <nav className="hidden sm:flex gap-6">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/Certi" className="text-white hover:text-gray-300">
            Certificates
          </a>
          <a href="/Resum" className="text-white hover:text-gray-300">
            Resume
          </a>
          <a href="/Contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </nav>
        {/* Hamburger menu for small screens */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu.classList.toggle("hidden");
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden flex flex-col gap-4 mt-4 sm:hidden text-center"
      >
        <a href="#home" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#services" className="text-white hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>

      {/* SVG Cloud Section */}
      {/* <div className="flex justify-center mt-4">
        <SVG text="Home" />
        <SVG text="About" />
        <SVG text="Services" />
        <SVG text="Contact" />
      </div> */}
    </header>
  );
}