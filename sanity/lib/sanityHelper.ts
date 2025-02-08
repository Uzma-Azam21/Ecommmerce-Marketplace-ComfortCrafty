import { client } from "./client";
import { queries } from "./query";
export { client as sanityClient };

export async function fetchSanityData() {
  try {
    const testQuery = `*[_type == "products"]{_id, title}`;
    const testData = await client.fetch(testQuery);

    console.log("Test Query Response:", testData);

    const data = await client.fetch(queries);

    console.log("Debugging Sanity Data:", JSON.stringify(data, null, 2)); //Debugging
    console.log("Products Fetched:", data.products.length);
    console.log("Categories Fetched:", data.categories.length);

    return {
      products: data.products || [],
      categories: data.categories || [],
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      products: [],
      categories: [],
    };
  }
}
