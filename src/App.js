import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import QuestMap from "./components/QuestMap";
import Avatar from "./components/GUI/Avatar";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Box sx={{ height: "100vh", width: "100%" }}>
        <Navigation/>
        <QuestMap />
        <Box style={{ position: "fixed", top: 20, right: 0, zIndex: 999 }}>
          <Avatar />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
