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
		height: "50%",
		width: "20%",
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
		}
	}
}