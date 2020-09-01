import React from "react";
import "../styles/Delivery.css";
import { deliveryCompanies } from "../constants/deliveryCompanies";

export default class DeliveryScreen extends React.Component {
  render() {
    const options = deliveryCompanies.map((delivery) => {
      return (
        <div className="delivery-option" key={delivery.name}>
          <p>{delivery.name.toUpperCase()}</p>
          <a
            href={delivery.link}
            target="_blank"
            rel="noopener noreferrer"
          >{`Order on ${delivery.name}`}</a>
        </div>
      );
    });

    return (
      <div className="delivery-container">
        <h2>DELIVERY OPTIONS</h2>
        <div className="delivery-options-container">{options}</div>
      </div>
    );
  }
}
