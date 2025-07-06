import { useState } from "react";
import BurgerMenu from "../components/burger-menu";
import Button from "../components/button";
import Instagram from "../icons/instagram";
import WhatsApp from "../icons/whatsapp";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Bar */}
      <div className="fixed z-[100] left-[12px] right-[12px] bg-[#f4e6d5] px-4 py-3 flex justify-between items-center border border-[#eed5b9] rounded-xl font-secondary lg:px-16 lg:m-3">
        <div className="lg:flex-1">
          <a href="/">
            <img src="/logo.svg" alt="Zertas" className="w-10 h-10" />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:gap-8 lg:flex-1 lg:justify-center lg:items-center whitespace-nowrap">
          <a className="hover:text-[#e1af87] transition" href="/">
            Главная
          </a>
          <a className="hover:text-[#e1af87] transition" href="/about">
            О нас
          </a>
          <a className="hover:text-[#e1af87] transition" href="/portfolio">
            Каталог
          </a>
          <a className="hover:text-[#e1af87] transition" href="/services">
            Услуги
          </a>
        </div>

        {/* Desktop Icons + CTA */}
        <div className="hidden lg:flex lg:gap-4 lg:flex-1 lg:justify-end lg:items-center">
          <div className="w-fit flex gap-4 mx-4">
            <a href="/" className="hover:text-[#e1af87] transition">
              <WhatsApp className="w-5 h-5" />
            </a>
            <a href="/" className="hover:text-[#e1af87] transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <Button text={"сделать заказ"} link="/" />
        </div>

        {/* Burger */}
        <div className="lg:hidden block">
          <BurgerMenu onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
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
            <a href="/" className="block hover:text-[#e1af87] transition">
              Главная
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-[#e1af87] transition">
              О нас
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="block hover:text-[#e1af87] transition"
            >
              Каталог
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block hover:text-[#e1af87] transition"
            >
              Услуги
            </a>
          </li>
          <li>
            <a href="/" className="block hover:text-[#e1af87] transition">
              Сделать заказ
            </a>
          </li>
          <li className="flex gap-4 pt-2">
            <a href="/" className="hover:text-[#e1af87]">
              <WhatsApp className="w-5 h-5" />
            </a>
            <a href="/" className="hover:text-[#e1af87]">
              <Instagram className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
