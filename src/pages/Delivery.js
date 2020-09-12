import React from "react";
import "../styles/Delivery.css";
import { deliveryCompanies } from "../constants/deliveryCompanies";

import Footer from "../components/Footer";

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
      <div className="delivery-container fade-in">
        <h2>DELIVERY OPTIONS</h2>
        <div className="delivery-options-container">{options}</div>
        <Footer style={{ marginTop: "auto" }} />
      </div>
    );
  }
}
