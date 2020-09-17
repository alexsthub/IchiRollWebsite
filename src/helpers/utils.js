// import { clients } from "wix-restaurants-js-sdk";

export function priceToString(price) {
  return `$${(price / 100).toFixed(2)}`;
}

export function formatPriceFloat(price) {
  return `$${price.toFixed(2)}`;
}

export function stringToPrice(priceStr) {
  return parseInt(priceStr.replace("$", "").replace(".", ""));
}

export async function getRestaurantDetails() {
  // const organizationId = "258553461683418";
  // const rest = clients.createRestClient();
  // const restaurantDetails = await rest(`/organizations/${organizationId}`);
  const restaurantDetails = {
    address: {
      city: "Seattle",
      countryCode: "US",
      formatted: "306 North 125th Street, Seattle, WA, USA",
      latLng: {
        lat: 47.71989629999999,
        lng: -122.3548733,
      },
      number: "306",
      postalCode: "98133",
      street: "North 125th Street",
    },
    contact: {
      email: "alextan785@gmail.com",
      phone: "+12063635100",
    },

    created: 1594836091726,
    currency: "USD",
    deliveriesInfo: { approximateAddresses: "disallow" },
    description: { en_US: "We have high quality Japanese food!" },
    distributorId: "8408044704064049",
    id: "258553461683418",
    locale: "en_US",
    locales: ["en_US"],
    media: {},
    modified: 1598985853903,
    openTimes: {
      weekly: [
        { minuteOfWeek: 2100, durationMins: 600 },
        { minuteOfWeek: 3540, durationMins: 600 },
        { minuteOfWeek: 4980, durationMins: 600 },
        { minuteOfWeek: 6420, durationMins: 600 },
        { minuteOfWeek: 7860, durationMins: 600 },
        { minuteOfWeek: 9300, durationMins: 540 },
      ],
    },
    paymentTypes: ["cash"],
    timezone: "America/Los_Angeles",
    title: { en_US: "Ichi Roll Wok & Teriyaki" },
    type: "restaurant",
  };
  return restaurantDetails;
}

