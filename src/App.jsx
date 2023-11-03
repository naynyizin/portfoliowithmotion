import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Cursor from "./cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>

      {/* <Test /> */}
    </div>
  );
};

export default App;
