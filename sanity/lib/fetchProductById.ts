import { client } from "./client";

export const fetchProductById = async (productId: string) => {
  const query = `*[_type == "products" && _id == $productId][0] {
    _id,
    title,
    price,
    description,
    inventory,
    "imageUrl": image.asset->url
  }`;

  try {
    const product = await client.fetch(query, { productId });
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

