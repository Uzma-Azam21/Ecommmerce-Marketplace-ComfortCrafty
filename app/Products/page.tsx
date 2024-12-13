import Badge from "@/components/ui/Bagde";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Refactored Product Type
interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
}

// Refactored ProductCard Component
const ProductCard = ({ product }: { product: IProduct }) => {
  const { id, title, price, image, originalPrice, isNew, isSale } = product;

  return (
    <div className="relative group rounded-lg bg-white shadow-sm" key={id}>
      <div className="aspect-square relative overflow-hidden rounded-lg">
        {isNew && (
          <Badge variant="green" className="absolute top-3 left-3">
            New
          </Badge>
        )}
        {isSale && (
          <Badge variant="orange" className="absolute top-3 left-3">
            Sale
          </Badge>
        )}
        <Link href={`/product/${id}`} aria-label={`View details of ${title}`}>
          <Image
            src={image}
            alt={title}
            height={400}
            width={400}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className="text-sm text-[#1C1B1F]">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-medium text-[#1C1B1F]">
              ${price}
            </span>
            {originalPrice && (
              <span className="line-through text-sm text-gray-500">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
        <button
          className="p-2 bg-[#00B5A5] text-white rounded-full hover:bg-[#00A294] transition"
          aria-label={`Add ${title} to cart`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// Refactored Instagram Section
const InstagramSection = () => {
  const instagramImages = [
    "/c2.png",
    "/c3.png",
    "/p2.png",
    "/p1.png",
    "/p3.png",
    "/c1.png",
  ];

  return (
    <section className="bg-[#F0F2F3] py-16">
      {/* Newsletter */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold">
          Or Subscribe to the Newsletter
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Input Section */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#8F9499] mb-2"
            >
              Email address...
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="block w-full sm:w-96 p-2 border border-gray-300 rounded"
            />
          </div>
          {/* Button */}
          <button className="px-6 py-2 bg-black text-white text-sm rounded transition hover:bg-gray-800">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-8">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg relative"
            >
              <Image
                src={image}
                alt={`Instagram product ${index + 1}`}
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

// Main AllProduct Component
export default function AllProduct() {
  const products: IProduct[] = [
    { id: 1, title: "Library Stool Chair", price: 20, image: "/p1.png", isNew: true },
    { id: 2, title: "Library Stool Chair", price: 20, originalPrice: 30, image: "/p2.png", isSale: true },
    { id: 3, title: "Library Stool Chair", price: 20, image: "/p3.png" },
    { id: 4, title: "Library Stool Chair", price: 20, image: "/p4.png" },
    { id: 5, title: "Library Stool Chair", price: 20, image: "/c2.png", isNew: true },
    { id: 6, title: "Library Stool Chair", price: 20, originalPrice: 30, image: "/p5.png", isSale: true },
    { id: 7, title: "Library Stool Chair", price: 20, image: "/p6.png" },
    { id: 8, title: "Library Stool Chair", price: 20, image: "/p1.png" },
    { id: 9, title: "Library Stool Chair", price: 20, image: "/c3.png" },
    { id: 10, title: "Library Stool Chair", price: 20, image: "/p2.png" },
    { id: 11, title: "Library Stool Chair", price: 20, image: "/p3.png" },
    { id: 12, title: "Library Stool Chair", price: 20, image: "/c1.png" },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Product Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-[#1C1B1F]">
          Our Products
        </h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Instagram Section */}
      <InstagramSection />
    </main>
  );
}
