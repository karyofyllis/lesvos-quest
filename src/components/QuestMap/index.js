import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";
import LocationPopup from "../LocationPopup";
import data from '../../data/data.json'
import {Fragment, useState} from "react";
import QuizDialog from "../QuizDialog";
import {Typography} from "@mui/material";

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
  const [quiz, setQuiz] = useState({
    questions: []
  })

  const handleBattle = () => {
    setOpenQuiz(true)
    setQuiz({
      questions: data.questions
    })
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
              <LocationPopup poi={poi} onBattle={handleBattle}/>
            </Popup>
          </Marker>
        ))
      }
      {
        data.corporations.map(poi => (
          <Marker position={[poi.location.latitude, poi.location.longitude]} icon={corpMarker}>
            <Popup>
              <Typography>{poi.label}</Typography>
            </Popup>
          </Marker>
        ))
      }
      {diamonds.map((spot) => (
        <Marker position={spot.location} icon={diamondMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
      {taverns.map((spot) => (
        <Marker position={spot.location} icon={tavernMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
      <QuizDialog open={openQuiz} handleClose={() => setQuiz(false)} quiz={quiz} />
    </Fragment>
  );
}

export default QuestMap;
