interface FoodItem {
  id: string;
  name: string;
  price: number;
  tags: string[]; // Contoh: ["Pedas", "Vegetarian"]
}

const menu: FoodItem[] = [
  { id: "M1", name: "Nasi Goreng Spesial", price: 25000, tags: ["Populer"] },
  { id: "M2", name: "Mie Ayam Jamur", price: 20000, tags: ["Favorit"] },
  { id: "M3", name: "Es Teh Manis", price: 5000, tags: ["Dingin"] },
];

interface CartItem {
  food: FoodItem;
  qty: number;
}

interface Cart {
  items: CartItem[];
}

const cart: Cart = { items: [] };

const existingCartItem = (id: string) =>
  cart.items.findIndex((item) => item.food.id === id);

function addToCart(food: FoodItem, qty: number = 1): CartItem {
  const itemIndex = existingCartItem(food.id);

  if (itemIndex === -1) {
    const newItem = { food, qty };
    cart.items.push(newItem);
    return newItem;
  }

  const updatedItem = {
    ...cart.items[itemIndex],
    qty: cart.items[itemIndex].qty + qty,
  };

  cart.items[itemIndex] = updatedItem;

  return updatedItem;
}
