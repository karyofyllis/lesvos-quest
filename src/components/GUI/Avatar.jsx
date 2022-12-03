import {Box, Stack, Typography} from "@mui/material";
import AvatarImage from '../../assets/images/avatar.png'
import MapImage from '../../assets/icons/mapClosed.png'
import NewBattleImage from '../../assets/images/newBattleButton.png'

const Avatar = ({nickName='Alani39',location='Mutilini, NA',conquers=15}) => {
  return <Box flex alignItems={'center'} style={{width: 250, minHeight: 300, height: 'auto'}}>
    <img src={AvatarImage} style={{borderRadius: '50%', border: '10px solid #987548', width: 180, height: 180}}
         alt={'players avatar'}/>
    <Box style={{width: 160, minHeight: 200, padding: 10, backgroundColor: '#2f1805', marginTop: -80, marginLeft: 12}}>
      <Stack pt={10} alignItems={'center'} direction={'column'}>
        <Typography variant={'h5'} color={'#fa990e'} fontFamily={'gameFont'} fontWeight={'800'}>{nickName}</Typography>
        <Typography color={'#ccd33a'} fontFamily={'gameFont'} fontWeight={'600'}>{location}</Typography>
        <Stack direction={'row'} mt={4} alignItems={'center'} spacing={2}>
          <img src={MapImage} height={15} width={15}/>
          <Typography fontFamily={'gameFont'} color={'white'}>{conquers} Kατακτήσεις</Typography>
        </Stack>
      </Stack>
    </Box>
    <Box ml={2.5} mt={-0.5}>
      <img style={{cursor:'pointer'}} src={NewBattleImage} height={45}/>
    </Box>
  </Box>
}


export default Avatar