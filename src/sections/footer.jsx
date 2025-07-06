const services = [
  { name: "Кухни", href: "/services/kitchens" },
  { name: "Ванные", href: "/services/bathrooms" },
  { name: "Мебель", href: "/services/furniture" },
  { name: "Полы", href: "/services/flooring" },
  { name: "Здания", href: "/services/buildings" },
];

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
        </div>

        <div className="flex-1 flex flex-wrap gap-16 lg:justify-end">
          <div>
            <h4 className="text-base font-semibold text-[#eed5b9] mb-4">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#eed5b9] transition">
                  Главная
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#eed5b9] transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="/catalog" className="hover:text-[#eed5b9] transition">
                  Каталог
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#eed5b9] transition">
                  Услуги
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#eed5b9] transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-[#eed5b9] mb-4">
              Каталог
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="hover:text-[#eed5b9] transition">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="mt-24 flex flex-col lg:flex-row justify-between items-center text-xs gap-4 border-t border-[#eed5b9]/20 pt-8">
        <div>@{new Date().getFullYear()} Zertas. Все права защищены</div>
      </div>
    </footer>
  );
};

export default Footer;
