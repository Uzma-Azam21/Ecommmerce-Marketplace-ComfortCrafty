// Import environment variables from .env.local
import "dotenv/config";

// Import the Sanity client to interact with the Sanity backend
import { createClient } from "@sanity/client";

// Load required environment variables
const {
  NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID
  NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset (e.g., "production")
  NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Sanity API token
  BASE_URL, // API base URL for products and categories
} = process.env;

// Check if the required environment variables are provided
if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !NEXT_PUBLIC_SANITY_AUTH_TOKEN) {
  console.error(
    "Missing required environment variables. Please check your .env.local file."
  );
  process.exit(1); // Stop execution if variables are missing
}

// Create a Sanity client instance to interact with the target Sanity dataset
const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production", // Default to "production" if not set
  useCdn: false, // Disable CDN for real-time updates
  apiVersion: "2025-01-19", // Sanity API version
  token: NEXT_PUBLIC_SANITY_AUTH_TOKEN, // API token for authentication
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    // Fetch the image from the provided URL
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${imageUrl}`);

    // Convert the image to a buffer (binary format)
    const buffer = await response.arrayBuffer();

    // Upload the image to Sanity and get its asset ID
    const uploadedAsset = await targetClient.assets.upload(
      "image",
      Buffer.from(buffer),
      {
        filename: imageUrl.split("/").pop() || "uploaded-image", // Use the file name from the URL or fallback to "uploaded-image"
      }
    );

    return uploadedAsset._id; // Return the asset ID
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null; // Return null if the upload fails
  }
}

// Validation functions for categories and products
const validateCategory = (category) => {
  if (!category.title || typeof category.title !== "string") {
    throw new Error(
      "Invalid category title. Title is required and must be a string."
    );
  }

  if (
    !category.image ||
    typeof category.image !== "string" ||
    !/^https?:\/\//i.test(category.image)
  ) {
    throw new Error("Invalid category image. Must be a valid URL.");
  }

  return true; // Validation passed
};

const validateProduct = (product) => {
  if (!product.title || typeof product.title !== "string") {
    throw new Error(
      "Invalid product title. Title is required and must be a string."
    );
  }

  if (
    !product.price ||
    typeof product.price !== "number" ||
    product.price <= 0
  ) {
    throw new Error("Invalid product price. Price must be a positive number.");
  }

  if (
    product.priceWithoutDiscount &&
    typeof product.priceWithoutDiscount !== "number"
  ) {
    throw new Error("Invalid priceWithoutDiscount. Must be a number.");
  }

  if (
    !product.image ||
    typeof product.image !== "string" ||
    !/^https?:\/\//i.test(product.image)
  ) {
    throw new Error("Invalid product image. Must be a valid URL.");
  }

  if (product.description && typeof product.description !== "string") {
    throw new Error("Invalid description. Must be a string.");
  }

  if (
    product.inventory &&
    (typeof product.inventory !== "number" || product.inventory < 0)
  ) {
    throw new Error("Invalid inventory. Must be a non-negative number.");
  }

  return true; // Validation passed
};

// Main function to migrate data from REST API to Sanity
async function migrateData() {
  console.log("Starting data migration...");

  try {
    // Fetch categories from the REST API
    const categoriesResponse = await fetch(`${BASE_URL}/api/categories`);
    if (!categoriesResponse.ok) throw new Error("Failed to fetch categories.");
    const categoriesData = await categoriesResponse.json(); // Parse response to JSON

    // Fetch products from the REST API
    const productsResponse = await fetch(`${BASE_URL}/api/products`);
    if (!productsResponse.ok) throw new Error("Failed to fetch products.");
    const productsData = await productsResponse.json(); // Parse response to JSON

    const categoryIdMap = {}; // Map to store migrated category IDs

    // Migrate categories
    for (const category of categoriesData) {
      try {
        // Validate category
        validateCategory(category);

        console.log(`Migrating category: ${category.title}`);
        const imageId = await uploadImageToSanity(category.image); // Upload category image

        // Prepare the new category object
        const newCategory = {
          _id: category._id, // Use the same ID for reference mapping
          _type: "categories",
          title: category.title,
          image: imageId
            ? { _type: "image", asset: { _ref: imageId } }
            : undefined, // Add image if uploaded
        };

        // Save the category to Sanity
        const result = await targetClient.createOrReplace(newCategory);
        categoryIdMap[category._id] = result._id; // Store the new category ID
        console.log(`Migrated category: ${category.title} (ID: ${result._id})`);
      } catch (error) {
        console.error(
          `Error migrating category "${category.title}": ${error.message}`
        );
      }
    }

    // Migrate products
    for (const product of productsData) {
      try {
        // Validate product
        validateProduct(product);

        console.log(`Migrating product: ${product.title}`);
        const imageId = await uploadImageToSanity(product.image); // Upload product image

        console.log(`Image ID for product "${product.title}": ${imageId}`);

        // Prepare the new product object
        const newProduct = {
          _id: product._id, // Use the same ID for reference mapping
          _type: "products",
          title: product.title,
          price: product.price,
          priceWithoutDiscount: product.priceWithoutDiscount || null, // Default to null if missing
          badge: product.badge || null, // Default to null if missing
          image: imageId
            ? { _type: "image", asset: { _ref: imageId } }
            : undefined, // Add image reference if uploaded
          category: {
            _type: "reference",
            _ref: categoryIdMap[product.category._id], // Use the migrated category ID
          },
          description: product.description || "", // Default to empty string if missing
          inventory: product.inventory || 0, // Default to 0 if missing
          tags: product.tags || [],
        };

        // Save the product to Sanity
        const result = await targetClient.createOrReplace(newProduct);
        console.log(`Migrated product: ${product.title} (ID: ${result._id})`);
      } catch (error) {
        console.error(
          `Error migrating product "${product.title}": ${error.message}`
        );
      }
    }

    console.log("Data migration completed successfully!");
  } catch (error) {
    console.error("Error during migration:", error.message);
    process.exit(1); // Stop execution if an error occurs
  }
}

// Start the migration process
migrateData();
