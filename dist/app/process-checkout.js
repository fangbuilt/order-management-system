import { cart } from "../utils/dummy";
import { formatDate, formatRupiah, getDiscount, getDiscountPercent, getSubtotal, } from "../utils/helpers";
export function processCheckout() {
    if (cart.length === 0) {
        throw new Error("Keranjang kosong. Tambahkan item sebelum checkout.");
    }
    const subtotal = getSubtotal();
    const discount = getDiscount(subtotal);
    const total = subtotal - discount;
    const discountPercent = getDiscountPercent(subtotal);
    if (!Number.isInteger(total)) {
        throw new Error(`Total mengandung desimal (${total}). Periksa harga & kalkulasi diskon.`);
    }
    const tanggal = formatDate(new Date());
    console.log("\n--- STRUK PEMBAYARAN ---");
    cart.forEach((item) => {
        const lineTotal = item.price * item.quantity;
        console.log(`${item.name} x${item.quantity} = ${formatRupiah(lineTotal)}`);
    });
    if (discount > 0) {
        console.log(`\nSelamat! Kamu dapat diskon ${discountPercent}%: -${formatRupiah(discount)}`);
    }
    console.log("------------------------");
    console.log(`TOTAL AKHIR: ${formatRupiah(total)}`);
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