import {Box, Stack, Typography} from "@mui/material";

function CorporationPopup({ poi }) {

	return (
		<Stack style={{ width: 200 }} mb={6}>
			<Stack direction={"column"} alignItems={"center"} style={{ width: 200 }}>
				<img width={280} src={require("../../assets/images/papurousHeader.png")} alt={""}/>
				<img width={230}  style={{ marginTop: -30, marginBottom: -30 }} src={require("../../assets/images/papurousContent.png")} alt={""}/>
				<img width={280}  src={require("../../assets/images/papurousFooter.png")} alt={""}/>
			</Stack>

			<Stack style={{ marginTop: -400, marginBottom: 30, objectFit: "cover" }} rowGap={2} ml={2}>
				<Box sx={{ width: 160 }}>

					<Stack direction={"row"} alignItems={"center"} columnGap={2}>
						<img src={require("../../assets/images/44.png")} width={36} height={36}/>
						<Typography variant={"body1"} color={"#ad3c17"} sx={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>{poi.label}</Typography>
					</Stack>


					<img src={require("../../assets/avatars/" + poi.image)} style={{ width: 160, height: 100, objectFit: "cover", marginBottom: 8, marginTop: 8 }}/>



					<Typography variant={"body1"} color={"#ad3c17"} sx={{ fontSize: 14, fontWeight: "bold" }}>{poi.description}</Typography>

				</Box>
			</Stack>
		</Stack>
	)
}

export default CorporationPopup