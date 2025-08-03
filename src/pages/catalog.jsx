import { useEffect, useState } from "react";
import CatalogService from "../services/catalogService";
import CatalogHero from "../sections/catalog-hero";
import CatalogItem from "../components/catalog-item";
import Loader from "../components/loader";

function Catalog() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    CatalogService.fetchCatalogItems()
      .then((items) => {
        console.log("Catalog items fetched:", items);
        setItems(items);
      })
      .catch((error) => {
        console.error("Error fetching catalog items:", error);
      })
      .finally(() => {
        console.log("Catalog items fetch attempt completed");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <CatalogHero />

      {loading && (
        <div className="flex justify-center items-center h-[80vh]">
          <Loader />
        </div>
      )}

      {!loading && (
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center py-8 gap-8">
          {items.map((item) => (
            <CatalogItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalog;
