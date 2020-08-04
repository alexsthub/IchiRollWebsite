import React from "react";
import "../styles/Order.css";

import { getRestaurantDetails, getMenuDetails, addDaysToDate } from "../helpers/utils";
import { convertRawOpenHours } from "../helpers/hoursParser";
import constructMenu from "../helpers/menuQuery";
import {
  getDateOptions,
  getTimeRangesForDay,
  withinTimeRange,
  isGreaterDate,
} from "../helpers/dateHelpers";

// Components
import OrderHeader from "../components/order/OrderHeader";
import OrderTime from "../components/order/OrderTime";
import OrderMenu from "../components/order/OrderMenu";
import AddItemModal from "../components/order/AddItemModal";

// TODO: Disable ASAP if current time is not open hour
// TODO: Width 70% does not really work.
const NUM_DAYS_FUTURE = 3;
export default class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "ASAP",
      dateOptions: [],
      hourOptions: [],
      selectedDate: null,
      selectedTime: null,
      selectedMenuCategory: null,
      selectedItem: null,
      cart: [],
    };

    this.editIndex = null;
  }

  componentDidMount = async () => {
    const restaurantDetails = await getRestaurantDetails();
    const rawMenu = await getMenuDetails();
    this.openHours = convertRawOpenHours(restaurantDetails.openTimes);
    this.menu = constructMenu(rawMenu);
    console.log(this.menu);

    const selectedMenuCategory = Object.keys(this.menu)[0];
    this.setState({ selectedMenuCategory: selectedMenuCategory });
    this.selectFirstAvailableTime(this.openHours);
  };

  selectFirstAvailableTime = (openHours) => {
    let date = new Date();

    let dayOfWeek = date.getDay() - 1;
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    let hours = openHours[dayOfWeek];
    if (!withinTimeRange(hours, currentHour, currentMinute)) {
      if (
        currentHour < hours.startHour ||
        (currentHour === hours.startHour && currentMinute < hours.startHour)
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
    this.setState({
      hourOptions: hourOptions,
      dateOptions: dateOptions,
      selectedDate: dateOptions[0],
      selectedTime: hourOptions[0],
    });
  };

  updateScheduledTime = (selectedDate, selectedTime) => {
    this.setState({ selectedDate: selectedDate, selectedTime: selectedTime });
  };

  updateHourOptions = (selectedDate) => {
    const currentDate = new Date();
    if (isGreaterDate(selectedDate, currentDate)) {
      const hours = this.openHours[selectedDate.getDay() - 1];
      selectedDate.setHours(hours.startHour, hours.startMinute);
    } else {
      selectedDate = new Date();
    }
    const newHours = getTimeRangesForDay(selectedDate, this.openHours[selectedDate.getDay() - 1]);
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
    this.setState({ cart: currentCart });
  };

  closeModal = () => {
    this.setState({ selectedItem: null });
  };

  render() {
    if (this.state.selectedDate === null) return null;
    return (
      <div className="order-outer">
        <div className="order-inner">
          <OrderHeader />
          <OrderTime
            openHours={this.state.openHours}
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
