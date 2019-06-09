import React , {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		width: "20%",
		height: "25%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.8px",
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

function DraggableColorBoxes(props){
	const {classes} = props;
	return (
		<div 
			className={classes.root} 
			style={{backgroundColor: props.color}}
		>
			<div className={classes.boxContent}>
				<span>{props.name}</span>
				<DeleteIcon className={classes.deleteColorBox}></DeleteIcon>
			</div>
		</div>

	);
}

export default withStyles(styles)(DraggableColorBoxes);