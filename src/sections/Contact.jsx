import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const ticketPrice = 180;
  const totalPrice = formData.tickets * ticketPrice;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tickets" ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/reservas.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_completo: formData.name,
          correo_electronico: formData.email,
          telefono: formData.phone,
          cantidad_entradas: formData.tickets,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: `¡Reserva exitosa! Has reservado ${formData.tickets} entrada(s) por un total de $${totalPrice}.`,
        });
        // Limpiar formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          tickets: 1,
        });
      } else {
        setMessage({
          type: "error",
          text: data.error || "Error al procesar la reserva",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error de conexión. Por favor, verifica que el servidor esté corriendo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#1a0f0f] via-[#2a001f] to-[#000000] min-h-screen flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-10 text-center">
        Reserva tus Entradas
      </h2>

      {/* Mensaje de respuesta */}
      {message.text && (
        <div
          className={`max-w-xl w-full p-4 rounded-xl mb-6 ${
            message.type === "success"
              ? "bg-green-800/70 text-green-100 border border-green-500"
              : "bg-red-800/70 text-red-100 border border-red-500"
          }`}
        >
          {message.text}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-[#2b002b]/70 p-8 rounded-3xl shadow-xl max-w-xl w-full flex flex-col gap-6"
      >
        {/* Nombre */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-[#FFD700]">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-[#1a0f0f]/80 border border-[#ff00cc]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-[#FFD700]">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-[#1a0f0f]/80 border border-[#ff00cc]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition"
          />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-[#FFD700]">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 rounded-xl bg-[#1a0f0f]/80 border border-[#ff00cc]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition"
          />
        </div>

        {/* Entradas */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-[#FFD700]">
            Cantidad de entradas
          </label>
          <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleChange}
            min="1"
            className="p-3 rounded-xl bg-[#1a0f0f]/80 border border-[#ff00cc]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition"
          />
        </div>

        {/* Precio total */}
        <p className="text-lg text-[#ffda77] font-semibold">
          Precio total: ${totalPrice}
        </p>

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={loading}
          className={`mt-4 bg-linear-to-r from-[#FF8C00] via-[#ff00cc] to-[#FFD700] py-3 rounded-full text-black font-semibold shadow-lg transition-transform duration-300 ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105 hover:shadow-[#ff00cc]/50"
          }`}
        >
          {loading ? "Procesando..." : "Reservar Entradas"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
