import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div className="">
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicio">
        <Parallax type="services" />
      </section>
      <section>Service</section>
      <section id="Portafolio">
        <Parallax type="porfolio" />
      </section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contacto">Contact</section>
    </div>
  );
}

export default App;
