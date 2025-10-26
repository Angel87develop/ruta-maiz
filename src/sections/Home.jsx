import Hero from "../components/Hero";

function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#1a0f0f] via-[#2a001f] to-[#000000] text-white font-sans overflow-x-hidden relative">
      {/* Fondo decorativo */}
      <Hero />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572647688495-4b56f2c7c72e?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-25"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#ff00cc]/10 via-transparent to-[#FF8C00]/10 animate-pulse"></div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] drop-shadow-[0_0_25px_rgba(255,140,0,0.6)]">
          Bienvenidos a la Ruta del Maíz 🌽
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mb-12 text-[#ffda77] drop-shadow-md">
          Una zona turística en Tijuana diseñada para disfrutar de la naturaleza
          en todas las estaciones del año, con actividades y paisajes para toda
          la familia.
        </p>

        {/* Recuadros de estaciones centrados */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl justify-items-center mx-auto">
          {/* Estación de Primavera */}
          <div className="bg-[#2b002b]/70 border border-[#ff00cc]/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#ff00cc]/50 transition-all duration-300 hover:scale-105">
            <img
              src="src/assets/primavera.jpg"
              alt="Estación de Primavera"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-2">
                Primavera
              </h3>
              <p className="text-gray-200 text-base">
                Disfruta de la flora y fauna en su máximo esplendor durante la
                estación de la primavera.
              </p>
            </div>
          </div>

          {/* Estación de Otoño */}
          <div className="bg-[#2b002b]/70 border border-[#ff00cc]/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#ff00cc]/50 transition-all duration-300 hover:scale-105">
            <img
              src="src/assets/otoño.jpg"
              alt="Estación de Otoño"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#ff00cc] mb-2">
                Otoño
              </h3>
              <p className="text-gray-200 text-base">
                Experimenta los colores cálidos y las tradiciones culturales de
                la estación otoñal.
              </p>
            </div>
          </div>

          {/* Estación de Invierno */}
          <div className="bg-[#2b002b]/70 border border-[#FFD700]/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105">
            <img
              src="src/assets/navidad.png"
              alt="Estación de Invierno"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-[#FFD700] mb-2">
                Invierno
              </h3>
              <p className="text-gray-200 text-base">
                Disfruta de eventos especiales y paisajes únicos durante el
                invierno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
