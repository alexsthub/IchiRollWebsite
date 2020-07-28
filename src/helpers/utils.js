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

export function addDaysToDate(currentDate, days) {
  const date = new Date(currentDate.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
