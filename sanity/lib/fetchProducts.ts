import { client } from "./client";

export const fetchProducts = async () => {
  const query = `*[_type == "products"] {
    _id,
    title,
    price,
    badge,
    inventory,
    "imageUrl": image.asset->url
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
