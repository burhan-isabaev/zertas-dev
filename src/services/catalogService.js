export default class CatalogService {
  static async fetchCatalogItems() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch catalog items:", error);
      throw error;
    }
  }
}
