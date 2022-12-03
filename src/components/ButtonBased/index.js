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
			<img src={require(`../../assets/images/${image}`)} alt={""} width={180}/>
		</StyledButton>
	)
}

export default ButtonBased