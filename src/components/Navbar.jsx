import { useState } from "react";
import { Menu, X } from "lucide-react"; // npm i lucide-react

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a0f0f]/90 backdrop-blur-md border-b border-[#FF8C00]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] hover:scale-105 transition-transform"
        >
          Ruta del Maíz 🌽
        </a>

        {/* NAV LINKS (Desktop) */}
        <div className="hidden md:flex space-x-8 text-[#FFD700] font-medium">
          <a
            href="#home"
            className="hover:text-[#ff00cc] transition-colors duration-300"
          >
            Inicio
          </a>
          <a
            href="#explora"
            className="hover:text-[#FF8C00] transition-colors duration-300"
          >
            La Ruta
          </a>
          <a
            href="#galeria"
            className="hover:text-[#FFD700] transition-colors duration-300"
          >
            Galería
          </a>
          <a
            href="#contacto"
            className="hover:text-[#ff00cc] transition-colors duration-300"
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#FF8C00] hover:text-[#ff00cc] transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-[#2b002b]/95 backdrop-blur-md border-t border-[#FF8C00]/20 text-center py-4 space-y-4 text-[#FFD700] animate-fade-in">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff00cc] transition-colors"
          >
            Inicio
          </a>
          <a
            href="#explora"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FF8C00] transition-colors"
          >
            La Ruta
          </a>
          <a
            href="#galeria"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FFD700] transition-colors"
          >
            Galería
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff00cc] transition-colors"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
