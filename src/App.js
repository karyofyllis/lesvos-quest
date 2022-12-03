import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import QuestMap from "./components/QuestMap";
import Avatar from "./components/GUI/Avatar";
import Navigation from "./components/Navigation";
import useSound from "use-sound";
import track from "./assets/audio/desert.mp3";
import {useState} from "react";

function App() {
  const [play, exposer] = useSound(track);
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayer = () => {
    if (isPlaying) {
      setIsPlaying(false)
      exposer.stop()
    } else {
      setIsPlaying(true)
      play()
    }
  }

  return (
    <Box>
      <CssBaseline />
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Navigation togglePlayer={togglePlayer} isPlaying={isPlaying} />
        <QuestMap />
        <Box style={{ position: "fixed", top: 60, right: -60, zIndex: 999 }}>
          <Avatar />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
