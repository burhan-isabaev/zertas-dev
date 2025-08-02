import { useParams } from "react-router-dom";

function CatalogItem() {
  const { itemId } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Каталог: {itemId}</h1>
      {/* Fetch or show item details here */}
    </div>
  );
}

export default CatalogItem;
