import { client } from "./client";

// Fetch function to get featured products
export const fetchFeaturedProducts = async () => {
  const query = `
    *[_type == "products" && "featured" in tags][0..7]{
      _id,
      title,
      price,
      badge,
      inventory,
      "imageUrl": image.asset->url 
    }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
};
