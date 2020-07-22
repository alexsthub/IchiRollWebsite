export function priceToString(price) {
  return `$${(price / 100).toFixed(2)}`;
}
