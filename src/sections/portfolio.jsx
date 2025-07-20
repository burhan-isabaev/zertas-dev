import SectionHeader from "../components/section-header";
import Button from "../components/button";

const Portfolio = () => {
  return (
    <section className="pb-16 lg:pb-18 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="flex flex-col gap-4 mt-auto">
            <SectionHeader text="Портфолио" />
            <div>
              <h1 className="text-4xl lg:text-4xl font-bold text-[#3e3128]">
                Наши работы
              </h1>
            </div>
            <div>
              <p className="text-sm">
                Наши проекты отражают уникальный подход к дизайну, использование
                премиальных материалов и внимание к каждой детали.
              </p>
            </div>
            <div>
              <Button href="/contact" text="Каталог" />
            </div>
          </div>
        </div>
        <div className="flex-4">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {new Array(18).fill(null).map((_, index) => (
              <img
                key={index}
                src={`/portfolio/${index + 1}.jpg`}
                alt={`Portfolio ${index + 1}`}
                className="w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
