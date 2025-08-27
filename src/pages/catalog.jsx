import { useEffect, useState } from "react";
import CatalogService from "../services/catalogService";
import CatalogHero from "../sections/catalog-hero";
import CatalogItem from "../components/catalog-item";
import Loader from "../components/loader";

function Catalog() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    CatalogService.fetchCatalogItems()
      .then((items) => {
        setItems(items);
      })
      .catch((error) => {
        console.error("Error fetching catalog items:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <CatalogHero />

      {items.length === 0 && !loading && (
        <div className="flex justify-center items-center h-[80vh]">
          <h1>Нет доступных товаров в каталоге.</h1>
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center h-[80vh]">
          <Loader />
        </div>
      )}

      {!loading && (
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-baseline py-8 gap-8">
          {items.map((item) => (
            <CatalogItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;
