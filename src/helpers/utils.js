import { clients } from "wix-restaurants-js-sdk";

export function priceToString(price) {
  return `$${(price / 100).toFixed(2)}`;
}

export async function getRestaurantDetails() {
  const organizationId = "258553461683418";
  const rest = clients.createRestClient();
  const restaurantDetails = await rest(`/organizations/${organizationId}`);
  return restaurantDetails;
}

export async function getMenuDetails() {
  const organizationId = "258553461683418";
  const rest = clients.createRestClient();
  const menu = await rest(`/organizations/${organizationId}/menu`);
  return menu;
}

export function addDaysToDate(currentDate, days) {
  const date = new Date(currentDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export function getDayOfWeek(date) {
  let dayOfWeek = date.getDay() - 1;
  if (dayOfWeek < 0) dayOfWeek = 6;
  return dayOfWeek;
}

export function calculateSubtotal(cart) {
  if (cart.length === 0) return 0;
  let subtotal = 0;
  cart.forEach((itemObj) => {
    const price = itemObj.item.price;
    const quantity = itemObj.quantity;
    const itemTotal = price * quantity;
    subtotal += itemTotal;
  });
  return subtotal;
}

export function calculateTax(subtotal, TAX_RATE) {
  return subtotal * TAX_RATE;
}
