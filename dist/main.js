import { addToCart } from "./app/add-to-cart";
import { processCheckout } from "./app/process-checkout";
import { cart, menu } from "./utils/dummy";
const nasiGoreng = menu.find((m) => (m.id = "M1"));
const esTehManis = menu.find((m) => (m.id = "M3"));
try {
    addToCart(nasiGoreng, 4);
    addToCart(esTehManis, 2);
}
catch (error) {
    console.error(error);
}
console.log("\n[Cart State]");
console.log(cart);
processCheckout();
//# sourceMappingURL=main.js.map