import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Cta from "./sections/cta";
import Footer from "./sections/footer";
import Section from "./components/section";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";

function App() {
  return (
    <>
      <Section>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        {/* <Services /> */}
      </Section>
      <Cta />
      <Footer />
    </>
  );
}

export default App;
