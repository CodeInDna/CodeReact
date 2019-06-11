import sizes from './sizes';
import chroma from "chroma-js";

const styles = {
	root: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-5px",
		"&:hover svg":{
			color: "white",
			transform: "scale(1.5)"
		},
		[sizes.down("lg")]:{
			width:"25%",
			height: "20%"
		},
		[sizes.down("md")]:{
			width:"50%",
			height: "10%"
		},
		[sizes.down("sm")]:{
			width:"100%",
			height: "7%"
		}
	},
	boxContent: {
		position: "absolute",
		bottom: "0px",
		left: "0px",
		padding: "10px",
		width: "100%",
		color:  props => chroma(props.color).luminance() <= 0.08 ? "white" : "rgba(0, 0, 0, 0.8)",
		textTransform: "uppercase",
		letterSpacing: "1px",
		fontSize: "12px",
		display: "flex",
		justifyContent:"space-between",
	},
	deleteColorBox: {
		transition: "all 0.3s ease-in-out"
	}
}

export default styles;