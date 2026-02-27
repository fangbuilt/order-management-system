import type { FoodItem } from "./types";
export declare const formatRupiah: (amount: number) => string;
export declare const formatDate: (date: Date) => string;
export declare const findInMenu: (id: string) => FoodItem | undefined;
export declare const findInCart: (id: string) => number;
export declare const getSubtotal: () => number;
export declare const getDiscount: (subtotal: number) => number;
export declare const getDiscountPercent: (subtotal: number) => number;
//# sourceMappingURL=helpers.d.ts.map