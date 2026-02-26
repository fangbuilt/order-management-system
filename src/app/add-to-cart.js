import { cart } from "../utils/dummy";
import { findInCart, findInMenu } from "../utils/helpers";
export function addToCart(food, quantity = 1) {
    if (!findInMenu(food.id)) {
        throw new Error(`"${food.name}" tidak ditemukan di menu.`);
    }
    if (!Number.isInteger(quantity) || quantity < 0) {
        throw new Error(`Quantity harus bilangan bulat non-negatif. Diterima: ${quantity}`);
    }
    const existingIndex = findInCart(food.id);
    if (existingIndex === -1) {
        const newItem = { ...food, quantity };
        cart.push(newItem);
        console.log(`Tambah Baru: ${quantity} ${food.name} sudah berhasil ditambahkan ke keranjang`);
        return newItem;
    }
    const existing = cart[existingIndex];
    const updatedItem = {
        ...existing,
        quantity: existing.quantity + quantity,
    };
    cart[existingIndex] = updatedItem;
    console.log(`Update: +${quantity} ${food.name} → total ${updatedItem.quantity} di keranjang`);
    return updatedItem;
}
