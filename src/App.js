import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import QuestMap from "./components/QuestMap";
import Avatar from "./components/GUI/Avatar";
import OptionsMenu from "./components/GUI/OptionsMenu";
import Navigation from "./components/Navigation";
import useSound from "use-sound";
import track from "./assets/audio/desert.mp3";
import {useEffect, useState} from "react";
import FooterInfo from "./components/FooterInfo";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-6CM79VBLV5"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const [play, exposer] = useSound(track);
  const [isPlaying, setIsPlaying] = useState(false)
  const welcome = localStorage.getItem('heroesWelcome')
  const [showFooter, setShowFooter] = useState(!welcome)

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
        <QuestMap togglePlayer={togglePlayer} isPlaying={isPlaying} />
        <Box style={{position:'fixed',left:0,top:49,zIndex:999}}>
          <OptionsMenu setShowFooter={setShowFooter}/>
        </Box>
        <Box style={{ position: "fixed", top: 60, right: -60, zIndex: 999 }}>
          <Avatar />
        </Box>
      </Box>
      {showFooter && <FooterInfo setShowFooter={setShowFooter} />}
    </Box>
  );
}

export default App;
