import {Box, Stack} from "@mui/material";
import ButtonWide from "../@core/ButtonWide";
import MessageIcon from '../../assets/icons/book.png'
import AllianceIcon from '../../assets/icons/alliance.png'

const OptionsMenu = () =>{
  return <Stack style={{backgroundColor:'#2f1805',width:200,minHeight:200,height:'auto',borderBottomRightRadius:'10%'}} p={2} spacing={1}>
    <ButtonWide title={'Μηνύματα'} icon={MessageIcon}/>
    <ButtonWide title={'Συμμαχία'} icon={AllianceIcon}/>
  </Stack>
}

export default OptionsMenu