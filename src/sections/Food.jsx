import { motion } from "framer-motion";

function Food() {
  const foodItems = [
    {
      name: "Esquite",
      description:
        "Tradicional platillo de esquite, servido con mayonesa, queso y limón.",
      image: "src/assets/esquite.jpg",
    },
    {
      name: "Tostielotes",
      description:
        "Unos ricos tostitos al gusto, servidos con granos de maíz, mayonesa, queso, chiles en vinagre y salsa.",
      image: "src/assets/tostielote.jpg",
    },
    {
      name: "Helado de calabaza",
      description:
        "Un tradicional helado de calabaza servido dentro de una calabaza natural.",
      image: "src/assets/helado.png",
    },
    {
      name: "Pizza",
      description:
        "Un tradicional pizza italiana con ingredientes organicos.",
      image: "src/assets/pizza.jpg",
    },
    { 
        name: "Chilaquiles",
        description: "Unos tradicionales chilaquiles rojos con frijol, queso y cebolla",
        image: "src/assets/chilaquiles.jpg",
    },
    {
        name: "Café",
        description: "Un café al gusto",
        image: "src/assets/cafe.jpg",
    },
  ];

  return (
    <section className="py-24 px-8 bg-linear-to-b from-[#1a0f0f] via-[#2a001f] to-black text-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] drop-shadow-[0_0_15px_#ff00cc] mb-14"
      >
        Gastronomía que ofrecemos en la Ruta del Maiz
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {foodItems.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-[#ff00cc]/30 shadow-[0_0_20px_#ff00cc33] hover:shadow-[0_0_25px_#ff00cc88] transition-all duration-300 group"
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2 drop-shadow-[0_0_10px_#FFD700]">
                {item.name}
              </h3>
              <p className="text-gray-200 text-sm italic">{item.description}</p>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#FF8C00]/50 animate-pulse pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>

  );
}

export default Food;
