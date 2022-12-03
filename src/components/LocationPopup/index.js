import {Box, Stack, styled, Typography} from "@mui/material";
import ButtonBased from "../ButtonBased";

const Symbol = styled("div")(() => ({
	borderRadius: "50%",
	backgroundColor: "#1a404d",
	border: "2px solid #52410d",
	width: 40,
	height: 40,
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}))

function LocationPopup({ poi }) {

	return (
		<Stack style={{ width: 280 }}>
			<Stack direction={"column"} alignItems={"center"}>
				<img src={require("../../assets/images/papurousHeader.png")} alt={""}/>
				<img style={{ marginTop: -50, marginBottom: -50 }} src={require("../../assets/images/papurousContent.png")} alt={""}/>
				<img src={require("../../assets/images/papurousFooter.png")} alt={""}/>
			</Stack>

			<Stack rowGap={1} style={{ marginTop: -700, height: 600, objectFit: "cover" }}>
				<Box sx={{ boxShadow: 10 }}>
					<img src={poi.imageUrl} style={{ width: "100%", height: 200, objectFit: "cover", marginBottom: -5 }}/>

					<Stack sx={{ backgroundColor: "#ad3c17"}} p={1}>
						<Typography variant={"h6"} color={"white"}>{poi.label}</Typography>
					</Stack>
				</Box>


				<Stack columnGap={1} mt={2} direction={"row"} alignItems={"flex-start"}>
					<Symbol>
						<img src={require("../../assets/images/12.png")} width={24} height={24}/>
					</Symbol>
					<Stack direction={"column"} alignItems={"flex-start"}>
						<Typography variant={"h6"} sx={{ color: "#ad3c17"}}>Έχει κατακτηθεί</Typography>
						<Typography><b>8 Φορές</b></Typography>
					</Stack>
				</Stack>

				<Stack columnGap={1} mt={2} direction={"row"} alignItems={"flex-start"}>
					<Symbol>
						<img src={require("../../assets/building.png")} width={24} height={24}/>
					</Symbol>
					<Stack direction={"column"} alignItems={"flex-start"}>
						<Typography variant={"h6"} sx={{ color: "#ad3c17"}}>Ανήκει στον</Typography>
						<Typography><b>Pouthenas13</b></Typography>
					</Stack>
				</Stack>

				<div style={{ flex: 1 }}/>
				<ButtonBased image={"fightButton.png"}/>
				<ButtonBased image={"dennyButton.png"}/>
			</Stack>
		</Stack>
	)
}

export default LocationPopup