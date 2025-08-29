import Instagram from "../components/instagram";
import Whatsapp from "../components/whatsapp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3e3128] text-[#f4e6d5] px-6 lg:px-20 pt-24 pb-16">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-6">
            <a href="/" className="shrink-0">
              <img
                src="/logo-light.svg"
                alt="Logo"
                className="h-10 text-[#f4e6d5]"
              />
            </a>
            <div className="h-8 w-px bg-[#f4e6d5] opacity-50" />
            <p className="text-sm opacity-80 max-w-xs">
              Уникальные 3D панели, вдохновляющие пространство
            </p>
          </div>
          <div className="flex lg:gap-4 lg:flex-1 lg:justify-start lg:items-center">
            <div className="w-fit flex gap-4">
              <Whatsapp />
              <Instagram />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-16 lg:justify-end">
          <div>
            <h4 className="text-base font-semibold text-[#eed5b9] mb-4">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-[#e1af87] transition" to="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "about" }}
                  className="hover:text-[#e1af87] transition"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "portfolio" }}
                  className="hover:text-[#e1af87] transition"
                >
                  Наши работы
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#e1af87] transition" to="/catalog">
                  Каталог
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="mt-24 flex flex-col lg:flex-row justify-between items-center text-xs gap-4 border-t border-[#eed5b9]/20 pt-8">
        <div>@{new Date().getFullYear()} Zertas.</div>
      </div>
    </footer>
  );
};

export default Footer;
