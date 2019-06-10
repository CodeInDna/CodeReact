import sizes from './sizes';
export default{
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("xl")]:{
			width:"80%"
		},
		[sizes.down("sm")]:{
			width:"60%"
		}
	},
	nav:{
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems:"center",
		color: "white",
		"& a": {
			textDecoration: "none",
			color: "white"
		}
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "2.5rem",
		[sizes.down("md")]:{
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[sizes.down("xs")]:{
			gridTemplateColumns: "repeat(1, 100%)",
			gridGap: "1rem"
		}
	}
}