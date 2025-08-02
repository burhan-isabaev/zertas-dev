import SectionHeader from "../components/section-header";
import Button from "../components/button";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-32 lg:px-20">
      <div className="flex flex-col">
        <div className="mb-4 lg:mb-6">
          <SectionHeader text="О нас" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-0 mb-16 lg:mb-18">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#3e3128]">
              Преображаем стены в <br />
              <span className="text-[#89684f]">произведения искусства</span>
            </h1>
          </div>
          <div>
            <Button href="/contact" text="Сделать заказ" />
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1">
            <img
              src="/livingroom.jpg"
              alt="about us"
              className="aspect-video lg:w-full lg:h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#eed5b9] p-2">
                  <img src="/about1.svg" alt="1" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    Инновационный дизайн
                  </h1>
                </div>
                <div>
                  <p>
                    Мы создаём уникальные концепции панелей, которые сочетают
                    современную эстетику и вечную элегантность.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#eed5b9] p-2">
                  <img src="/about2.svg" alt="1" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    Премиальные материалы
                  </h1>
                </div>
                <div>
                  <p>
                    Наши панели изготавливаются из высококачественных и прочных
                    материалов, гарантируя долговечность и красоту.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#eed5b9] p-2">
                  <img src="/about3.svg" alt="1" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    Индивидуальные решения
                  </h1>
                </div>
                <div>
                  <p>
                    Мы разрабатываем панели по вашим размерам и пожеланиям,
                    чтобы стены отражали ваш стиль и характер.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#eed5b9] p-1">
                  <img src="/about4.svg" alt="1" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    Мастерское исполнение
                  </h1>
                </div>
                <div>
                  <p>
                    Каждая панель создаётся опытными мастерами с вниманием к
                    деталям и безупречным качеством отделки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
