import React from "react";
import "../styles/Order.css";

import {
  getRestaurantDetails,
  getMenuDetails,
  addDaysToDate,
  getDayOfWeek,
} from "../helpers/utils";
import { convertRawOpenHours } from "../helpers/hoursParser";
import constructMenu from "../helpers/menuQuery";
import {
  getDateOptions,
  getTimeRangesForDay,
  withinTimeRange,
  isGreaterDate,
} from "../helpers/dateHelpers";
import { priceToString, calculateSubtotal, calculateTax } from "../helpers/utils";
import { TAX_RATE } from "../constants/values";

// Components
import OrderHeader from "../components/order/OrderHeader";
import OrderTime from "../components/order/OrderTime";
import OrderMenu from "../components/order/OrderMenu";
import AddItemModal from "../components/order/AddItemModal";

const NUM_DAYS_FUTURE = 3;
export default class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNow: true,
      dateOptions: [],
      hourOptions: [],
      selectedDate: null,
      selectedTime: null,
      selectedMenuCategory: null,
      selectedItem: null,
      cart: [],
      loading: true,
    };

    this.editIndex = null;
    this.isNowAvailable = true;
    this.priceObject = this.calculatePrices();
  }

  componentDidMount = async () => {
    const restaurantDetails = await getRestaurantDetails();
    const rawMenu = await getMenuDetails();
    this.openHours = convertRawOpenHours(restaurantDetails.openTimes);
    this.menu = constructMenu(rawMenu);

    const selectedMenuCategory = Object.keys(this.menu)[0];
    const storageCart = localStorage.getItem("cart");
    const setTime = localStorage.getItem("time");
    if (storageCart) {
      const cart = JSON.parse(storageCart);
      this.priceObject = this.calculatePrices(cart);
      this.setState({ cart: cart });
    }
    this.selectFirstAvailableTime(this.openHours);
    if (setTime) {
      const timeObj = JSON.parse(setTime);
      if (
        !timeObj.isNow &&
        this.isAcceptableTime(timeObj.selectedDate, timeObj.selectedTime, this.openHours)
      ) {
        this.setState({
          isNow: timeObj.isNow,
          selectedDate: timeObj.selectedDate,
          selectedTime: timeObj.selectedTime,
        });
      }
    }
    this.setState({ selectedMenuCategory: selectedMenuCategory });
  };

  isAcceptableTime = (selectedDate, selectedTime, openHours) => {
    const dateOptions = this.state.dateOptions;
    if (
      dateOptions.some((dateOption) => {
        return dateOption.label === selectedDate.label;
      })
    ) {
      const selectedDateObj = new Date(selectedDate.value);
      const selectedDayOfWeek = getDayOfWeek(selectedDateObj);
      const availableHours = getTimeRangesForDay(selectedDateObj, openHours[selectedDayOfWeek]);
      if (
        availableHours.some((availableHour) => {
          const value = availableHour.value;
          return (
            value.hour === selectedTime.value.hour && value.minute === selectedTime.value.minute
          );
        })
      ) {
        return true;
      }
    }
    return false;
  };

  selectFirstAvailableTime = (openHours) => {
    let date = new Date();

    const initDayofWeek = getDayOfWeek(date);
    let dayOfWeek = getDayOfWeek(date);
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    let hours = openHours[dayOfWeek];
    if (!withinTimeRange(hours, currentHour, currentMinute)) {
      this.setState({ isNow: false });
      this.isNowAvailable = false;
      if (
        hours &&
        (currentHour < hours.startHour ||
          (currentHour === hours.startHour && currentMinute < hours.startHour))
      ) {
        date.setHours(hours.startHour, hours.startMinute);
      } else {
        let daysAdded = 0;
        while (true) {
          dayOfWeek = dayOfWeek === 6 ? 1 : dayOfWeek + 1;
          hours = openHours[dayOfWeek];
          daysAdded = daysAdded + 1;
          if (hours) {
            date = addDaysToDate(date, daysAdded);
            date.setHours(hours.startHour, hours.startMinute);
            break;
          }
        }
      }
    }
    const dateOptions = getDateOptions(date, openHours, NUM_DAYS_FUTURE);
    const hourOptions = getTimeRangesForDay(date, openHours[dayOfWeek]);

    if (this.isNowAvailable && getDayOfWeek(dateOptions[0].value) !== initDayofWeek) {
      this.setState({ isNow: false });
      this.isNowAvailable = false;
    }

    this.setState({
      hourOptions: hourOptions,
      dateOptions: dateOptions,
      selectedDate: dateOptions[0],
      selectedTime: hourOptions[0],
      loading: false,
    });
  };

  updateScheduledTime = (selectedDate, selectedTime) => {
    const setTime = {
      isNow: this.state.isNow,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
    };
    localStorage.setItem("time", JSON.stringify(setTime));
    this.setState({ selectedDate: selectedDate, selectedTime: selectedTime });
  };

  updateHourOptions = (selectedDate) => {
    const currentDate = new Date();
    if (isGreaterDate(selectedDate, currentDate)) {
      const hours = this.openHours[getDayOfWeek(selectedDate)];
      selectedDate.setHours(hours.startHour, hours.startMinute);
    } else {
      selectedDate = new Date();
    }
    const newHours = getTimeRangesForDay(selectedDate, this.openHours[getDayOfWeek(selectedDate)]);
    this.setState({ hourOptions: newHours });
  };

  onCategoryClick = (e, category) => {
    e.preventDefault();
    if (category !== this.state.selectedMenuCategory) {
      this.setState({ selectedMenuCategory: category });
    }
  };

  onItemClick = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedItem = {
      item: item,
      quantity: 1,
      specialInstruction: "",
    };
    this.editIndex = null;
    this.setState({ selectedItem: selectedItem });
  };

  completeAdd = (item, quantity, specialInstruction) => {
    const newItem = {
      item: item,
      quantity: quantity,
      specialInstruction: specialInstruction,
      timestamp: new Date().getTime(),
    };
    const cart = this.state.cart;
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    this.priceObject = this.calculatePrices(cart);
    this.setState({ cart: cart });
    this.closeModal();
  };

  completeEdit = (item, quantity, specialInstruction, index) => {
    const editItem = {
      item: item,
      quantity: quantity,
      specialInstruction: specialInstruction,
      timestamp: item.timestamp,
    };
    const cart = this.state.cart;
    cart[index] = editItem;

    localStorage.setItem("cart", JSON.stringify(cart));
    this.priceObject = this.calculatePrices(cart);
    this.setState({ cart: cart });
    this.closeModal();
  };

  handleEdit = (index) => {
    const item = this.state.cart[index];
    this.editIndex = index;
    this.setState({ selectedItem: item });
  };

  handleRemove = (index) => {
    const currentCart = this.state.cart;
    currentCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    this.priceObject = this.calculatePrices(currentCart);
    this.setState({ cart: currentCart });
  };

  handleCheckout = (e) => {
    if (this.state.cart.length === 0) {
      e.preventDefault();
    } else {
      const setTime = {
        isNow: this.state.isNow,
        selectedDate: this.state.selectedDate,
        selectedTime: this.state.selectedTime,
      };
      localStorage.setItem("time", JSON.stringify(setTime));
    }
  };

  closeModal = () => {
    this.setState({ selectedItem: null });
  };

  calculatePrices = (cart = null) => {
    const subtotal = calculateSubtotal(cart ? cart : this.state.cart);
    const tax = calculateTax(subtotal, TAX_RATE);
    const total = subtotal + tax;

    const priceObject = {
      subtotal: priceToString(subtotal),
      tax: priceToString(tax),
      total: priceToString(total),
    };
    return priceObject;
  };

  render() {
    const containerClass = `order-outer ${this.state.loading ? "hidden" : "show"}`;
    return (
      <div className={containerClass}>
        <div className="order-inner">
          <OrderHeader />
          <OrderTime
            openHours={this.state.openHours}
            isNow={this.state.isNow}
            isNowAvailable={this.isNowAvailable}
            handleTimeTypeChange={(isNow) => this.setState({ isNow: isNow })}
            dateOptions={this.state.dateOptions}
            hourOptions={this.state.hourOptions}
            selectedDate={this.state.selectedDate}
            selectedTime={this.state.selectedTime}
            updateHourOptions={this.updateHourOptions}
            onSave={this.updateScheduledTime}
          />
          <OrderMenu
            menu={this.menu}
            cart={this.state.cart}
            selectedCategory={this.state.selectedMenuCategory}
            onCategoryClick={this.onCategoryClick}
            onItemClick={this.onItemClick}
            handleListItemEdit={this.handleEdit}
            handleListItemRemove={this.handleRemove}
            handleCheckout={this.handleCheckout}
            priceObject={this.priceObject}
          />
        </div>
        {this.state.selectedItem ? (
          <AddItemModal
            itemObj={this.state.selectedItem}
            editIndex={this.editIndex}
            closeModal={() => this.setState({ selectedItem: null })}
            onAdd={this.completeAdd}
            onEdit={this.completeEdit}
          />
        ) : null}
      </div>
    );
  }
}
