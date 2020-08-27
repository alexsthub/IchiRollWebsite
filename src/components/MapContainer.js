import React from "react";
import "../styles/components/MapContainer.css";

import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const mapProps = {
  center: {
    lat: 47.719947,
    lng: -122.35495,
  },
  zoom: 15,
};

const mapOptions = {
  mapTypeControl: false,
  scrollwheel: false,
};

// TODO: Create a marker and an info window
export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showingInfoWindow: true, activeMarker: {} };
  }
  å;
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_MAPS_KEY,
              region: "us",
              language: "en",
            }}
            defaultCenter={mapProps.center}
            defaultZoom={mapProps.zoom}
            options={mapOptions}
          >
            <Marker lat={mapProps.center.lat} lng={mapProps.center.lng} />
          </GoogleMapReact>
          <a
            className="map-button"
            href="https://www.google.com/maps?cid=4060084535191355784"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    );
  }
}

class Marker extends React.Component {
  render() {
    return (
      <div className="map-marker">
        <div className="marker-window">
          <p>{"Ichi Roll Wok & Teriyaki"}</p>
          <p>306 N 125th St, Seattle, WA 98133</p>
        </div>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: 54 }} />
      </div>
    );
  }
}
