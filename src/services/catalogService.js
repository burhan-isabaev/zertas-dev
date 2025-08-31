export default class CatalogService {
  static async fetchCatalogItems() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/products/`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch catalog items:", error);
      throw error;
    }
  }
  static async fetchItemById(article) {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/api/products/by-article/${article}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch item with ID ${article}:`, error);
      throw error;
    }
  }
}
