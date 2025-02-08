import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanityHelper"; // Import Sanity Client

// Create a builder to generate image URLs
const builder = imageUrlBuilder(sanityClient);

// Function to get the image URL from the Sanity image object
export function sanityImageUrl(source: any) {
  return builder.image(source).width(500).height(500).url(); // Convert to URL
}
