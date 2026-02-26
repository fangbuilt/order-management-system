"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCheckout = processCheckout;
const dummy_1 = require("../utils/dummy");
const helpers_1 = require("../utils/helpers");
function processCheckout() {
    if (dummy_1.cart.length === 0) {
        throw new Error("Keranjang kosong. Tambahkan item sebelum checkout.");
    }
    const subtotal = (0, helpers_1.getSubtotal)();
    const discount = (0, helpers_1.getDiscount)(subtotal);
    const total = subtotal - discount;
    const discountPercent = (0, helpers_1.getDiscountPercent)(subtotal);
    if (!Number.isInteger(total)) {
        throw new Error(`Total mengandung desimal (${total}). Periksa harga & kalkulasi diskon.`);
    }
    const tanggal = (0, helpers_1.formatDate)(new Date());
    console.log("\n--- STRUK PEMBAYARAN ---");
    dummy_1.cart.forEach((item) => {
        const lineTotal = item.price * item.quantity;
        console.log(`${item.name} x${item.quantity} = ${(0, helpers_1.formatRupiah)(lineTotal)}`);
    });
    if (discount > 0) {
        console.log(`\nSelamat! Kamu dapat diskon ${discountPercent}%: -${(0, helpers_1.formatRupiah)(discount)}`);
    }
    console.log("------------------------");
    console.log(`TOTAL AKHIR: ${(0, helpers_1.formatRupiah)(total)}`);
    console.log(`Status Pesanan: PAID`);
    const transaction = {
        tanggal,
        totalAwal: subtotal,
        potongan: discount,
        bayar: total,
        status: "PAID",
    };
    console.log("Data Transaksi:", transaction);
    return transaction;
}
//# sourceMappingURL=process-checkout.js.map