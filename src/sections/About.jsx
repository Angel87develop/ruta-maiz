function About() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#1a0f0f] via-[#2a001f] to-[#000000] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-6">
            Sobre la Ruta del Maíz
          </h2>
          <p className="text-[#ffda77] mb-4">
            La Ruta del Maíz es una experiencia turística en Tijuana que celebra
            nuestras raíces y tradiciones mexicanas. Cada estación del año
            ofrece paisajes únicos, actividades culturales y la posibilidad de
            reconectar con la naturaleza.
          </p>
          <p className="text-[#ffda77]">
            Nuestro objetivo es promover el turismo familiar y educativo,
            mostrando la importancia del maíz como símbolo de vida y alimento
            ancestral. Disfruta de recorridos y eventos especiales
            durante todo el año.
          </p>
        </div>

        {/* Imagen decorativa */}
        <div className="md:w-1/2 relative">
          <img
            src="src/assets/flores.jpg"
            alt="Ruta del Maíz"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl border border-[#ff00cc]/40"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
