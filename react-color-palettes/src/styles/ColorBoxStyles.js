import chroma from "chroma-js";
import sizes from './sizes';

export default{
	colorBox:{
		width: "20%",
		height: props => props.showLink ? "25%" : "50%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4px",
		"&:hover button": {
			opacity: "1",
			transitionDuration: "0.8s",
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: props => props.showLink ? "20%" : "50%",
		},
		[sizes.down("md")]: {
			width: "50%",
			height: props => props.showLink ? "10%" : "20%",
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: props => props.showLink ? "7%" : "10%",
		}
	},
	copyText: {
		color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.8)" : "white",
	},
	colorName: {
		color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "rgba(0, 0, 0, 0.8)"
	},
	getMore: {
		color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.8)" : "white",
		width: "60px",
		height:" 30px",
		textAlign: "center",
		lineHeight: "30px",
		position: "absolute",
		bottom: "0px",
		right: "0px",
		background: "rgba(255, 255, 255, 0.3)",
		textTransform: "uppercase",
		border: "0px",
	},
	copyButton: {
		color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.8)" : "white",
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginLeft: "-50px",
		marginTop: "-15px",
		textAlign: "center",
		outline: "none",
		border: "none",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		textTransform: "uppercase",
		cursor: "pointer",
		textDecoration: "none",
		opacity:"0"
	},
	boxContent: {
		position: "absolute",
		bottom: "0px",
		left: "0px",
		padding: "10px",
		width: "100%",
		color: "black",
		textTransform: "uppercase",
		letterSpacing: "1px",
		fontSize: "12px",
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transition: "transform 0.6s ease-in-out",
		transform: "scale(0.1)"
	},
	showOverlay: {
		opacity: "1",
		zIndex: "10",
		transform: "scale(50)",
		position: "absolute",
	},
	copyOverlayMsg: {
		position: "fixed",
		left: "0",
		right: "0",
		bottom: "0",
		top: "0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: "0",
		color: "white",
		"& h1":{
			fontWeight: "400",
			textShadow: "1px 2px black",
			background: "rgba(255, 255, 255, 0.3)",
			width: "100%",
			textAlign: "center",
			marginBottom: "0",
			padding: "1rem",
			textTransform: "uppercase",
			[sizes.down("xs")]:{
				fontSize: "5rem"
			}
		},
		"& p": {
			fontWeight: "100",
			fontSize: "2rem",
		}
	},
	overlayMsgShow: {
		opacity: "1",
		zIndex: "25",
		transform: "scale(1)",
		transition: "all 0.3 ease-in-out",
		transitionDelay: "0.3s",
	}
}