// antes do redux saga
// export function addToCart(product) {
//   return { type: '@cart/ADD', product };
// }

// antes do redux saga
// export function addToCart(id) {
//   return { type: '@cart/ADD', id };
// }

export function addToCartRequest(id) {
  return { type: '@cart/ADD_REQUEST', id };
}

export function addToCartSuccess(product) {
  return { type: '@cart/ADD_SUCCESS', product };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
