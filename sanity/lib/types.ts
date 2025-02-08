export interface Product {
    _id: string;
    title: string;
    price: number;
    priceWithoutDiscount?: number;
    badge?: string;
    imageUrl: string;
    description: string;
    inventory: number;
    tags?: string[];
  }
  
  export interface Category {
    _id: string;
    title: string;
    imageUrl: string;
    products?: number; // Number of products
  }
  