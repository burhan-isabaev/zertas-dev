import Button from "../components/button";

const services = [
  { name: "Кухни", href: "/services/kitchens" },
  { name: "Ванные", href: "/services/bathrooms" },
  { name: "Гостиные", href: "/services/furniture" },
  { name: "Спальни", href: "/services/flooring" },
  { name: "Другие", href: "/services/buildings" },
];

export default function Cta() {
  return (
    <div
      className="pb-12"
      style={{
        background:
          "linear-gradient(180deg, var(--color--lightest) 50%, var(--color--darkest) 50%)",
      }}
    >
      <section className="relative my-0 mx-3 p-8 lg:w-fit lg:mx-20 lg:p-12 rounded-2xl overflow-hidden ">
        {/* Background Image */}
        <img
          src="https://cdn.prod.website-files.com/6687bb58d107108aa401e5aa/669e2bfdc58ba40ac89d5524_pexels-heyho-8143944%20(1).webp"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center h-full lg:px-12 text-center gap-12">
          {/* Services Links */}
          <div className="flex flex-wrap gap-3 mb-16">
            {services.map((service) => (
              <p
                key={service.name}
                className="rounded-sm border-1 border-[#eed5b9] text-[#eed5b9] text-sm px-2 py-1 lg:py-2 transition-colors duration-300 hover:bg-[#eed5b9] hover:text-black"
              >
                {service.name}
              </p>
            ))}
          </div>

          {/* Heading + Button Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-[#f4e6d5] text-3xl lg:text-4xl font-extrabold lg:w-3/5 leading-tight text-left">
              Создайте уникальный интерьер с нашими дизайнерскими гипсовыми
              панелями
            </h2>
            <div className="lg:w-1/5 flex items-start lg:items-end lg:justify-end">
              <Button
                link="https://wa.me/77754587948?text=Здравствуйте!%0AЯ%20пишу%20вам%20с%20сайта%20и%20хочу%20узнать%20подробнее%20о%20ваших%20услугах."
                text="Сделать заказ"
                isLight
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
