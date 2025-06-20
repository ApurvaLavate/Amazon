// Get cart from localStorage or return empty array if not found
export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveToStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart or increase quantity if already in cart
export function addToCart(productId) {
  const cart = getCart();
  let matchingItem = cart.find((item) => item.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage(cart);
}

// Remove product from cart
export function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.productId !== productId);
  saveToStorage(cart);
}

// Update delivery option for a specific product
export function updateDeliveryOption(productId, deliveryOptionId) {
  const cart = getCart();
  let matchingItem = cart.find((item) => item.productId === productId);
  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
  }
  saveToStorage(cart); // ✅ this is the correct call
}
