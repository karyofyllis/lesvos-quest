import {Stack} from "@mui/material";

function Navigation() {
	return (
		<Stack
			sx={{height: 50, width: "100%", position: "fixed", top: 0, zIndex: 998, boxShadow: 4 }}
		>
			<img
				src={require("../../assets/images/navigation.png")}
				style={{width: " 100%", height: 50}}
				alt={"navigation"}/>
		</Stack>
	);
}

export default Navigation