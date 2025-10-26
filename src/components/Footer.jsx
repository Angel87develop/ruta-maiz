import { Facebook, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full mt-auto bg-linear-to-t from-[#0f000f] via-[#1a0f0f] to-[#2b002b] text-gray-300 border-t border-[#FF8C00]/30 pt-10 pb-6 text-center shadow-[0_-2px_15px_rgba(255,140,0,0.15)]">
      {/* Redes sociales */}
      <div className="flex justify-center space-x-8 mb-6">
        <a
          href="https://www.facebook.com/rutamaiztj/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF8C00] hover:text-[#ff00cc] transition-all hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook size={26} />
        </a>
        <a
          href="https://www.google.com/maps/place/Ruta+del+Ma%C3%ADz/@32.40224,-116.9273762,1098m/data=!3m1!1e3!4m6!3m5!1s0x80d93bce427892c1:0x546f22dab2804730!8m2!3d32.402002!4d-116.9257391!16s%2Fg%2F11s0s76jgq?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFD700] hover:text-[#FF8C00] transition-all hover:scale-110"
          aria-label="Ubicación"
        >
          <MapPin size={26} />
        </a>
      </div>

      {/* Descripción */}
      <p className="max-w-md mx-auto text-sm text-[#ffda77] mb-3">
        Ruta del Maíz – Celebrando la tradición, el sabor y la vida en Tijuana.
      </p>

      {/* Derechos */}
      <p className="text-xs text-gray-500 tracking-wide">
        © 2025 Ruta del Maíz | Hecho con amor y dedicación por la tradición
        mexicana.
      </p>
    </footer>
  );
}

export default Footer;
