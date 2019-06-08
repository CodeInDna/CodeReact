export default{
	navBar:{
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "6vh",
	},
	logo:{
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		background: "#d6d8db",
		height: "100%",
		display: "flex",
		alignItems: "center",
		fontFamily: 'Segoe UI',
		fontWeight: "200",
		"& a":{
			textDecoration: "none",
			color: "black",
		}
	},
	slider:{
		width: "340px",
		margin: "0 10px !important",
		display: "inline-block",
		"& .noUi-target":{
			height: "10px",
			border: "none",
		},
		"& .noUi-target .noUi-base": {
			background: "linear-gradient(117deg,#c9edf1 0, #ade4ea 25%, #76ced7 50%, #56afb8 75%, #34919a 100%)",
			border: "none",
			borderRadius: "15px",
			cursor: "pointer",
		},
		"& .noUi-connect": {
			background: "none",
		},
		"& .noUi-handle.noUi-handle-lower": {
			background: "#34919a",
			borderRadius: "20px",
			width: "25px",
			height: "25px",
			outline: "none",
			right: "0px",
			top: "-8px",
			cursor: "pointer",
			boxShadow: "none",
			border: "3px solid #ffffff",
			transition: "all 0.3s ease-in-out",
		},
		"& .noUi-handle.noUi-handle-lower.noUi-active":{
			transform: "scale(1.2)",
		},
		"& .noUi-handle.noUi-handle-lower::before, .noUi-handle.noUi-handle-lower::after":{
			display: "none",
		},
		"& .MuiInput-underline:hover:not(.Mui-disabled):before": {
		    borderBottom: "2px solid #34919a !important",
		}
	},
	selectContainer:{
		marginLeft: "auto",
		marginRight: "1rem"
	}
}