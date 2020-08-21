import { fixtures, helpers } from "wix-restaurants-js-sdk";

export function getContact(name, email, phone) {
  let contact = fixtures.Contact();

  const splitName = name.split(" ");
  contact.setFirstName(splitName[0]);
  if (splitName.length > 1) {
    contact.setLastName(splitName[1]);
  }
  if (email) contact.setEmail(email);
  if (phone) contact.setPhone(phone);
  return contact.val();
}

export function getOrderItems(cart) {
  let orderItems = [];
  cart.forEach((itemObj) => {
    const orderItem = fixtures
      .OrderItem()
      .setItemId(itemObj.item.id)
      .setPrice(itemObj.item.price)
      .setCount(itemObj.quantity);
    if (itemObj.specialInstruction !== "") orderItem.setComment(itemObj.specialInstruction);
    orderItems.push(orderItem.val());
  });
  return orderItems;
}

export function getDispatch(scheduledTime) {
  const dispatch = fixtures.Dispatch().setPickup();
  if (scheduledTime.isNow) {
    dispatch.setAsap();
  } else {
    dispatch.setFutureOrder();
    const timestamp = getTimestampFromDateTime(
      scheduledTime.selectedDate,
      scheduledTime.selectedTime
    );
    dispatch.setDispatchTime(timestamp);
  }
  return dispatch.val();
}

function getTimestampFromDateTime(date, time) {
  const scheduledDate = new Date(date.value);
  scheduledDate.setHours(time.value.hour, time.value.minute, 0, 0);
  return scheduledDate.getTime();
}

export function getPlatform() {
  const platform = fixtures.Platform().setWeb().val();
  return platform;
}

export function getOrderCharges(dispatch, orderItems, tip, source, platform, chargesV2, timezone) {
  const orderCharges = helpers.Order.getOrderCharges({
    dispatchType: dispatch.type,
    dispatchTime: dispatch.time,
    orderItems: orderItems,
    tip: tip,
    source: source,
    platform: platform,
    chargesV2: chargesV2,
    timezone: timezone,
  });
  return orderCharges;
}

export function getPayment(total, card) {
  return fixtures.Payment().setAmount(total).setCreditCard(card).val();
}
