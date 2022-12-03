import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import QuestMap from "./components/QuestMap";
import Avatar from "./components/GUI/Avatar";
import OptionsMenu from "./components/GUI/OptionsMenu";
import Navigation from "./components/Navigation";
import useSound from "use-sound";
import track from "./assets/audio/desert.mp3";
import {useEffect, useState} from "react";
// import Snowfall from 'react-snowfall'

function App() {
  const [play, exposer] = useSound(track);
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (isPlaying) {
      play()
    } else {
      exposer.pause()
    }
  }, [exposer, isPlaying, play])

  const togglePlayer = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  return (
    <Box>
      <CssBaseline />
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Navigation togglePlayer={togglePlayer} isPlaying={isPlaying} />
        <QuestMap />
        <Box style={{position:'fixed',left:0,top:49,zIndex:999}}>
          <OptionsMenu/>
        </Box>
        <Box style={{ position: "fixed", top: 60, right: -60, zIndex: 999 }}>
          <Avatar />
        </Box>
      </Box>
      {/*<Snowfall style={{ zIndex: 999 }}/>*/}
    </Box>
  );
}

export default App;
