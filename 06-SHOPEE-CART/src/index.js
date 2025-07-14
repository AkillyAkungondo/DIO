import * as cartService from './services/cart.js';
import { createItem } from './services/item.js';
const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart! \n");

const item1 = await createItem("RedBull Formula 1 team RC car", 79, 5);
const item2 = await createItem("RedBull Formula 1 team T-shirt", 29, 2);
const item3 = await createItem("RedBull Formula 1 team cap", 19, 1);
const item4 = await createItem("RedBull Formula 1 team mug", 9, 3);


// console.log("Item: " + item1.name + " price: $" + item1.price + ", quantity: " + item1.quantity);
// console.log("Item: " + item2.name + " price: $" + item2.price + ", quantity: " + item2.quantity);
// console.log("Item: " + item3.name + " price: $" + item3.price + ", quantity: " + item3.quantity);
// console.log("Item: " + item4.name + " price: $" + item4.price + ", quantity: " + item4.quantity);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myWishList, item4);

await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);

await cartService.displayCart(myCart)
// await cartService.displayWishList(myWishList);

// await cartService.deleteItem(myCart, item3.name);


await cartService.calculateTotal(myCart);
