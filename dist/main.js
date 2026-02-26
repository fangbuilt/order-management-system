"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_to_cart_1 = require("./app/add-to-cart");
const process_checkout_1 = require("./app/process-checkout");
const dummy_1 = require("./utils/dummy");
(0, add_to_cart_1.addToCart)(dummy_1.menu[0], 4); // Nasi Goreng Spesial x4 = 100.000
(0, add_to_cart_1.addToCart)(dummy_1.menu[2], 2); // Es Teh Manis x2 = 10.000
// Subtotal: 110.000 → diskon 10%
console.log("\n[Cart State]");
console.log(dummy_1.cart);
(0, process_checkout_1.processCheckout)();
//# sourceMappingURL=main.js.map