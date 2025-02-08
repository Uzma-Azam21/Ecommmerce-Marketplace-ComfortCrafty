import { client } from "./client";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
  inventory: number;
}

// Fetch products by category ID
export const fetchCategoryProductsById = async (categoryId: string): Promise<Product[]> => {
  const query = `
    *[_type == "products" && category._ref == $categoryId]{
      _id,
      title,
      price,
      badge,
      inventory,
      "imageUrl": image.asset->url
    }
  `;

  try {
    const products = await client.fetch<Product[]>(query, { categoryId });
    return products;
  } catch (error) {
    console.error(`Error fetching products for category ID ${categoryId}:`, error);
    return [];
  }
};

