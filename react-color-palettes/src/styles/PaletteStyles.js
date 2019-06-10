import sizes from './sizes';

export default{
	palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	paletteColors: {
		height: "90%",
	},
	goBack:{
		width: "20%",
		height: "50%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.8px",
		backgroundColor: "black",
		"& a":{
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
			color: "white",
			textTransform: "uppercase",
			cursor: "pointer", 
			textDecoration: "none",
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: "50%"
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "20%"
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: "10%"
		},
	}
}