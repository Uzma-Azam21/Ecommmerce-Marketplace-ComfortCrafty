"use client";
import { create } from "zustand";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
  badge?: string;
  imageUrl: string;
  dimensions?: string | null;
}

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  wishlist: [],
  addToWishlist: (product) =>
    set((state) => ({
      wishlist: [...state.wishlist, product],
    })),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((product) => product._id !== productId),
    })),
}));
