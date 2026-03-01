import type { CartItem, FoodItem } from "./types";

export const menu: FoodItem[] = [
  { id: "M1", name: "Nasi Goreng Spesial", price: 25000, tags: ["Populer"] },
  { id: "M2", name: "Mie Ayam Jamur", price: 20000, tags: ["Favorit"] },
  { id: "M3", name: "Es Teh Manis", price: 5000, tags: ["Dingin"] },
];

export const cart: CartItem[] = [];
