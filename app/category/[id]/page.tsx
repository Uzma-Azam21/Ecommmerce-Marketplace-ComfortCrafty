import { fetchCategoryProductsById } from "@/sanity/lib/fetchCategoryProducts";
import ProductCard from "../../components/ProductCard";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
  inventory: number;
}

interface Props {
  params: { id: string };
}

export default async function CategoryPage({ params }: Props) {
  const products: Product[] = await fetchCategoryProductsById(params.id); // Fetch by ID

  return (
    <div className="px-4 sm:px-8 md:px-48 py-8 max-w-screen-2xl m-auto">
      <h1 className="text-2xl font-bold mb-4 pl-4">Category: {params.id}</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
}
