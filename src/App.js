import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import QuestMap from "./components/QuestMap";
import Avatar from "./components/GUI/Avatar";
import OptionsMenu from "./components/GUI/OptionsMenu";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Box sx={{ height: "100vh", width: "100%" }}>
        <QuestMap />
        <Box style={{position:'fixed',left:0,top:20,zIndex:999}}>
          <OptionsMenu/>
        </Box>
        <Box style={{ position: "fixed", top: 30, right: 0, zIndex: 999 }}>
          <Avatar />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
