"use client";
import { create } from "zustand";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  priceWithoutDiscount?: number; // Original price for comparison
  inventory: number;
  badge?: string;
  imageUrl: string;
  dimensions?: { height: number; width: number; depth: number };
}

// Extend Product to include quantity
interface CartItem extends Product {
  quantity: number;
  totalPrice: number; // Track total price per product
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => {
    subtotal: number;
    discount: number;
    total: number;
    savings: number;
  }; // Return full billing details
}

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem._id === item._id
      );
      const discountPrice =
        item.badge === "Sales"
          ? item.price
          : item.priceWithoutDiscount || item.price;

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem._id === item._id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + item.quantity,
                  totalPrice:
                    (cartItem.quantity + item.quantity) * discountPrice, // Update total price per product
                }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [
            ...state.cart,
            { ...item, totalPrice: item.quantity * discountPrice },
          ],
        };
      }
    }),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity,
              totalPrice:
                quantity *
                (item.badge === "Sales"
                  ? item.price
                  : item.priceWithoutDiscount || item.price), // Update dynamically
            }
          : item
      ),
    })),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item._id !== id) })),
  clearCart: () => set({ cart: [] }),

  //  New: Get full billing details
  getTotal: () => {
    const subtotal = get().cart.reduce(
      (acc, item) =>
        acc + item.quantity * (item.priceWithoutDiscount || item.price),
      0
    );
    const total = get().cart.reduce((acc, item) => acc + item.totalPrice, 0);
    const savings = subtotal - total;
    const discount = savings > 0 ? savings : 0;

    return { subtotal, discount, total, savings };
  },
}));
