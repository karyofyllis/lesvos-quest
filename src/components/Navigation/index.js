import {Box, IconButton, Stack} from "@mui/material";
import PlayBtn from '../../assets/icons/playBtn.png'
import PauseBtn from '../../assets/icons/pauseBtn.png'
import GameLogo from '../../assets/images/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

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
      <img src ={require("../../assets/images/navigation.png")} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}/>
      <Stack
        px={2}
        flexDirection={"row"} justifyContent={"flex-end"} alignItems={'center'}
        style={{ marginTop: 0 }}
        sx={{
          width: "100%",
          zIndex: 1000,
          height: 50,
        }}
      >
        <Box style={{margin:'0 auto',marginTop:-20}}>
          <img src={GameLogo} height={120}/>
        </Box>

        <Stack direction={"row"} alignItems={"center"} style={{ marginTop: -100}} columnGap={1} mr={2 }>
          <IconButton component={"a"} href={"https://www.facebook.com/profile.php?id=100088437397742"} target={"_blank"}>
            <FacebookIcon/>
          </IconButton>
          <IconButton component={"a"} href={"https://github.com/karyofyllis/lesvos-quest"} target={"_blank"}>
            <GitHubIcon/>
          </IconButton>
        </Stack>
        <div style={{cursor:'pointer',marginTop:-92}} onClick={togglePlayer}>
          <img width={40} height={40} src={isPlaying?PauseBtn:PlayBtn}/>
        </div>
      </Stack>
    </Stack>
  );
}

export default Navigation