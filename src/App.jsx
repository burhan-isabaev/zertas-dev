import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import Cta from "./sections/cta";
import Footer from "./sections/footer";
import Section from "./components/section";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Catalog from "./pages/catalog";
import CatalogItem from "./pages/catalog-item";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageVariants}>
              <Section>
                <Hero />
                <About />
                <Portfolio />
              </Section>
              <Cta />
            </motion.div>
          }
        />
        <Route
          path="/catalog"
          element={
            <motion.div {...pageVariants}>
              <Section>
                <Catalog />
              </Section>
            </motion.div>
          }
        />
        <Route
          path="/catalog/:itemId"
          element={
            <motion.div {...pageVariants}>
              <CatalogItem />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Section>
        <Navbar />
      </Section>
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
