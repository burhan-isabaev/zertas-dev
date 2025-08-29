import { useState } from "react";
import SectionHeader from "../components/section-header";
import Button from "../components/button";
import Download from "../icons/download";
import Loader from "../components/loader";

const CatalogItem = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const message = `Здравствуйте!%0AЯ пишу вам с сайта и хочу узнать подробнее о товаре ${item.article}`;

  return (
    <div className="border p-4 border-[#e6ba92] rounded-xl lg:max-w-sm w-full min-h-[700px]">
      <div className="flex flex-col justify-between gap-8 h-full">
        <div>
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Show loader until image is loaded */}
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center rounded-xl">
                <Loader />
              </div>
            )}

            <img
              src={item.images[0]["image"]}
              alt={item.article}
              className={`aspect-square object-cover w-full rounded-xl mx-auto transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>

          <div className="mt-4 flex w-full">
            <div className="w-full space-y-3 mb-5 lg:mb-0 z-10">
              <SectionHeader text={item.title} />
              <h1 className="text-2xl lg:text-2xl font-bold">{item.article}</h1>
              {Object.keys(item.parametrs).map((param, index) => (
                <div key={index}>
                  <h1 className="text-[#80756e]">
                    {param.charAt(0).toUpperCase() + param.slice(1)}:
                  </h1>
                  <h1 className="text-xl">{item.parametrs[param]}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            text={"сделать заказ"}
            link={`https://wa.me/77754587948?text=${message}`}
          />
          <Button
            text={<Download className="w-5 h-5 text-[#3e3128]" />}
            link={item.model_link}
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
