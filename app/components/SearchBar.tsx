"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/product" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
  { name: "FAQ", href: "/FAQ" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [filteredNavLinks, setFilteredNavLinks] = useState(NAV_LINKS);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Fetch products from Sanity
  const fetchProducts = async (query: string) => {
    if (!query) return;

    const searchQuery = groq`*[_type == "products" && title match $search] {
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }`;

    try {
      const results = await client.fetch(searchQuery, { search: `${query}*` });
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle search input
  const handleSearch = (value: string) => {
    setQuery(value);
    if (value) {
      fetchProducts(value);
      setFilteredNavLinks(
        NAV_LINKS.filter((link) =>
          link.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
      setFilteredNavLinks(NAV_LINKS);
    }
    setActiveIndex(0);
  };

  // Handle navigation
  const handleNavigation = (url: string) => {
    router.push(url); // Navigate correctly
    setQuery(""); // Clear search bar
    setSearchResults([]);
    setFilteredNavLinks(NAV_LINKS);
  };

  //  Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalResults = filteredNavLinks.length + searchResults.length;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % totalResults);
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev - 1 + totalResults) % totalResults);
    } else if (e.key === "Enter") {
      if (activeIndex < filteredNavLinks.length) {
        handleNavigation(filteredNavLinks[activeIndex].href);
      } else {
        const productIndex = activeIndex - filteredNavLinks.length;
        handleNavigation(`/product/${searchResults[productIndex]._id}`);
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
        setFilteredNavLinks(NAV_LINKS);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for products or pages..."
          className="w-full px-4 py-2 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
      </div>

      {/* Search Results Dropdown */}
      {query && (searchResults.length > 0 || filteredNavLinks.length > 0) && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto z-50"
        >
          {/* Navigation Links Results */}
          {filteredNavLinks.length > 0 && (
            <ul className="border-b">
              {filteredNavLinks.map((link, index) => (
                <li
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index === activeIndex ? "bg-gray-200" : ""}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          )}

          {/* Product Search Results */}
          {searchResults.map((product, index) => (
            <div
              key={product._id}
              onClick={() => handleNavigation(`/product/${product._id}`)}
              className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 ${index + filteredNavLinks.length === activeIndex ? "bg-gray-200" : ""}`}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="font-medium">{product.title}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
