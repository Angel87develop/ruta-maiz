function Gallery() {
  const galleryItems = [
    {
      image: "src/assets/flores.jpg",
    },
    {
      image: "src/assets/flores3.jpg",
    },
    {
      image: "src/assets/flores4.jpg",
    },
    {
      image: "src/assets/flores5.jpg",
    },
    {
      image: "src/assets/flores7.jpg",
    },
    {
      image:
        "src/assets/marioxd.jpg",
    },
    {
      image:
        "src/assets/rosas.jpg",
    },
    {
      image:
        "src/assets/girasoles.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-linear-to-b from-[#1a0f0f] via-[#2a001f] to-[#000000]">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] drop-shadow-[0_0_20px_rgba(255,140,0,0.5)] mb-16">
        Galería de la Ruta del Maíz
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-[#ff00cc]/40 shadow-2xl hover:shadow-[#ff00cc]/60 transition-all duration-500 group"
          >
            <img
              src={item.image}
              alt={`Imagen ${index + 1}`}
              className="w-full h-96 md:h-[28rem] object-cover transform group-hover:scale-110 transition-transform duration-700 ease"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#FFD700] tracking-wide drop-shadow-[0_0_10px_#FFD700]">
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
