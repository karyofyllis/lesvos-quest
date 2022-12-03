import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

const defaultMarker = new L.icon({
  iconUrl: require("../../assets/building.png"),
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});


const spots = [
  {
    location: [39.321402, 26.332261],
  },
  {
    location: [39.106138, 26.549872],
  },
  {
    location: [39.151624, 25.969304],
  },
];

function QuestMap() {
  return (
    <MapContainer
      center={{ lat: 39.321402, lng: 26.332261 }}
      style={{ width: "100%", height: "100%" }}
      zoomControl={false}
      zoom={7}
    >
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}"
        ext={"jpg"}
      />
      {/*<LocationMarker />*/}
      {spots.map((spot) => (
        <Marker position={spot.location} icon={defaultMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default QuestMap;
