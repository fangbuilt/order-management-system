"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscountPercent = exports.getDiscount = exports.getSubtotal = exports.findInCart = exports.findInMenu = exports.formatDate = exports.formatRupiah = void 0;
const dummy_1 = require("./dummy");
const formatRupiah = (amount) => `Rp ${amount.toLocaleString("id-ID")}`;
exports.formatRupiah = formatRupiah;
const formatDate = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
exports.formatDate = formatDate;
const findInMenu = (id) => dummy_1.menu.find((f) => f.id === id);
exports.findInMenu = findInMenu;
const findInCart = (id) => dummy_1.cart.findIndex((c) => c.id === id);
exports.findInCart = findInCart;
const getSubtotal = () => dummy_1.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
exports.getSubtotal = getSubtotal;
const getDiscount = (subtotal) => {
    if (subtotal >= 200_000)
        return Math.round(subtotal * 0.15);
    if (subtotal >= 100_000)
        return Math.round(subtotal * 0.1);
    return 0;
};
exports.getDiscount = getDiscount;
const getDiscountPercent = (subtotal) => {
    if (subtotal >= 200_000)
        return 15;
    if (subtotal >= 100_000)
        return 10;
    return 0;
};
exports.getDiscountPercent = getDiscountPercent;
//# sourceMappingURL=helpers.js.map