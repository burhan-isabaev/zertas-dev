import SectionHeader from "../components/section-header";

const CatalogHero = () => {
  return (
    <div className="relative w-full h-[calc(35vh-24px)]">
      <img
        src="/livingroom.jpg"
        alt="Zertas панели"
        className="w-full h-full object-cover rounded-xl"
      />

      <div
        className="absolute inset-0 bg-black/50 rounded-xl"
        aria-hidden="true"
      />
      <div className="absolute mt-40 inset-0 flex items-end lg:items-center px-6 lg:px-20 ">
        <div className="max-w-5xl space-y-2 mb-5 lg:mb-0 z-10">
          <SectionHeader text={"Каталог"} isLight />
          <h1 className="text-3xl lg:text-6xl font-bold text-[#f4e6d5]">
            Наши предложения
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CatalogHero;