export async function getMenuDetails() {
  // const organizationId = "258553461683418";
  // const rest = clients.createRestClient();
  // const menu = await rest(`/organizations/${organizationId}/menu`);
  const menu = {
    modified: 1599598157603,
    items: [
      {
        id: "b1950516-e5a1-410f-ac6e-52458d21faf0",
        title: {
          en_US: "Beef Fried Rice",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_57574f1f87b4497eb57c41a8c7ee4a14~mv2.jpg",
        },
      },
      {
        id: "fc5a3e1a-b0b7-4f45-ac87-fbad39c0ab51",
        title: {
          en_US: "Shrimp Fried Rice",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_086a8cf3f97c41a385e2eaa6815065d2~mv2.jpg",
        },
      },
      {
        id: "b35080c9-0659-4eb6-a62b-fc0856948f4a",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 800,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_d4a05e495d55411e8d31a593cd59e062~mv2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:00:28.666Z","type":"dish"}}',
        },
      },
      {
        id: "af33528a-1d30-410c-8097-615a53bc0608",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1300,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_4a621de380704f7c8563bcdbe48e8412~mv2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:00:30.680Z","type":"dish"}}',
        },
      },
      {
        id: "4c051b5b-a6cd-4630-89fc-2562f0781b53",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1500,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_4785e2146e3f47358693759047f71537~mv2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:00:32.305Z","type":"dish"}}',
        },
      },
      {
        id: "a40add75-29ba-467c-af8d-b34704920a81",
        title: {
          en_US: "Tofu Stir Fry",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_b4d8c912fee548c095f879eb6b385e2b~mv2_d_4256_2832_s_4_2.jpg",
        },
      },
      {
        id: "4a0aaf6f-2ba2-4034-a5be-ea16ed081f85",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1200,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_8c0532f3348c4e9589418508f3ea4e1f~mv2_d_6720_4480_s_4_2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:02:20.773Z","type":"dish"}}',
        },
      },
      {
        id: "e36aa10a-0367-4a28-ab65-3988d28fd8e4",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1300,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_bac0d22dba324ed6ad3feeb2e1f323d6~mv2_d_6000_4000_s_4_2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:02:30.754Z","type":"dish"}}',
        },
      },
      {
        id: "9e7f53f8-56e6-4574-8284-d9193f80dd0a",
        title: {
          en_US: "300 gr",
        },
        description: {},
        price: 300,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "30cd9fe3-28a0-4b62-88c7-54b487de14ee",
        title: {
          en_US: "400 gr",
        },
        description: {},
        price: 500,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "c2c97807-6758-4579-a996-d9be70392136",
        title: {
          en_US: "150 gr",
        },
        description: {},
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "5ef807f6-57fe-4481-8db4-1ebb2cfec7bd",
        title: {
          en_US: "Pecorino cheese",
        },
        description: {},
        price: 250,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "5c55ee5f-0113-4524-9c7b-d55bfdb71266",
        title: {
          en_US: "Porcini mushrooms",
        },
        description: {},
        price: 300,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "1103b3ae-c8f7-4b83-8d69-c64426f2bb48",
        title: {
          en_US: "Truffles",
        },
        description: {},
        price: 500,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "3230b11f-0dbc-4c47-8ee5-7bd6c911e9a9",
        title: {
          en_US: "This Is Your Dish Name ",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 900,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_17fa95f7446b4a7aa5e556ab0602a228~mv2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:00:34.385Z","type":"dish"}}',
        },
      },
      {
        id: "8bfe120d-ba27-4441-81cd-0520bb15f35a",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 500,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_b31098401afd42e8abf38db6412555ef~mv2_d_5616_3744_s_4_2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:02:32.520Z","type":"dish"}}',
        },
      },
      {
        id: "6632ceb4-7778-4c44-917f-135a52cfdb2f",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 900,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_ca43a719704f4aa499816bceb2ffd920~mv2_d_4000_6000_s_4_2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:02:34.027Z","type":"dish"}}',
        },
      },
      {
        id: "72ebf40a-4a84-48c0-a4cf-3d9e82e3dfc4",
        title: {
          en_US: "This Is Your Dish Name",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1000,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_e7342470030e446b89b41f53d5d2718b~mv2_d_5472_3648_s_4_2.jpg",
        },
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-07-15T20:02:35.563Z","type":"dish"}}',
        },
      },
      {
        id: "5054789f-f5d5-49cd-b1c2-f26f1aba826a",
        title: {
          en_US: "Pork Fried Rice",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_086a8cf3f97c41a385e2eaa6815065d2~mv2.jpg",
        },
      },
      {
        id: "aebbef58-bbab-4da2-87c4-ad9383a7a1fc",
        title: {
          en_US: "Chicken Fried Rice",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_086a8cf3f97c41a385e2eaa6815065d2~mv2.jpg",
        },
      },
      {
        id: "6435755f-6d30-46b5-aa44-f6018c17d3f3",
        title: {
          en_US: "Vegetable Fried Rice",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_086a8cf3f97c41a385e2eaa6815065d2~mv2.jpg",
        },
      },
      {
        id: "fb389454-af9d-4f14-adf8-f9197f3bd055",
        title: {
          en_US: "House Fried Rice",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_086a8cf3f97c41a385e2eaa6815065d2~mv2.jpg",
        },
      },
      {
        id: "2ec32c00-2156-4769-a2fa-44531b9a30e8",
        title: {
          en_US: "Chicken Stir Fry",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_b4d8c912fee548c095f879eb6b385e2b~mv2_d_4256_2832_s_4_2.jpg",
        },
      },
      {
        id: "f39a3f74-d350-486d-a01b-23ed3e0ea28e",
        title: {
          en_US: "Vegetable Stir Fry",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_b4d8c912fee548c095f879eb6b385e2b~mv2_d_4256_2832_s_4_2.jpg",
        },
      },
      {
        id: "945b2033-e5ca-4392-b53e-8d9c2cedda56",
        title: {
          en_US: "Beef Stir Fry",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_b4d8c912fee548c095f879eb6b385e2b~mv2_d_4256_2832_s_4_2.jpg",
        },
      },
      {
        id: "1a7da409-31e2-48ad-9156-4821cc54ee1f",
        title: {
          en_US: "Prawn Stir Fry",
        },
        description: {
          en_US:
            "This is your dish description. Include an overview of your ingredients, dietary notes, and other relevant info.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {
          logo:
            "https://static.wixstatic.com/media/11062b_b4d8c912fee548c095f879eb6b385e2b~mv2_d_4256_2832_s_4_2.jpg",
        },
      },
      {
        id: "cbb078c1-3e38-4a8e-abe2-f2d16844e262",
        title: {
          en_US: "General Tso's Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "d14716a8-7774-470b-ba53-38aa2ad24b02",
        title: {
          en_US: "Kung Pao Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "c57b8054-5685-4d98-9d17-0a34de137cd4",
        title: {
          en_US: "Orange Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "11874a0e-4c5d-4e4a-ba8a-a6cd99488144",
        title: {
          en_US: "Tofu Plate",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "c1532f1e-eed8-4984-bc88-0b114d0f6bea",
        title: {
          en_US: "Sweet & Sour Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "c3e0bcd9-e2a1-48d0-b3cd-81bb335261ca",
        title: {
          en_US: "Almond Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "e4d7bac8-fa7f-4325-b959-64b8f8cc6b76",
        title: {
          en_US: "Broccoli Beef",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "934412b0-7139-4d4f-955b-ecd6624eae03",
        title: {
          en_US: "Mongolian Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "8450cd42-1c4d-4980-b303-6f7df95d859c",
        title: {
          en_US: "Mongolian Beef",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "35c05ecc-1474-4c1c-a951-0cfb4777f7a9",
        title: {
          en_US: "Family A",
        },
        description: {
          en_US:
            "Serves 3 people. Chicken teriyaki, General Tso's chicken, California roll, gyoza (6 pieces), and prawn tempura (4 pieces).",
        },
        price: 4399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "e4ac39dc-2c0e-4d4b-94dd-a4c33fb5397a",
        title: {
          en_US: "Family B",
        },
        description: {
          en_US:
            "Serves 5 people. Chicken teriyaki, beef short ribs, vegetable yakisoba, California roll, gyoza (6 pieces), and prawn tempura (4 pieces).",
        },
        price: 5999,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "3a77e5b8-c610-4384-8755-8efe031bf519",
        title: {
          en_US: "Miso Soup",
        },
        description: {
          en_US: "",
        },
        price: 299,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "e06a0df6-0bd8-4cc0-a602-7427af420dee",
        title: {
          en_US: "Egg Flower Soup",
        },
        description: {
          en_US: "",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "647200e3-fcd3-4c18-94db-cc409db00a88",
        title: {
          en_US: "Wonton Soup",
        },
        description: {
          en_US: "",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "60dc3c50-0024-4671-b6ff-390d1ea8db67",
        title: {
          en_US: "Hot & Sour Soup",
        },
        description: {
          en_US: "",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "48325e96-c2e9-4c23-9614-14b0ce49e547",
        title: {
          en_US: "Tofu Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "f70d0349-86bf-408b-9bb7-360c4dc83040",
        title: {
          en_US: "Beef Short Ribs",
        },
        description: {
          en_US: "",
        },
        price: 1999,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "eb6c831d-6686-4493-8a31-31a4a6b9028b",
        title: {
          en_US: "Gyoza Plate",
        },
        description: {
          en_US: "",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "4d39cf0c-eba3-43c2-bcae-95ed9d964ad5",
        title: {
          en_US: "Salmon Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1799,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "116bfb03-fa3e-40a1-809b-9a35cc52d03f",
        title: {
          en_US: "Chicken Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "201f996f-8add-4727-b81f-746f3cf3a639",
        title: {
          en_US: "Pork Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "fb4b349b-a8d1-4559-ad3f-ff7802a4ccdc",
        title: {
          en_US: "Chicken Katsu",
        },
        description: {
          en_US: "",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "db9379d3-0ea5-47ee-8a5b-9cd244549011",
        title: {
          en_US: "Chicken Breast Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "801976e1-f8a2-41c8-a4f9-c315f3298459",
        title: {
          en_US: "Spicy Chicken",
        },
        description: {
          en_US: "",
        },
        price: 1299,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "a598b234-a0af-447a-952a-f4a254d73e3f",
        title: {
          en_US: "Prawn Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "e057f7d4-7b90-4cf0-8a64-a736efdbbdf0",
        title: {
          en_US: "Beef Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "89a357a6-8053-41d8-bf8d-6fc8a74b5d28",
        title: {
          en_US: "Shrimp Chow Mein",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "34ff3398-a733-48d7-ac15-92cc5e39e6ac",
        title: {
          en_US: "Chicken Chow Mein",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "b4e426a4-a5de-4e22-b790-aba2dd898e71",
        title: {
          en_US: "House Chow Mein",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "610178ac-beac-4491-89b7-012b849df606",
        title: {
          en_US: "Beef Chow Mein",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "d8e76fa1-f38a-4d0c-bb6c-a7fd8c06681a",
        title: {
          en_US: "Vegetable Chow Mein",
        },
        description: {
          en_US: "",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "48dd8eea-5c61-4a46-86e9-2e7f6c55b935",
        title: {
          en_US: "Tofu Chow Mein",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "4577e987-8c83-4766-981f-634c9c6fe35c",
        title: {
          en_US: "Prawn Tempura",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "145aa7df-fba1-4414-bf74-e369f8a16934",
        title: {
          en_US: "Shrimp Tempura Roll",
        },
        description: {
          en_US: "Batter fried shrimp, avocado, cucumber, and smelt roe.",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "65f60372-8990-45ca-b4b0-774e335de81c",
        title: {
          en_US: "California Roll",
        },
        description: {
          en_US: "Crab, cucumber, and avocado.",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "7875a881-35b6-4b0a-b513-3be2a69d68d1",
        title: {
          en_US: "Tiger Roll",
        },
        description: {
          en_US: "Raw tuna, batter-fried shrimp, smelt roe, cucumber, and avocado.",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "d10f199d-6011-4b43-a2ba-fd852fee0f4e",
        title: {
          en_US: "Spicy Tuna Roll",
        },
        description: {
          en_US: "Raw tuna, avocado, and cucumber with spicy sauce.",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "d4e66c03-7ab8-4740-b00e-e8d327d0d262",
        title: {
          en_US: "Veggie Roll",
        },
        description: {
          en_US: "Avocado, carrot, cucumber, and lettuce.",
        },
        price: 1199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "d49c1559-16f8-4719-9bbe-d11292778f11",
        title: {
          en_US: "Ichi Roll",
        },
        description: {
          en_US:
            "Batter fried roll with avocado, crab, cream cheese, eel, and topped with teriyaki sauce.",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "bc92643e-0f61-40be-99c1-df036766fb48",
        title: {
          en_US: "Combo One",
        },
        description: {
          en_US:
            "Chicken teriyaki and gyoza (5 pieces). One-piece egg roll comes with steamed rice and salad.",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "7e3932f7-b69d-4bf4-8080-5bcaa719a960",
        title: {
          en_US: "Combo Two",
        },
        description: {
          en_US:
            "Chicken teriyaki, California roll (4 pieces), and gyoza (6 pieces). Comes with steamed rice and salad.",
        },
        price: 1699,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "783368c1-1e99-4af0-8aee-f7ae64c65172",
        title: {
          en_US: "Chicken teriyaki, tempura, and California roll",
        },
        description: {
          en_US: "Chicken teriyaki, prawn tempura, gyoza, miso soup, rice, and salad.",
        },
        price: 1999,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "bfa46b4d-3490-41c2-9aad-97461a05c211",
        title: {
          en_US: "Beef teriyaki, tempura, and California roll",
        },
        description: {
          en_US: "Beef teriyaki, prawn tempura, gyoza, miso soup, rice, and salad.",
        },
        price: 2199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "187aeaaf-ecb9-46bb-ab47-a4ac7d78fe29",
        title: {
          en_US: "Short ribs, tempura, and California roll",
        },
        description: {
          en_US: "Beef short ribs, prawn tempura, gyoza, miso soup, rice, and salad.",
        },
        price: 2299,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "6afbeb6a-ee2b-472d-8646-f923e08d95e4",
        title: {
          en_US: "Prawn tempura, and California roll",
        },
        description: {
          en_US: "Prawn tempura, gyoza, miso soup, rice, and salad.",
        },
        price: 2199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "eb0c7804-a542-45b3-b062-8071563c0c04",
        title: {
          en_US: "Chicken katsu, prawn tempura, and California roll",
        },
        description: {
          en_US: "Chicken katsu, prawn tempura, gyoza, miso soup, rice, and salad.",
        },
        price: 2199,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "fbaffe23-207a-4c03-8e1b-cbfb07cdc00d",
        title: {
          en_US: "Salmon teriyaki, prawn tempura, and California roll",
        },
        description: {
          en_US: "Salmon teriyaki, prawn tempura, gyoza, miso soup, rice, and salad.",
        },
        price: 2299,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "0374c2ab-5e4a-466a-86aa-e751ae6d9dd6",
        title: {
          en_US: "House Yakisoba",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "a5871e2e-de13-4ccf-af4b-3e9349017eb7",
        title: {
          en_US: "Chicken Yakisoba",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "978415ad-b63b-43b8-ab74-dd27659e94b6",
        title: {
          en_US: "Tofu Yakisoba",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "1492ae09-a993-4902-bcff-ed31d0669669",
        title: {
          en_US: "Vegetable Yakisoba",
        },
        description: {
          en_US: "",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "0ae9f7c6-1730-4b4d-8b14-5b3796e4d2dc",
        title: {
          en_US: "Beef Yakisoba",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "6f0e36b0-43f5-436a-af9d-07153fb2160b",
        title: {
          en_US: "Shrimp Yakisoba",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "eb93cb2b-edde-46ba-b6e3-0c0d11eff4e0",
        title: {
          en_US: "Beef Short Ribs & Beef Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 2099,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "5d0fe069-5c0d-4ae6-acfe-94127d9a1f16",
        title: {
          en_US: "Chicken & Gyoza Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "2c933ead-db92-4d5b-bd82-8ac5b768a7a7",
        title: {
          en_US: "Beef Short Ribs & Chicken Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1999,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "3236afc1-ae87-440b-b1b3-94b06dc4ba52",
        title: {
          en_US: "Beef & Pork Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "eb25ee24-2cab-4fc0-94a2-bbaa4ff522de",
        title: {
          en_US: "Chicken & Prawn Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "744c5fc3-7596-4b68-854e-52c913c0fad1",
        title: {
          en_US: "Chicken & Beef Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "01cc5b8e-e538-4046-91f1-6e06dc961179",
        title: {
          en_US: "Chicken & Pork Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1499,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "6dc08aed-9009-4906-a3d5-822f29a1bf7b",
        title: {
          en_US: "Beef & Prawn Teriyaki",
        },
        description: {
          en_US: "",
        },
        price: 1599,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "dc8efa26-d6d7-40cf-9285-1d07e9eaa7a7",
        title: {
          en_US: "Kimchi",
        },
        description: {
          en_US: "",
        },
        price: 399,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "acb5fc23-f8fd-4faa-807f-a247be33e09c",
        title: {
          en_US: "Prawn Tempura",
        },
        description: {
          en_US: "",
        },
        price: 1099,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
        properties: {
          "com.wix.restaurants":
            '{"trashInfo":{"dateRemoved":"2020-09-08T20:49:17.247Z","type":"dish"}}',
        },
      },
      {
        id: "b186052b-a668-44db-b64f-9f0f8950e5fb",
        title: {
          en_US: "Egg Rolls (3 pieces)",
        },
        description: {
          en_US: "",
        },
        price: 799,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "f0833789-3136-4b1b-84f4-d9cfefaccd09",
        title: {
          en_US: "Brown Rice",
        },
        description: {
          en_US: "",
        },
        price: 350,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "7c3a6974-258f-49a7-91a4-dc012e87d213",
        title: {
          en_US: "Steamed Rice",
        },
        description: {
          en_US: "",
        },
        price: 350,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "f8bd450b-3822-427f-944b-b1dff5f9e682",
        title: {
          en_US: "Salad",
        },
        description: {
          en_US: "",
        },
        price: 350,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "d2f8e25a-9c7a-4bb2-8d89-5448c2745e36",
        title: {
          en_US: "Prawn Tempura (5 Pieces)",
        },
        description: {
          en_US: "",
        },
        price: 799,
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "true",
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
    ],
    sections: [
      {
        id: "-10",
        title: {
          en_US: "Menu",
        },
        description: {
          en_US: "Served daily between 10-9pm",
        },
        children: [
          {
            id: "-11",
            title: {
              en_US: "Fried Rice",
            },
            description: {
              en_US: "This is a section of your menu, customize it any way you want.",
            },
            itemIds: [
              "b1950516-e5a1-410f-ac6e-52458d21faf0",
              "aebbef58-bbab-4da2-87c4-ad9383a7a1fc",
              "fb389454-af9d-4f14-adf8-f9197f3bd055",
              "5054789f-f5d5-49cd-b1c2-f26f1aba826a",
              "fc5a3e1a-b0b7-4f45-ac87-fbad39c0ab51",
              "6435755f-6d30-46b5-aa44-f6018c17d3f3",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {
              logo:
                "https://static.wixstatic.com/media/11062b_887c7d376722442dab906b67a5235af2~mv2.jpg",
            },
          },
          {
            id: "-12",
            title: {
              en_US: "Stir Fried",
            },
            description: {
              en_US:
                "Tell people more about the items in this section, e.g., all main courses can be made gluten free.",
            },
            itemIds: [
              "945b2033-e5ca-4392-b53e-8d9c2cedda56",
              "2ec32c00-2156-4769-a2fa-44531b9a30e8",
              "1a7da409-31e2-48ad-9156-4821cc54ee1f",
              "a40add75-29ba-467c-af8d-b34704920a81",
              "f39a3f74-d350-486d-a01b-23ed3e0ea28e",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {
              logo:
                "https://static.wixstatic.com/media/11062b_ffc4bbb9be5945d186188daea72b28ce~mv2_d_5472_3648_s_4_2.jpg",
            },
          },
          {
            id: "22ab5691-1366-453c-a3aa-46c213659b01",
            title: {
              en_US: "Chinese Wok",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "c3e0bcd9-e2a1-48d0-b3cd-81bb335261ca",
              "e4d7bac8-fa7f-4325-b959-64b8f8cc6b76",
              "cbb078c1-3e38-4a8e-abe2-f2d16844e262",
              "d14716a8-7774-470b-ba53-38aa2ad24b02",
              "8450cd42-1c4d-4980-b303-6f7df95d859c",
              "934412b0-7139-4d4f-955b-ecd6624eae03",
              "c57b8054-5685-4d98-9d17-0a34de137cd4",
              "c1532f1e-eed8-4984-bc88-0b114d0f6bea",
              "11874a0e-4c5d-4e4a-ba8a-a6cd99488144",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "11539ed5-e89d-433e-9b6b-e0aa7d9d2543",
            title: {
              en_US: "Family Special",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "35c05ecc-1474-4c1c-a951-0cfb4777f7a9",
              "e4ac39dc-2c0e-4d4b-94dd-a4c33fb5397a",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "43e93333-2071-4453-9ab9-6b5cb4c50b56",
            title: {
              en_US: "Soup",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "e06a0df6-0bd8-4cc0-a602-7427af420dee",
              "60dc3c50-0024-4671-b6ff-390d1ea8db67",
              "3a77e5b8-c610-4384-8755-8efe031bf519",
              "647200e3-fcd3-4c18-94db-cc409db00a88",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "58f0d783-c855-4583-a8d0-8a86fb60f41f",
            title: {
              en_US: "Teriyaki",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "f70d0349-86bf-408b-9bb7-360c4dc83040",
              "e057f7d4-7b90-4cf0-8a64-a736efdbbdf0",
              "fb4b349b-a8d1-4559-ad3f-ff7802a4ccdc",
              "db9379d3-0ea5-47ee-8a5b-9cd244549011",
              "116bfb03-fa3e-40a1-809b-9a35cc52d03f",
              "eb6c831d-6686-4493-8a31-31a4a6b9028b",
              "201f996f-8add-4727-b81f-746f3cf3a639",
              "a598b234-a0af-447a-952a-f4a254d73e3f",
              "4d39cf0c-eba3-43c2-bcae-95ed9d964ad5",
              "801976e1-f8a2-41c8-a4f9-c315f3298459",
              "48325e96-c2e9-4c23-9614-14b0ce49e547",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "f513504b-2719-4e64-8b9d-d18baeefb2bb",
            title: {
              en_US: "Chow Mein",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "34ff3398-a733-48d7-ac15-92cc5e39e6ac",
              "610178ac-beac-4491-89b7-012b849df606",
              "b4e426a4-a5de-4e22-b790-aba2dd898e71",
              "89a357a6-8053-41d8-bf8d-6fc8a74b5d28",
              "48dd8eea-5c61-4a46-86e9-2e7f6c55b935",
              "d8e76fa1-f38a-4d0c-bb6c-a7fd8c06681a",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "1e2e5691-384c-4938-b3bd-6ac01c19d43c",
            title: {
              en_US: "Sushi Rolls",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "65f60372-8990-45ca-b4b0-774e335de81c",
              "d49c1559-16f8-4719-9bbe-d11292778f11",
              "145aa7df-fba1-4414-bf74-e369f8a16934",
              "d10f199d-6011-4b43-a2ba-fd852fee0f4e",
              "7875a881-35b6-4b0a-b513-3be2a69d68d1",
              "d4e66c03-7ab8-4740-b00e-e8d327d0d262",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "882703fe-ab80-45a8-890b-8f758a6de07e",
            title: {
              en_US: "House Special Combo",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "bc92643e-0f61-40be-99c1-df036766fb48",
              "7e3932f7-b69d-4bf4-8080-5bcaa719a960",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "de7ae417-2df9-44e2-81b3-dbec0113cdbf",
            title: {
              en_US: "Sushi Roll Bento",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "bfa46b4d-3490-41c2-9aad-97461a05c211",
              "eb0c7804-a542-45b3-b062-8071563c0c04",
              "783368c1-1e99-4af0-8aee-f7ae64c65172",
              "6afbeb6a-ee2b-472d-8646-f923e08d95e4",
              "fbaffe23-207a-4c03-8e1b-cbfb07cdc00d",
              "187aeaaf-ecb9-46bb-ab47-a4ac7d78fe29",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "8ad773f5-83de-4522-8db6-bb59faa32024",
            title: {
              en_US: "Yakisoba",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "0ae9f7c6-1730-4b4d-8b14-5b3796e4d2dc",
              "a5871e2e-de13-4ccf-af4b-3e9349017eb7",
              "0374c2ab-5e4a-466a-86aa-e751ae6d9dd6",
              "6f0e36b0-43f5-436a-af9d-07153fb2160b",
              "978415ad-b63b-43b8-ab74-dd27659e94b6",
              "1492ae09-a993-4902-bcff-ed31d0669669",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "2b77ec7e-8127-401a-b9be-3218280d54e7",
            title: {
              en_US: "Combos",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "eb93cb2b-edde-46ba-b6e3-0c0d11eff4e0",
              "2c933ead-db92-4d5b-bd82-8ac5b768a7a7",
              "3236afc1-ae87-440b-b1b3-94b06dc4ba52",
              "6dc08aed-9009-4906-a3d5-822f29a1bf7b",
              "744c5fc3-7596-4b68-854e-52c913c0fad1",
              "5d0fe069-5c0d-4ae6-acfe-94127d9a1f16",
              "01cc5b8e-e538-4046-91f1-6e06dc961179",
              "eb25ee24-2cab-4fc0-94a2-bbaa4ff522de",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
          {
            id: "66a0a559-7067-47b6-884a-2d930df02482",
            title: {
              en_US: "Side Orders",
            },
            description: {
              en_US: "",
            },
            itemIds: [
              "f0833789-3136-4b1b-84f4-d9cfefaccd09",
              "7c3a6974-258f-49a7-91a4-dc012e87d213",
              "b186052b-a668-44db-b64f-9f0f8950e5fb",
              "dc8efa26-d6d7-40cf-9285-1d07e9eaa7a7",
              "f8bd450b-3822-427f-944b-b1dff5f9e682",
              "d2f8e25a-9c7a-4bb2-8d89-5448c2745e36",
            ],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
          },
        ],
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
      {
        id: "trash",
        title: {
          en_US: "Trash",
        },
        description: {
          en_US: "",
        },
        children: [
          {
            id: "516e33d4-9eed-45ff-ac13-a21e35dba9b2",
            title: {
              en_US: "Tempura",
            },
            description: {
              en_US: "",
            },
            itemIds: ["4577e987-8c83-4766-981f-634c9c6fe35c"],
            displayCondition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            condition: {
              type: "and",
              conditions: [
                {
                  type: "true",
                },
                {
                  type: "and",
                },
                {
                  type: "and",
                },
                {
                  type: "order_delivery_time",
                  availability: {},
                },
              ],
            },
            media: {},
            properties: {
              "com.wix.restaurants":
                '{"trashInfo":{"dateRemoved":"2020-09-08T20:48:05.095Z","type":"section"}}',
            },
          },
        ],
        itemIds: [
          "b35080c9-0659-4eb6-a62b-fc0856948f4a",
          "af33528a-1d30-410c-8097-615a53bc0608",
          "4c051b5b-a6cd-4630-89fc-2562f0781b53",
          "3230b11f-0dbc-4c47-8ee5-7bd6c911e9a9",
          "4a0aaf6f-2ba2-4034-a5be-ea16ed081f85",
          "e36aa10a-0367-4a28-ab65-3988d28fd8e4",
          "8bfe120d-ba27-4441-81cd-0520bb15f35a",
          "6632ceb4-7778-4c44-917f-135a52cfdb2f",
          "72ebf40a-4a84-48c0-a4cf-3d9e82e3dfc4",
          "acb5fc23-f8fd-4faa-807f-a247be33e09c",
        ],
        displayCondition: {
          type: "and",
          conditions: [
            {
              type: "false",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "false",
            },
            {
              type: "and",
            },
            {
              type: "and",
            },
            {
              type: "order_delivery_time",
              availability: {},
            },
          ],
        },
        media: {},
      },
    ],
    chargesV2: [
      {
        type: "discount",
        id: "457ddbfb-3863-4326-8c44-44d373f8cb5b",
        title: {
          en_US: "Manager Discount",
        },
        description: {},
        displayCondition: {
          type: "order_platform",
          platform: "callcenter",
        },
        condition: {
          type: "order_platform",
          platform: "callcenter",
        },
        operator: {
          type: "max",
          operators: [
            {
              type: "multiply",
              numerators: [
                {
                  type: "sum_prices",
                  items: {
                    type: "include",
                    ids: [
                      "1103b3ae-c8f7-4b83-8d69-c64426f2bb48",
                      "c2c97807-6758-4579-a996-d9be70392136",
                      "4c051b5b-a6cd-4630-89fc-2562f0781b53",
                      "4a0aaf6f-2ba2-4034-a5be-ea16ed081f85",
                      "3230b11f-0dbc-4c47-8ee5-7bd6c911e9a9",
                      "5ef807f6-57fe-4481-8db4-1ebb2cfec7bd",
                      "72ebf40a-4a84-48c0-a4cf-3d9e82e3dfc4",
                      "30cd9fe3-28a0-4b62-88c7-54b487de14ee",
                      "af33528a-1d30-410c-8097-615a53bc0608",
                      "8bfe120d-ba27-4441-81cd-0520bb15f35a",
                      "5c55ee5f-0113-4524-9c7b-d55bfdb71266",
                      "e36aa10a-0367-4a28-ab65-3988d28fd8e4",
                      "b35080c9-0659-4eb6-a62b-fc0856948f4a",
                      "6632ceb4-7778-4c44-917f-135a52cfdb2f",
                      "9e7f53f8-56e6-4574-8284-d9193f80dd0a",
                    ],
                  },
                  charges: {
                    type: "include",
                    ids: [],
                  },
                },
                {
                  type: "value",
                  value: -1,
                },
              ],
            },
            {
              type: "min",
              operators: [
                {
                  type: "value",
                  value: 0,
                },
                {
                  type: "sum_prices",
                  items: {
                    type: "include",
                    ids: [],
                  },
                  charges: {
                    type: "include",
                    ids: ["457ddbfb-3863-4326-8c44-44d373f8cb5b"],
                  },
                },
              ],
            },
          ],
        },
        state: "operational",
        properties: {
          "com.wix.restaurants":
            '{"menuFilter":{"type":"all"},"groupId":"457ddbfb-3863-4326-8c44-44d373f8cb5b","isManagerDiscount":true}',
        },
      },
      {
        type: "discount",
        id: "f4415332-5cce-4bbd-9535-f27b99c80634",
        title: {
          en_US: "Manager Discount",
        },
        description: {},
        displayCondition: {
          type: "order_platform",
          platform: "callcenter",
        },
        condition: {
          type: "order_platform",
          platform: "callcenter",
        },
        operator: {
          type: "max",
          operators: [
            {
              type: "multiply",
              numerators: [
                {
                  type: "sum_prices",
                  items: {
                    type: "include",
                    ids: [
                      "fc5a3e1a-b0b7-4f45-ac87-fbad39c0ab51",
                      "e057f7d4-7b90-4cf0-8a64-a736efdbbdf0",
                      "145aa7df-fba1-4414-bf74-e369f8a16934",
                      "610178ac-beac-4491-89b7-012b849df606",
                      "b4e426a4-a5de-4e22-b790-aba2dd898e71",
                      "7e3932f7-b69d-4bf4-8080-5bcaa719a960",
                      "6afbeb6a-ee2b-472d-8646-f923e08d95e4",
                      "c1532f1e-eed8-4984-bc88-0b114d0f6bea",
                      "65f60372-8990-45ca-b4b0-774e335de81c",
                      "eb25ee24-2cab-4fc0-94a2-bbaa4ff522de",
                      "c57b8054-5685-4d98-9d17-0a34de137cd4",
                      "aebbef58-bbab-4da2-87c4-ad9383a7a1fc",
                      "2c933ead-db92-4d5b-bd82-8ac5b768a7a7",
                      "e06a0df6-0bd8-4cc0-a602-7427af420dee",
                      "0374c2ab-5e4a-466a-86aa-e751ae6d9dd6",
                      "4d39cf0c-eba3-43c2-bcae-95ed9d964ad5",
                      "db9379d3-0ea5-47ee-8a5b-9cd244549011",
                      "fb389454-af9d-4f14-adf8-f9197f3bd055",
                      "a598b234-a0af-447a-952a-f4a254d73e3f",
                      "eb93cb2b-edde-46ba-b6e3-0c0d11eff4e0",
                      "0ae9f7c6-1730-4b4d-8b14-5b3796e4d2dc",
                      "116bfb03-fa3e-40a1-809b-9a35cc52d03f",
                      "f70d0349-86bf-408b-9bb7-360c4dc83040",
                      "6435755f-6d30-46b5-aa44-f6018c17d3f3",
                      "7875a881-35b6-4b0a-b513-3be2a69d68d1",
                      "5d0fe069-5c0d-4ae6-acfe-94127d9a1f16",
                      "eb6c831d-6686-4493-8a31-31a4a6b9028b",
                      "f39a3f74-d350-486d-a01b-23ed3e0ea28e",
                      "934412b0-7139-4d4f-955b-ecd6624eae03",
                      "d8e76fa1-f38a-4d0c-bb6c-a7fd8c06681a",
                      "b1950516-e5a1-410f-ac6e-52458d21faf0",
                      "e4ac39dc-2c0e-4d4b-94dd-a4c33fb5397a",
                      "744c5fc3-7596-4b68-854e-52c913c0fad1",
                      "3a77e5b8-c610-4384-8755-8efe031bf519",
                      "d4e66c03-7ab8-4740-b00e-e8d327d0d262",
                      "801976e1-f8a2-41c8-a4f9-c315f3298459",
                      "11874a0e-4c5d-4e4a-ba8a-a6cd99488144",
                      "fb4b349b-a8d1-4559-ad3f-ff7802a4ccdc",
                      "60dc3c50-0024-4671-b6ff-390d1ea8db67",
                      "bfa46b4d-3490-41c2-9aad-97461a05c211",
                      "bc92643e-0f61-40be-99c1-df036766fb48",
                      "48325e96-c2e9-4c23-9614-14b0ce49e547",
                      "7c3a6974-258f-49a7-91a4-dc012e87d213",
                      "f0833789-3136-4b1b-84f4-d9cfefaccd09",
                      "89a357a6-8053-41d8-bf8d-6fc8a74b5d28",
                      "6f0e36b0-43f5-436a-af9d-07153fb2160b",
                      "945b2033-e5ca-4392-b53e-8d9c2cedda56",
                      "d2f8e25a-9c7a-4bb2-8d89-5448c2745e36",
                      "d49c1559-16f8-4719-9bbe-d11292778f11",
                      "35c05ecc-1474-4c1c-a951-0cfb4777f7a9",
                      "1a7da409-31e2-48ad-9156-4821cc54ee1f",
                      "d10f199d-6011-4b43-a2ba-fd852fee0f4e",
                      "187aeaaf-ecb9-46bb-ab47-a4ac7d78fe29",
                      "2ec32c00-2156-4769-a2fa-44531b9a30e8",
                      "6dc08aed-9009-4906-a3d5-822f29a1bf7b",
                      "978415ad-b63b-43b8-ab74-dd27659e94b6",
                      "cbb078c1-3e38-4a8e-abe2-f2d16844e262",
                      "5054789f-f5d5-49cd-b1c2-f26f1aba826a",
                      "acb5fc23-f8fd-4faa-807f-a247be33e09c",
                      "8450cd42-1c4d-4980-b303-6f7df95d859c",
                      "1492ae09-a993-4902-bcff-ed31d0669669",
                      "4577e987-8c83-4766-981f-634c9c6fe35c",
                      "783368c1-1e99-4af0-8aee-f7ae64c65172",
                      "3236afc1-ae87-440b-b1b3-94b06dc4ba52",
                      "f8bd450b-3822-427f-944b-b1dff5f9e682",
                      "48dd8eea-5c61-4a46-86e9-2e7f6c55b935",
                      "a40add75-29ba-467c-af8d-b34704920a81",
                      "a5871e2e-de13-4ccf-af4b-3e9349017eb7",
                      "01cc5b8e-e538-4046-91f1-6e06dc961179",
                      "c3e0bcd9-e2a1-48d0-b3cd-81bb335261ca",
                      "fbaffe23-207a-4c03-8e1b-cbfb07cdc00d",
                      "d14716a8-7774-470b-ba53-38aa2ad24b02",
                      "34ff3398-a733-48d7-ac15-92cc5e39e6ac",
                      "dc8efa26-d6d7-40cf-9285-1d07e9eaa7a7",
                      "201f996f-8add-4727-b81f-746f3cf3a639",
                      "e4d7bac8-fa7f-4325-b959-64b8f8cc6b76",
                      "b186052b-a668-44db-b64f-9f0f8950e5fb",
                      "647200e3-fcd3-4c18-94db-cc409db00a88",
                      "eb0c7804-a542-45b3-b062-8071563c0c04",
                    ],
                  },
                  charges: {
                    type: "include",
                    ids: [],
                  },
                },
                {
                  type: "value",
                  value: -1,
                },
              ],
            },
            {
              type: "min",
              operators: [
                {
                  type: "value",
                  value: 0,
                },
                {
                  type: "sum_prices",
                  items: {
                    type: "include",
                    ids: [],
                  },
                  charges: {
                    type: "include",
                    ids: ["f4415332-5cce-4bbd-9535-f27b99c80634"],
                  },
                },
              ],
            },
          ],
        },
        state: "operational",
        properties: {
          "com.wix.restaurants":
            '{"menuFilter":{"type":"all"},"groupId":"457ddbfb-3863-4326-8c44-44d373f8cb5b","isManagerDiscount":true}',
        },
      },
      {
        type: "tax",
        id: "c6c3059c-2579-4c6c-8b84-031f65a959ba",
        title: {},
        description: {},
        displayCondition: {
          type: "true",
        },
        condition: {
          type: "and",
          conditions: [
            {
              type: "true",
            },
            {
              type: "or",
              conditions: [
                {
                  type: "order_delivery_type",
                  deliveryType: "delivery",
                },
                {
                  type: "order_delivery_type",
                  deliveryType: "takeout",
                },
              ],
            },
          ],
        },
        operator: {
          type: "multiply",
          numerators: [
            {
              type: "sum_prices",
              items: {
                type: "include",
                ids: [
                  "fc5a3e1a-b0b7-4f45-ac87-fbad39c0ab51",
                  "e057f7d4-7b90-4cf0-8a64-a736efdbbdf0",
                  "145aa7df-fba1-4414-bf74-e369f8a16934",
                  "610178ac-beac-4491-89b7-012b849df606",
                  "b4e426a4-a5de-4e22-b790-aba2dd898e71",
                  "7e3932f7-b69d-4bf4-8080-5bcaa719a960",
                  "6afbeb6a-ee2b-472d-8646-f923e08d95e4",
                  "c1532f1e-eed8-4984-bc88-0b114d0f6bea",
                  "65f60372-8990-45ca-b4b0-774e335de81c",
                  "eb25ee24-2cab-4fc0-94a2-bbaa4ff522de",
                  "c57b8054-5685-4d98-9d17-0a34de137cd4",
                  "aebbef58-bbab-4da2-87c4-ad9383a7a1fc",
                  "2c933ead-db92-4d5b-bd82-8ac5b768a7a7",
                  "e06a0df6-0bd8-4cc0-a602-7427af420dee",
                  "0374c2ab-5e4a-466a-86aa-e751ae6d9dd6",
                  "4d39cf0c-eba3-43c2-bcae-95ed9d964ad5",
                  "db9379d3-0ea5-47ee-8a5b-9cd244549011",
                  "fb389454-af9d-4f14-adf8-f9197f3bd055",
                  "a598b234-a0af-447a-952a-f4a254d73e3f",
                  "eb93cb2b-edde-46ba-b6e3-0c0d11eff4e0",
                  "0ae9f7c6-1730-4b4d-8b14-5b3796e4d2dc",
                  "116bfb03-fa3e-40a1-809b-9a35cc52d03f",
                  "f70d0349-86bf-408b-9bb7-360c4dc83040",
                  "6435755f-6d30-46b5-aa44-f6018c17d3f3",
                  "7875a881-35b6-4b0a-b513-3be2a69d68d1",
                  "5d0fe069-5c0d-4ae6-acfe-94127d9a1f16",
                  "eb6c831d-6686-4493-8a31-31a4a6b9028b",
                  "f39a3f74-d350-486d-a01b-23ed3e0ea28e",
                  "934412b0-7139-4d4f-955b-ecd6624eae03",
                  "d8e76fa1-f38a-4d0c-bb6c-a7fd8c06681a",
                  "b1950516-e5a1-410f-ac6e-52458d21faf0",
                  "e4ac39dc-2c0e-4d4b-94dd-a4c33fb5397a",
                  "744c5fc3-7596-4b68-854e-52c913c0fad1",
                  "3a77e5b8-c610-4384-8755-8efe031bf519",
                  "d4e66c03-7ab8-4740-b00e-e8d327d0d262",
                  "801976e1-f8a2-41c8-a4f9-c315f3298459",
                  "11874a0e-4c5d-4e4a-ba8a-a6cd99488144",
                  "fb4b349b-a8d1-4559-ad3f-ff7802a4ccdc",
                  "60dc3c50-0024-4671-b6ff-390d1ea8db67",
                  "bfa46b4d-3490-41c2-9aad-97461a05c211",
                  "bc92643e-0f61-40be-99c1-df036766fb48",
                  "48325e96-c2e9-4c23-9614-14b0ce49e547",
                  "7c3a6974-258f-49a7-91a4-dc012e87d213",
                  "f0833789-3136-4b1b-84f4-d9cfefaccd09",
                  "89a357a6-8053-41d8-bf8d-6fc8a74b5d28",
                  "6f0e36b0-43f5-436a-af9d-07153fb2160b",
                  "945b2033-e5ca-4392-b53e-8d9c2cedda56",
                  "d2f8e25a-9c7a-4bb2-8d89-5448c2745e36",
                  "d49c1559-16f8-4719-9bbe-d11292778f11",
                  "35c05ecc-1474-4c1c-a951-0cfb4777f7a9",
                  "1a7da409-31e2-48ad-9156-4821cc54ee1f",
                  "d10f199d-6011-4b43-a2ba-fd852fee0f4e",
                  "187aeaaf-ecb9-46bb-ab47-a4ac7d78fe29",
                  "2ec32c00-2156-4769-a2fa-44531b9a30e8",
                  "6dc08aed-9009-4906-a3d5-822f29a1bf7b",
                  "978415ad-b63b-43b8-ab74-dd27659e94b6",
                  "cbb078c1-3e38-4a8e-abe2-f2d16844e262",
                  "5054789f-f5d5-49cd-b1c2-f26f1aba826a",
                  "acb5fc23-f8fd-4faa-807f-a247be33e09c",
                  "8450cd42-1c4d-4980-b303-6f7df95d859c",
                  "1492ae09-a993-4902-bcff-ed31d0669669",
                  "4577e987-8c83-4766-981f-634c9c6fe35c",
                  "783368c1-1e99-4af0-8aee-f7ae64c65172",
                  "3236afc1-ae87-440b-b1b3-94b06dc4ba52",
                  "f8bd450b-3822-427f-944b-b1dff5f9e682",
                  "48dd8eea-5c61-4a46-86e9-2e7f6c55b935",
                  "a40add75-29ba-467c-af8d-b34704920a81",
                  "a5871e2e-de13-4ccf-af4b-3e9349017eb7",
                  "01cc5b8e-e538-4046-91f1-6e06dc961179",
                  "c3e0bcd9-e2a1-48d0-b3cd-81bb335261ca",
                  "fbaffe23-207a-4c03-8e1b-cbfb07cdc00d",
                  "d14716a8-7774-470b-ba53-38aa2ad24b02",
                  "34ff3398-a733-48d7-ac15-92cc5e39e6ac",
                  "dc8efa26-d6d7-40cf-9285-1d07e9eaa7a7",
                  "201f996f-8add-4727-b81f-746f3cf3a639",
                  "e4d7bac8-fa7f-4325-b959-64b8f8cc6b76",
                  "b186052b-a668-44db-b64f-9f0f8950e5fb",
                  "647200e3-fcd3-4c18-94db-cc409db00a88",
                  "eb0c7804-a542-45b3-b062-8071563c0c04",
                ],
              },
              charges: {
                type: "include",
                ids: ["f4415332-5cce-4bbd-9535-f27b99c80634"],
              },
            },
            {
              type: "value",
              value: 10200,
            },
          ],
          denominators: [
            {
              type: "value",
              value: 100000,
            },
          ],
        },
        state: "operational",
        mandatory: true,
        properties: {
          "com.wix.restaurants":
            '{"menuFilter":{"type":"dishes","ids":["b1950516-e5a1-410f-ac6e-52458d21faf0","fc5a3e1a-b0b7-4f45-ac87-fbad39c0ab51","a40add75-29ba-467c-af8d-b34704920a81","5054789f-f5d5-49cd-b1c2-f26f1aba826a","aebbef58-bbab-4da2-87c4-ad9383a7a1fc","6435755f-6d30-46b5-aa44-f6018c17d3f3","fb389454-af9d-4f14-adf8-f9197f3bd055","2ec32c00-2156-4769-a2fa-44531b9a30e8","f39a3f74-d350-486d-a01b-23ed3e0ea28e","945b2033-e5ca-4392-b53e-8d9c2cedda56","1a7da409-31e2-48ad-9156-4821cc54ee1f","cbb078c1-3e38-4a8e-abe2-f2d16844e262","d14716a8-7774-470b-ba53-38aa2ad24b02","c57b8054-5685-4d98-9d17-0a34de137cd4","11874a0e-4c5d-4e4a-ba8a-a6cd99488144","c1532f1e-eed8-4984-bc88-0b114d0f6bea","c3e0bcd9-e2a1-48d0-b3cd-81bb335261ca","e4d7bac8-fa7f-4325-b959-64b8f8cc6b76","934412b0-7139-4d4f-955b-ecd6624eae03","8450cd42-1c4d-4980-b303-6f7df95d859c","35c05ecc-1474-4c1c-a951-0cfb4777f7a9","e4ac39dc-2c0e-4d4b-94dd-a4c33fb5397a","3a77e5b8-c610-4384-8755-8efe031bf519","e06a0df6-0bd8-4cc0-a602-7427af420dee","647200e3-fcd3-4c18-94db-cc409db00a88","60dc3c50-0024-4671-b6ff-390d1ea8db67","48325e96-c2e9-4c23-9614-14b0ce49e547","f70d0349-86bf-408b-9bb7-360c4dc83040","eb6c831d-6686-4493-8a31-31a4a6b9028b","4d39cf0c-eba3-43c2-bcae-95ed9d964ad5","116bfb03-fa3e-40a1-809b-9a35cc52d03f","201f996f-8add-4727-b81f-746f3cf3a639","fb4b349b-a8d1-4559-ad3f-ff7802a4ccdc","db9379d3-0ea5-47ee-8a5b-9cd244549011","801976e1-f8a2-41c8-a4f9-c315f3298459","a598b234-a0af-447a-952a-f4a254d73e3f","e057f7d4-7b90-4cf0-8a64-a736efdbbdf0","89a357a6-8053-41d8-bf8d-6fc8a74b5d28","34ff3398-a733-48d7-ac15-92cc5e39e6ac","b4e426a4-a5de-4e22-b790-aba2dd898e71","610178ac-beac-4491-89b7-012b849df606","d8e76fa1-f38a-4d0c-bb6c-a7fd8c06681a","48dd8eea-5c61-4a46-86e9-2e7f6c55b935","4577e987-8c83-4766-981f-634c9c6fe35c","145aa7df-fba1-4414-bf74-e369f8a16934","65f60372-8990-45ca-b4b0-774e335de81c","7875a881-35b6-4b0a-b513-3be2a69d68d1","d10f199d-6011-4b43-a2ba-fd852fee0f4e","d4e66c03-7ab8-4740-b00e-e8d327d0d262","d49c1559-16f8-4719-9bbe-d11292778f11","bc92643e-0f61-40be-99c1-df036766fb48","7e3932f7-b69d-4bf4-8080-5bcaa719a960","783368c1-1e99-4af0-8aee-f7ae64c65172","bfa46b4d-3490-41c2-9aad-97461a05c211","187aeaaf-ecb9-46bb-ab47-a4ac7d78fe29","6afbeb6a-ee2b-472d-8646-f923e08d95e4","eb0c7804-a542-45b3-b062-8071563c0c04","fbaffe23-207a-4c03-8e1b-cbfb07cdc00d","0374c2ab-5e4a-466a-86aa-e751ae6d9dd6","a5871e2e-de13-4ccf-af4b-3e9349017eb7","978415ad-b63b-43b8-ab74-dd27659e94b6","1492ae09-a993-4902-bcff-ed31d0669669","0ae9f7c6-1730-4b4d-8b14-5b3796e4d2dc","6f0e36b0-43f5-436a-af9d-07153fb2160b","eb93cb2b-edde-46ba-b6e3-0c0d11eff4e0","5d0fe069-5c0d-4ae6-acfe-94127d9a1f16","2c933ead-db92-4d5b-bd82-8ac5b768a7a7","3236afc1-ae87-440b-b1b3-94b06dc4ba52","eb25ee24-2cab-4fc0-94a2-bbaa4ff522de","744c5fc3-7596-4b68-854e-52c913c0fad1","01cc5b8e-e538-4046-91f1-6e06dc961179","6dc08aed-9009-4906-a3d5-822f29a1bf7b","dc8efa26-d6d7-40cf-9285-1d07e9eaa7a7","acb5fc23-f8fd-4faa-807f-a247be33e09c","b186052b-a668-44db-b64f-9f0f8950e5fb","f0833789-3136-4b1b-84f4-d9cfefaccd09","7c3a6974-258f-49a7-91a4-dc012e87d213","f8bd450b-3822-427f-944b-b1dff5f9e682","d2f8e25a-9c7a-4bb2-8d89-5448c2745e36"]}}',
        },
      },
    ],
  };
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

export function calculateTip(subtotal, tipObject, appliedTip) {
  const tipRate = tipObject.value;
  if (tipRate !== null) {
    return subtotal * tipRate;
  }
  return appliedTip;
}

export function calculateNumberItems(cart) {
  if (cart.length === 0) return 0;
  let num = 0;
  cart.forEach((itemObj) => {
    num += itemObj.quantity;
  });
  return num;
}

export function areAllNullValues(obj) {
  for (let key in obj) {
    if (obj[key] !== null) {
      return false;
    }
  }
  return true;
}
