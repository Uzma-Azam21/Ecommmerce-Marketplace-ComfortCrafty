import { fetchProducts } from "@/sanity/lib/fetchProducts";
import ProductCard from "../components/ProductCard";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
  badge?: string;
  imageUrl: string;
}

export default async function ProductsPage() {
  const products: Product[] = await fetchProducts();

  // Fix: Remove duplicates using `_id`
  const uniqueProducts = products.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p._id === product._id)
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uniqueProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
