import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Food from "./sections/Food";
import Gallery from "./sections/Gallery";
import Rutes from "./sections/Rutes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans overflow-x-hidden">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal con rutas */}
      <main className="grow pt-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/explora" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/comida" element={<Food />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/rutas" element={<Rutes />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
