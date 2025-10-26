import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos
import { Link } from "react-router-dom"; // Importa Link de React Router

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1a0f0f]/90 backdrop-blur-md border-b border-[#FF8C00]/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] hover:scale-105 transition-transform"
        >
          Ruta del Maíz
        </Link>

        {/* NAV LINKS (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-[#FFD700] font-medium">
          <Link
            to="/"
            className="hover:text-[#ff00cc] transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/explora"
            className="hover:text-[#FF8C00] transition-colors duration-300"
          >
            Sobre nosotros
          </Link>
          <Link
            to="/contacto"
            className="hover:text-[#FFD700] transition-colors duration-300"
          >
            Contacto
          </Link>
          <Link
            to="/comida"
            className="hover:text-[#FFD700] transition-colors duration-300"
          >
            Comida
          </Link>
          <Link
            to="/galeria"
            className="hover:text-[#FFD700] transition-colors duration-300"
          >
            Galería
          </Link>
          <Link
            to="/rutas"
            className="hover:text-[#FFD700] transition-colors duration-300"
          >
            Ruta
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#FF8C00] hover:text-[#ff00cc] transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#200014]/95 backdrop-blur-lg border-t border-[#ff00cc]/30 text-center py-4 space-y-4 text-[#FFD700] animate-fade-in">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff00cc] transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/explora"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FF8C00] transition-colors"
          >
            Sobre nosotros
          </Link>
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FFD700] transition-colors"
          >
            Contacto
          </Link>
          <Link
            to="/comida"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FFD700] transition-colors"
          >
            Comida
          </Link>
          <Link
            to="/galeria"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FFD700] transition-colors"
          >
            Galería
          </Link>
          <Link
            to="/rutas"
            onClick={() => setOpen(false)}
            className="block hover:text-[#FFD700] transition-colors"
          >
            Rutas
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
