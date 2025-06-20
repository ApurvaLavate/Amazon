// Remove: export let cart = JSON.parse(localStorage.getItem('cart')) ...
// Instead:

export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveToStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  const cart = getCart();
  let matchingItem = cart.find((item) => item.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  saveToStorage(cart);
}

export function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.productId !== productId);
  saveToStorage(cart);
}
