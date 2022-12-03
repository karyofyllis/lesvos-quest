import {Box, Stack, Typography} from "@mui/material";
import WoodenWideButton from '../../assets/images/buttonLeftMenu.png'
const ButtonWide = ({icon,title}) =>{
  return <Stack color={'white'} style={{backgroundImage:`url(${WoodenWideButton})`,backgroundSize:'cover'}} p={1} direction={'row'} alignItems={'center'} spacing={2}>
    <img src={icon} width={15} height={15}/>
    <Typography color={'white'} fontFamily={'gameFont'} variant={'h6'}>{title}</Typography>
  </Stack>
}

export default ButtonWide