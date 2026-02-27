import { cart, menu } from "./dummy";
export const formatRupiah = (amount) => `Rp ${amount.toLocaleString("id-ID")}`;
export const formatDate = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
export const findInMenu = (id) => menu.find((f) => f.id === id);
export const findInCart = (id) => cart.findIndex((c) => c.id === id);
export const getSubtotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
export const getDiscount = (subtotal) => {
    if (subtotal >= 200_000)
        return Math.round(subtotal * 0.15);
    if (subtotal >= 100_000)
        return Math.round(subtotal * 0.1);
    return 0;
};
export const getDiscountPercent = (subtotal) => {
    if (subtotal >= 200_000)
        return 15;
    if (subtotal >= 100_000)
        return 10;
    return 0;
};
//# sourceMappingURL=helpers.js.map