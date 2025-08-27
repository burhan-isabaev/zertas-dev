import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./sections/navbar";
import Footer from "./sections/footer";
import Section from "./components/section";
import Catalog from "./pages/catalog";
import ScrollToTop from "./services/scrollToTop";
import HomePage from "./pages/home-page";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageVariants}>
                <HomePage />
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
        </Routes>
      </AnimatePresence>
    </>
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
