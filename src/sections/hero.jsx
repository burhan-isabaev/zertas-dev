import { Link } from "react-router-dom";
import Button from "../components/button";
import SectionHeader from "../components/section-header";

function Hero() {
  return (
    <div className="relative w-full h-[calc(100vh-24px)]">
      <img
        src="/hero-section.jpg"
        alt="Zertas панели"
        className="w-full h-full object-cover rounded-xl"
      />

      <div
        className="absolute inset-0 bg-black/50 rounded-xl"
        aria-hidden="true"
      />

      <div className="absolute mt-40 inset-0 flex items-end lg:items-center px-6 lg:px-20 ">
        <div className="max-w-5xl space-y-6 mb-5 lg:mb-0 z-10">
          <SectionHeader
            text={"Дизайнерские гипсовые панели от Zertas · Астана"}
            isLight
          />

          <h1 className="text-3xl lg:text-6xl font-bold text-[#f4e6d5]">
            Уникальные 3D панели, вдохновляющие пространство
          </h1>

          <p className="text-md max-w-2xl text-[#f4e6d5] text-justify">
            Более 1000 довольных клиентов по всей стране доверяют нашему
            качеству, стилю и вниманию к деталям.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button text={"Получить консультацию"} link="/contact" isLight />

            <Link
              to="/catalog"
              className="relative inline-flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md hover:scale-105 transition-transform duration-300"
            >
              <div>
                <div className="text-base font-semibold mb-1 text-[#f4e6d5]">
                  Наши проекты
                </div>
                <p className="text-sm text-[#f4e6d5]">
                  Оцените разнообразие дизайнов и качество исполнения
                </p>
              </div>
              <div className="w-5 h-5 text-[#f4e6d5]">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-full h-full"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 
                        13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
