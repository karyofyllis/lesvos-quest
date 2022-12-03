import './App.css';
import QuestMap from "./components/QuestMap";
import {Box, CssBaseline} from "@mui/material";

function App() {
  return (
    <Box>
      <CssBaseline/>
      <Box sx={{ height: "100vh", width: "100%"}}>
        <QuestMap/>
      </Box>
    </Box>
  );
}

export default App;
