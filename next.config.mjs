const nextConfig = {
    images: {
      domains: ["cdn.sanity.io"], // Allow Sanity images
    },
    trailingSlash: true, // Fix potential 404 issues
    async rewrites() {
      return [
        {
          source: "/cart",
          destination: "/cart/",
        },
      ];
    },
  };
  
  export default nextConfig;
  