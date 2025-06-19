export const cart =[];

//adding the products to the cart (backend process)
export function addToCart(productId){
        let matchingItem;
        cart.forEach((cartItem) => {
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
        }else{
            cart.push({
            productId:productId,
            quantity:1
        })
    }
}
