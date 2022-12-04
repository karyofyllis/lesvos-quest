import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";
import LocationPopup from "../LocationPopup";
import data from '../../data/data.json'
import {Fragment, useState} from "react";
import QuizDialog from "../QuizDialog";
import CorporationPopup from "../CorporationPopup";
import ContributorPopup from "../ContributorPopup";

const defaultMarker = new L.icon({
  iconUrl: require("../../assets/building.png"),
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});

const diamondMarker = new L.icon({
  iconUrl: require("../../assets/images/8.png"),
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});

const tavernMarker = new L.icon({
  iconUrl: require("../../assets/images/31.png"),
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});

const corpMarker = new L.icon({
  iconUrl: require("../../assets/images/17.png"),
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});


const contributorMarker = new L.icon({
  iconUrl: require("../../assets/images/49.png"),
  iconSize: 36,
  iconAnchor: [13, 0]
});


const diamonds = [
  {
    location: [39.901635, 25.158952],
  },
  {
    location: [38.562772, 25.937547],
  },
]

const taverns = [
  {
    location: [39.508801, 25.004888],
  },
]

function QuestMap() {

  const [openQuiz, setOpenQuiz] = useState(false)
  const [monument, setMonument] = useState({
    questions: []
  })

  const handleBattle = (monument) => {
    setOpenQuiz(true)
    setMonument(monument)
  }

  return (
    <Fragment>
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
      {
        data.monuments.map(poi => (
          <Marker position={[poi.location.latitude, poi.location.longitude]} icon={defaultMarker}>
            <Popup className="request-popup">
              <LocationPopup poi={poi} onBattle={() => handleBattle(poi)}/>
            </Popup>
          </Marker>
        ))
      }
      {
        data.corporations.map(poi => (
          <Marker position={[poi.location.latitude, poi.location.longitude]} icon={corpMarker}>
            <Popup className="request-popup">
              <CorporationPopup poi={poi} />
            </Popup>
          </Marker>
        ))
      }
      {
        data.contributors.map(poi => (
          <Marker position={[poi.location.latitude, poi.location.longitude]} icon={contributorMarker}>
            <Popup className="request-popup">
              <ContributorPopup poi={poi} />
            </Popup>
          </Marker>
        ))
      }
      {diamonds.map((spot) => (
        <Marker position={spot.location} icon={diamondMarker}>
        </Marker>
      ))}
      {taverns.map((spot) => (
        <Marker position={spot.location} icon={tavernMarker}>
        </Marker>
      ))}
    </MapContainer>
      <QuizDialog open={openQuiz} handleClose={() => setOpenQuiz(false)} monument={monument} />
    </Fragment>
  );
}

export default QuestMap;
