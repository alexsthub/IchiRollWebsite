import React from "react";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
    width: '100%',
    height: '350px'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
            <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{
            lat: 47.719947,
            lng: -122.354950
            }}
            >
                <Marker/>
            </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyApuOpZPe1uTPu51vrM--tLqRvnNap4Nbs'
})(MapContainer);