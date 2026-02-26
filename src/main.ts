import { addToCart } from "./app/add-to-cart";
import { processCheckout } from "./app/process-checkout";
import { cart, menu } from "./utils/dummy";

addToCart(menu[0]!, 4); // Nasi Goreng Spesial x4 = 100.000
addToCart(menu[2]!, 2); // Es Teh Manis x2 = 10.000
// Subtotal: 110.000 → diskon 10%

console.log("\n[Cart State]");
console.log(cart);

processCheckout();
