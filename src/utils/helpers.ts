import { cart, menu } from "./dummy";
import type { FoodItem } from "./types";

export const formatRupiah = (amount: number): string =>
  `Rp ${amount.toLocaleString("id-ID")}`;

export const formatDate = (date: Date): string =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const findInMenu = (id: string): FoodItem | undefined =>
  menu.find((f) => f.id === id);

export const findInCart = (id: string): number =>
  cart.findIndex((c) => c.id === id);

export const getSubtotal = (): number =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getDiscount = (subtotal: number): number => {
  if (subtotal >= 200_000) return Math.round(subtotal * 0.15);
  if (subtotal >= 100_000) return Math.round(subtotal * 0.1);
  return 0;
};

export const getDiscountPercent = (subtotal: number): number => {
  if (subtotal >= 200_000) return 15;
  if (subtotal >= 100_000) return 10;
  return 0;
};
