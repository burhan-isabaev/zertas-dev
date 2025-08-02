import { useState } from "react";
import BurgerMenu from "../components/burger-menu";
import Button from "../components/button";
import Instagram from "../components/instagram";
import Whatsapp from "../components/whatsapp";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id, offset) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navbar Bar */}
      <div className="fixed z-[100] left-[12px] right-[12px] bg-[#f4e6d5] px-4 py-3 flex justify-between items-center border border-[#eed5b9] rounded-xl font-secondary lg:px-16 lg:m-3">
        <div className="lg:flex-1">
          <Link to="/">
            <img src="/logo.svg" alt="Zertas" className="w-10 h-10" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-8 lg:flex-1 lg:justify-center lg:items-center whitespace-nowrap">
          <Link className="hover:text-[#e1af87] transition" to="/">
            Главная
          </Link>
          <Link className="hover:text-[#e1af87] transition" to="#about">
            О нас
          </Link>
          <Link className="hover:text-[#e1af87] transition" to="#portfolio">
            Наши работы
          </Link>
          <Link className="hover:text-[#e1af87] transition" to="/catalog">
            Каталог
          </Link>
        </div>

        {/* Desktop Icons + CTA */}
        <div className="hidden lg:flex lg:gap-4 lg:flex-1 lg:justify-end lg:items-center">
          <div className="w-fit flex gap-4 mx-4">
            <Whatsapp />
            <Instagram />
          </div>
          <Button text={"сделать заказ"} link="/" />
        </div>

        {/* Burger */}
        <div className="lg:hidden block">
          <BurgerMenu
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            active={isMobileMenuOpen}
          />
        </div>
      </div>

      <div
        className={`fixed z-[90] top-[100px] left-[12px] right-[12px] bg-[#f4e6d5] overflow-hidden transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } shadow-md rounded-xl px-6 py-4`}
      >
        <ul className="space-y-4 text-base font-secondary">
          <li>
            <Link
              to="/"
              className="block hover:text-[#e1af87] transition"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("", 0);
              }}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              className="block hover:text-[#e1af87] transition"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("about", 70);
              }}
            >
              О нас
            </Link>
          </li>
          <li>
            <Link
              to="#portfolio"
              className="block hover:text-[#e1af87] transition"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("portfolio", 100);
              }}
            >
              Наши работы
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              className="block hover:text-[#e1af87] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Каталог
            </Link>
          </li>
          <li>
            <Link to="/" className="block hover:text-[#e1af87] transition">
              Сделать заказ
            </Link>
          </li>
          <li className="flex gap-4 pt-2">
            <Whatsapp />
            <Instagram />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
