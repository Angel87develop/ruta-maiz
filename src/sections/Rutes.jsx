function Rutes() {
  const routeImages = [
    {
      image: "src/assets/cochinitos.jpg",
    },
    {
      image: "src/assets/detalle.jpg",
    },
    {
      image: "src/assets/girasoles.jpg",
    },
    {
      image: "src/assets/rosas.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#1a0f0f] via-[#2b002b] to-[#000000] text-white min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold text-center text-[#FF8C00] mb-4">
        Recorrido de la Ruta del Maíz
      </h2>
      <p className="text-center text-gray-400 mb-16 text-lg">
        Descubre los puntos más emblemáticos de nuestra ruta
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {routeImages.map((route, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden border-2 border-[#ff00cc]/40 shadow-2xl hover:shadow-[#FFD700]/50 hover:border-[#FFD700]/60 transition-all duration-500 cursor-pointer"
          >
            <img
              src={route.image}
              alt={route.name}
              className="w-full h-[500px] md:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-8">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-3">
                  {route.name}
                </h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {route.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rutes;
