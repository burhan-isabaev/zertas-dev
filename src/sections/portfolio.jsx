import { useState } from "react";
import SectionHeader from "../components/section-header";
import Button from "../components/button";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section id="portfolio" className="pb-16 lg:pb-18 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="flex flex-col gap-4 mt-auto">
            <SectionHeader text="Портфолио" />
            <h1 className="text-4xl font-bold text-[#3e3128]">Наши работы</h1>
            <p className="text-sm">
              Наши проекты отражают уникальный подход к дизайну, использование
              премиальных материалов и внимание к каждой детали.
            </p>
            <Button href="/contact" text="Каталог" />
          </div>
        </div>

        <div className="flex-4">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {new Array(18).fill(null).map((_, index) => {
              const src = `/portfolio/${index + 1}.jpg`;
              return (
                <img
                  key={index}
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full rounded-xl object-cover cursor-pointer hover:opacity-80 transition"
                  onClick={() => openModal(src)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-70 flex items-center justify-center z-100000"
          onClick={closeModal}
        >
          <div
            className="relative rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected work"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
