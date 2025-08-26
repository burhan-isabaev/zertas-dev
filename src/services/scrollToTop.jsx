import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
