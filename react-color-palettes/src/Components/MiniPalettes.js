import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles ={
	root: {
		backgroundColor: "white",
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		"&-hover": {
			cursor: "pointer"
		}
	},
	colors: {
		backgroundColor: "#dae1e4",
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden"
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative",
		emoji: {
			marginLeft: "0.5rem",
			fontSize: "1.5rem"
		}
	},
	miniColor: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		marginBottom: "-4px"
	}
}
function MiniPalettes(props){
	const {classes, paletteName, emoji, colors} = props;
	const miniColorBoxes = colors.map(color => (
		<div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}></div>
	))
	console.log(props.emoji)
	return(
		<div className={classes.root}>
			<div className={classes.colors}>
				{/*Mini Color Boxes*/}
				{miniColorBoxes}
			</div>
			<h5 className={classes.title}>{paletteName}  <span className={classes.emoji}>{emoji}</span></h5>
		</div>
	)
}

export default withStyles(styles)(MiniPalettes);