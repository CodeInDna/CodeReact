const styles = {
	root: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-4.8px",
		"&:hover svg":{
			color: "white",
			transform: "scale(1.5)"
		}
	},
	boxContent: {
		position: "absolute",
		bottom: "0px",
		left: "0px",
		padding: "10px",
		width: "100%",
		color: "rgb(0, 0, 0, 0.5)",
		textTransform: "uppercase",
		letterSpacing: "1px",
		fontSize: "12px",
		display: "flex",
		justifyContent:"space-between"
	},
	deleteColorBox: {
		transition: "all 0.3s ease-in-out"
	}
}

export default styles;