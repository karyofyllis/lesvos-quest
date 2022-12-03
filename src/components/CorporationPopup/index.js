import {Box, Stack, Typography} from "@mui/material";

function CorporationPopup({ poi }) {

	return (
		<Stack style={{ width: 200 }} mb={6}>
			<Stack direction={"column"} alignItems={"center"} style={{ width: 200 }}>
				<img width={280} src={require("../../assets/images/papurousHeader.png")} alt={""}/>
				<img width={280}  src={require("../../assets/images/papurousFooter.png")} alt={""}/>
			</Stack>

			<Stack style={{ marginTop: -320, marginBottom: 100, objectFit: "cover" }} rowGap={2} ml={2}>
				<Box sx={{ width: 160 }}>

					<Typography variant={"body1"} color={"#ad3c17"} sx={{ fontSize: 14, fontWeight: "bold" }}>{poi.label}</Typography>

					<img src={poi.imageUrl} style={{ width: 160, height: 100, objectFit: "cover", marginBottom: -5, marginTop: 8 }}/>



				</Box>
				<Typography sx={{ fontFamily: "fameFont", fontSize: 12 }}><a href={"#"} style={{ color: "#ad3c17"}} target={"_blank"}>Περισσότερα</a></Typography>
			</Stack>
		</Stack>
	)
}

export default CorporationPopup