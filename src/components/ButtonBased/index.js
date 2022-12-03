import {CardActionArea, styled} from "@mui/material";

const StyledButton = styled(CardActionArea)(() => ({
	"&:hover": {
		opacity: 0.8
	}
}))

function ButtonBased(props) {

	const { image }  = props

	return (
		<StyledButton disableRipple>
			<img src={require(`../../assets/images/${image}`)} alt={""} style={{ width: "100% "}}/>
		</StyledButton>
	)
}

export default ButtonBased