import Badge from "@/components/ui/Bagde";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  previousPrice?: number;
  isNewProduct?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { id, name, price, imageUrl, previousPrice, isNewProduct, isOnSale } =
    product;

  return (
    <div className="relative group rounded-lg bg-white shadow-md" key={id}>
      <div className="relative aspect-square overflow-hidden rounded-lg">
        {isNewProduct && (
          <Badge variant="green" className="absolute top-3 left-3">
            New
          </Badge>
        )}
        {isOnSale && (
          <Badge variant="orange" className="absolute top-3 left-3">
            Sale
          </Badge>
        )}
        <Link href={`/product/${id}`} aria-label={`View details for ${name}`}>
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            {previousPrice && (
              <span className="line-through text-sm text-gray-500">
                ${previousPrice}
              </span>
            )}
          </div>
        </div>
        <button
          className="p-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition"
          aria-label={`Add ${name} to shopping cart`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const InstagramSection = () => {
  const images = [
    "/c2.png",
    "/c3.png",
    "/p2.png",
    "/p1.png",
    "/p3.png",
    "/c1.png",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email Address...
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="block w-full sm:w-96 p-2 border rounded border-gray-300"
            />
          </div>
          <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            SUBMIT
          </button>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          Follow Us on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`Instagram image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AllProductsPage() {
  const productList: Product[] = [
    {
      id: 1,
      name: "LIbrary Stool Chair",
      price: 20,
      imageUrl: "/p1.png",
      isNewProduct: true,
    },
    {
      id: 2,
      name: "LIbrary Stool Chair",
      price: 20,
      previousPrice: 30,
      imageUrl: "/p2.png",
      isOnSale: true,
    },
    { id: 3, name: "LIbrary Stool Chair", price: 20, imageUrl: "/p3.png" },
    { id: 4, name: "LIbrary Stool Chair", price: 20, imageUrl: "/p4.png" },
    {
      id: 5,
      name: "LIbrary Stool Chair",
      price: 20,
      imageUrl: "/c2.png",
      isNewProduct: true,
    },
    {
      id: 6,
      name: "LIbrary Stool Chair",
      price: 20,
      previousPrice: 30,
      imageUrl: "/p5.png",
      isOnSale: true,
    },
    { id: 7, name: "LIbrary Stool Chair", price: 20, imageUrl: "/p6.png" },
    { id: 8, name: "LIbrary Stool Chair", price: 20, imageUrl: "/p1.png" },
    { id: 9, name: "LIbrary Stool Chair", price: 20, imageUrl: "/c3.png" },
    { id: 10, name: "LIbrary Stool Chair", price: 20, imageUrl: "/p2.png" },
    { id: 11, name: "LIbrary Stool Chair", price: 20, imageUrl: "/p3.png" },
    { id: 12, name: "LIbrary Stool Chair", price: 20, imageUrl: "/c1.png" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Our Products</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <InstagramSection />
    </main>
  );
}
