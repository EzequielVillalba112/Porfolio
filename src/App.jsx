import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="">
      <section id="Inicio">
        <Navbar />
      </section>
      <section id="Servicio">Parallax</section>
      <section>Service</section>
      <section id="Portafolio">Parallax</section>
      <section>Portfolio 1</section>
      <section>Portfolio 2</section>
      <section>Portfolio 3</section>
      <section id="Contacto">Contact</section>
    </div>
  );
}

export default App;
