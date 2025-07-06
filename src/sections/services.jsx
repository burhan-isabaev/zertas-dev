import SectionHeader from "../components/section-header";

const services = [
  {
    name: "Кухни",
    href: "/services/kitchens",
    image: "/kitchen.jpg",
  },
  {
    name: "Ванные",
    href: "/services/bathrooms",
    image:
      "https://cdn.prod.website-files.com/6687bb58d107108aa401e5db/6695112d830f10a69f41c132_pexels-heyho-6284231.webp",
  },
  {
    name: "Гостиные",
    href: "/services/furniture",
    image: "/livingroom.jpg",
  },
  {
    name: "Спальни",
    href: "/services/bedrooms",
    image: "/bedroom.jpg",
  },
  {
    name: "Другие",
    href: "/services/buildings",
    image: "/custom.jpg",
  },
];

export default function Services() {
  return (
    <section className="w-full overflow-hidden lg:px-20 py-32">
      <div className="flex justify-between items-center pb-12">
        <SectionHeader text="Каталог" />
        <a
          href="/services"
          className="hidden mt-2 lg:inline-flex items-center text-sm font-medium hover:text-[#a97c50] transition"
        >
          Смотреть весь каталог
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 ml-1"
            viewBox="0 0 16 16"
          >
            <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
          </svg>
        </a>
      </div>

      <div className="flex flex-col lg:flex-row h-[1500px] lg:h-[600px] group gap-8">
        {services.map((service) => (
          <a
            key={service.name}
            href={service.href}
            className="flex-1 h-[300px] lg:h-full rounded-2xl group-hover:flex-[0.5] hover:flex-[1.5] transition-all duration-500 ease-in-out relative overflow-hidden"
          >
            <img
              src={service.image}
              className="w-full h-full object-cover object-center absolute inset-0"
              alt={service.name}
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 text-[#f4e6d5] z-10">
              <h3 className="text-xl font-bold">{service.name}</h3>
            </div>
          </a>
        ))}
      </div>

      <a
        href="/services"
        className="lg:hidden mt-8 inline-flex items-center text-sm font-medium hover:text-[#a97c50] transition"
      >
        Смотреть весь каталог
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-4 h-4 ml-1"
          viewBox="0 0 16 16"
        >
          <path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
        </svg>
      </a>
    </section>
  );
}
