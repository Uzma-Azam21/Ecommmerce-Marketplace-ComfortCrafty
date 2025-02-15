import { createClient } from 'next-sanity';

// Create a client instance using environment variables
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '', // Fallback to empty string if undefined
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production', // Default to 'production' if not set
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2025-01-19', // Fallback to a safe default version
  useCdn: false, // Disable CDN for real-time updates
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN ?? '', // Sanity API token from env variables
});



