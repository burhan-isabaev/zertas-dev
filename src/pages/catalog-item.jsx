import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CatalogService from "../services/catalogService";
import Button from "../components/button";
import Loader from "../components/loader";
import SectionHeader from "../components/section-header";

function CatalogItem() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    CatalogService.fetchItemById(itemId)
      .then((res) => {
        console.log("Catalog item fetched:", res);
        setItem(res);
      })
      .catch((error) => {
        console.error("Error fetching catalog item:", error);
      })
      .finally(() => {
        console.log("Catalog item fetch attempt completed");
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  if (!item && !loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1>Произошла ошибка при загрузке товара!</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pb-24 px-4 pt-22 max-w-3xl lg:max-w-full mx-auto">
      <div className="flex lg:flex-row flex-col justify-between h-full lg:gap-16 w-full">
        <div className="w-full">
          <img
            src={item.images[0]["image"]}
            alt={item.title}
            className="aspect-square object-cover w-full rounded-xl mx-auto"
          />
        </div>
        <div className="mt-4 inset-0 flex items-end ">
          <div className="max-w-5xl space-y-6 mb-5 lg:mb-0 z-10">
            {/* <SectionHeader text={item.category.name} /> */}
            <h1 className="text-2xl lg:text-2xl font-bold">{item.title}</h1>
            {/* <p className="lg:mb-4">{item.description}</p> */}
          </div>
        </div>
      </div>
      <div className="fixed z-[100] left-[12px] right-[12px] bottom-[12px] bg-[#f4e6d5] px-4 py-3 flex justify-between items-center border border-[#eed5b9] rounded-xl font-secondary lg:px-16 lg:m-3">
        <div className="w-full flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-smx` py-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Назад
          </button>
          <Button text="Сделать заказ" link="/" />
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
