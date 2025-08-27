import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/hero";
import Cta from "../sections/cta";
import Section from "../components/section";
import About from "../sections/about";
import Portfolio from "../sections/portfolio";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Section>
        <Hero />
        <About />
        <Portfolio />
      </Section>
      <Cta />
    </>
  );
}

export default HomePage;
