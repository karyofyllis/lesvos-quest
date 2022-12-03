import { Button, Stack } from "@mui/material";
import PlayBtn from '../../assets/icons/playBtn.png'
import PauseBtn from '../../assets/icons/pauseBtn.png'

function Navigation({ isPlaying, togglePlayer }) {
  return (
    <Stack
      sx={{
        height: 50,
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 998,
        boxShadow: 4,
      }}
    >
      <img
        src={require("../../assets/images/navigation.png")}
        style={{ width: " 100%", height: 50, objectFit: "fill" }}
        alt={"navigation"}
      />

      <Stack
        px={2}
        flexDirection={"row"} justifyContent={"flex-end"} alignItems={'center'}
        style={{ marginTop: -45 }}
        sx={{
          width: "100%",
          zIndex: 1000,
          height: 50,
        }}
      >
        <div style={{cursor:'pointer'}} onClick={togglePlayer}>
          <img width={40} height={40} src={isPlaying?PauseBtn:PlayBtn}/>
        </div>
      </Stack>
    </Stack>
  );
}

export default Navigation