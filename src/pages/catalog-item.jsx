import { useParams } from "react-router-dom";

function CatalogItem() {
  const { itemId } = useParams();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Catalog Item Details</h1>
      <p className="text-lg">You are viewing details for item ID: {itemId}</p>
      <p className="text-gray-500">
        This is where you would fetch and display the details for the item with
        ID {itemId}.
      </p>
      <p className="text-gray-500">
        Implement the logic to fetch item details from your service here.
      </p>
      <p className="text-gray-500">
        For example, you might call a service like
        CatalogService.fetchItemById(itemId) to get the item details.
      </p>
      <p className="text-gray-500">
        Then, display the item's name, description, images, and any other
        relevant information.
      </p>
    </div>
  );
}

export default CatalogItem;
