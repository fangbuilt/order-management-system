export type Status = "PAID" | "WAITING PAYMENT" | "PROCESS";
export interface FoodItem {
    id: string;
    name: string;
    price: number;
    tags: string[];
}
export interface CartItem extends FoodItem {
    quantity: number;
}
export interface TransactionData {
    tanggal: string;
    totalAwal: number;
    potongan: number;
    bayar: number;
    status: Status;
}
//# sourceMappingURL=types.d.ts.map