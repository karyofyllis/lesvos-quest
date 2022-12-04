import {Box, IconButton, Stack, Typography} from "@mui/material";
import {useState} from "react";
import {Close} from "@mui/icons-material";
// import {Animated} from "react-animated-css";

const data = require('../../data/data.json')
const speechBubble = require('../../assets/images/speechBubble.png')

const Hero = ({contributor,isTalking=false,dismiss}) =>{

  const heroAvatar = require(`../../assets/avatars/${contributor.image}`)

  return <div>
    {isTalking && (
      <Stack p={7.5} mt={-1} style={{width:440,height:265,userSelect:'none',backgroundImage:`url(${speechBubble})`,backgroundSize:'cover',marginTop:-225,marginLeft:-30,position:'absolute'}}>
        <Stack direction={'row'} alignItems={'center'} alignContent={'flex-start'} justifyContent={'space-between'}>
          <Typography fontFamily={'gameFont'} fontWeight={'bolder'} variant={'h5'}>{contributor.label}</Typography>
          <IconButton onClick={dismiss}>
            <Close/>
          </IconButton>
        </Stack>
        <Typography fontFamily={'gameFont'} fontSize={18} variant={'body2'}>{contributor.description}</Typography>
      </Stack>
    )}
  <div style={{width:125,height:125,borderRadius:'50%',border:'10px solid #987548',backgroundImage:`url(${heroAvatar})`,backgroundSize:'cover'}}/>
  </div>
}

const FooterInfo = () =>{
  const [heroTalk,setHeroTalk] = useState(0)

  const nextHeroTalks = () =>{
    setHeroTalk((prevState)=>prevState+1)
  }

  if (heroTalk >= 4)
    return <></>

  return <div style={{position:'fixed',bottom:0,left:0,minWidth:200,width:'auto',height:140,zIndex: 999,padding:10}}>
    <Stack direction={'row'} gap={1}>
      {data.contributors.map((contributor,idx)=>{
        return <Hero key={`hero-${idx}`} contributor={contributor} isTalking = {idx === heroTalk} dismiss={nextHeroTalks}/>
      })
      }
    </Stack>
  </div>
}

export default FooterInfo