//algo:
//save the data(model)
//Generate the HTML
//make it interactive

import { getCart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export function  renderPaymentSummary(){
    const cart = getCart();
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
   }); 
}