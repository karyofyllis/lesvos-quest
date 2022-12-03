import { Button, Stack } from "@mui/material";

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
        style={{ marginTop: -50 }}
        sx={{
          width: "100%",
          zIndex: 1000,
          height: 50,
        }}
      >
	      {/* ELEMENTS GO HERE*/}
        <Button size={"small"} variant={"contained"} onClick={togglePlayer}>
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Stack>
    </Stack>
  );
}

export default Navigation