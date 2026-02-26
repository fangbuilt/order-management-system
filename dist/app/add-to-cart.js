"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = addToCart;
const dummy_1 = require("../utils/dummy");
const helpers_1 = require("../utils/helpers");
function addToCart(food, quantity = 1) {
    if (!(0, helpers_1.findInMenu)(food.id)) {
        throw new Error(`"${food.name}" tidak ditemukan di menu.`);
    }
    if (!Number.isInteger(quantity) || quantity < 0) {
        throw new Error(`Quantity harus bilangan bulat non-negatif. Diterima: ${quantity}`);
    }
    const existingIndex = (0, helpers_1.findInCart)(food.id);
    if (existingIndex === -1) {
        const newItem = { ...food, quantity };
        dummy_1.cart.push(newItem);
        console.log(`Tambah Baru: ${quantity} ${food.name} sudah berhasil ditambahkan ke keranjang`);
        return newItem;
    }
    const existing = dummy_1.cart[existingIndex];
    const updatedItem = {
        ...existing,
        quantity: existing.quantity + quantity,
    };
    dummy_1.cart[existingIndex] = updatedItem;
    console.log(`Update: +${quantity} ${food.name} → total ${updatedItem.quantity} di keranjang`);
    return updatedItem;
}
//# sourceMappingURL=add-to-cart.js.map