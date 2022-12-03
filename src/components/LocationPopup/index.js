import {Box, Stack, styled, Typography} from "@mui/material";
import ButtonBased from "../ButtonBased";

const Symbol = styled("div")(() => ({
	borderRadius: "50%",
	backgroundColor: "#1a404d",
	border: "2px solid #52410d",
	width: 36,
	height: 36,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}))

function LocationPopup({ poi, onBattle }) {

	return (
		<Stack style={{ width: 200 }} mb={6}>
			<Stack direction={"column"} alignItems={"center"} style={{ width: 200 }}>
				<img width={280} src={require("../../assets/images/papurousHeader.png")} alt={""}/>
				<img width={230}  style={{ marginTop: -40, marginBottom: -50 }} src={require("../../assets/images/papurousContent.png")} alt={""}/>
				<img width={280}  src={require("../../assets/images/papurousFooter.png")} alt={""}/>
			</Stack>

			<Stack style={{ marginTop: -380, height: 310, objectFit: "cover" }} ml={0.5}>
				<Box sx={{ width: 190 }}>
					<img src={poi.imageUrl} style={{ width: 190, height: 100, objectFit: "cover", marginBottom: -5 }}/>

					<Stack sx={{ backgroundColor: "#ad3c17", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} p={1}>
						<Typography variant={"body1"} color={"white"} sx={{ fontSize: 12 }}>{poi.label}</Typography>
					</Stack>
				</Box>

				<Stack columnGap={1} mt={1} direction={"row"} alignItems={"flex-start"}>
					<Symbol>
						<img src={require("../../assets/images/12.png")} width={24} height={24}/>
					</Symbol>
					<Stack direction={"column"} alignItems={"flex-start"}>
						<Typography variant={"h6"} sx={{ color: "#ad3c17", fontSize: 16,fontFamily:'gameFont',fontWeight:'bolder'}}>Έχει κατακτηθεί</Typography>
						<Typography sx={{ fontSize: 14,fontFamily:'gameFont',fontWeight:'400' }}><b>8 Φορές</b></Typography>
					</Stack>
				</Stack>

				<Stack columnGap={1} mt={1} direction={"row"} alignItems={"flex-start"} mb={1}>
					<Symbol>
						<img src={require("../../assets/building.png")} width={30} height={30}/>
					</Symbol>
					<Stack direction={"column"} alignItems={"flex-start"}>
						<Typography variant={"h6"} sx={{ color: "#ad3c17", fontSize: 16,fontFamily:'gameFont',fontWeight:'bolder'}}>Ανήκει στον</Typography>
						<Typography sx={{ fontSize: 14,fontFamily:'gameFont',fontWeight:'400' }}><b>Pouthenas13</b></Typography>
					</Stack>
				</Stack>

				<div style={{ marginLeft:12,alignItems:'center',alignContent:'center',display:'flex', flexDirection:'column'}}>
				<ButtonBased image={"fightButton.png"} onClick={onBattle} />
				<ButtonBased image={"dennyButton.png"}/>
				</div>
			</Stack>
		</Stack>
	)
}

export default LocationPopup