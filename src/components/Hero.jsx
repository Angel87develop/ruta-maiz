function Hero({ backgroundImage }) {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden bg-linear-to-b from-[#1a0f0f] via-[#2b002b] to-[#000000]"
    >
      {/* Fondo dinámico */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${
            backgroundImage || "https://files.catbox.moe/y9i3ia.jpg"
          })`,
        }}
      ></div>

      {/* Capa de brillo animado */}
      <div className="absolute inset-0 bg-linear-to-r from-[#ff00cc]/10 via-transparent to-[#FF8C00]/10 animate-pulse"></div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] drop-shadow-[0_0_25px_rgba(255,140,0,0.6)]">
          Ruta del Maíz 
        </h1>
        <p className="text-lg md:text-2xl text-[#ffda77] max-w-2xl mx-auto mb-8 leading-relaxed">
          Una celebración de la vida, la memoria y el sabor ancestral del maíz
          en el corazón de Tijuana.
        </p>
        <a
          href="#explora"
          className="inline-block px-8 py-3 bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] rounded-full font-semibold text-black shadow-lg hover:scale-105 hover:shadow-[#ff00cc]/50 transition-transform duration-300"
        >
          Explorar la Ruta
        </a>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute -bottom-10 w-full flex justify-center gap-6 opacity-70 animate-bounce">
        <span className="text-[#FF8C00] text-3xl">💀</span>
        <span className="text-[#FFD700] text-3xl">🌽</span>
        <span className="text-[#ff00cc] text-3xl">🕯️</span>
      </div>
    </section>
  );
}

export default Hero;
