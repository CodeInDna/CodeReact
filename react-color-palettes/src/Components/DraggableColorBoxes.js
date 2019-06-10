import React from 'react';
import {withStyles} from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc';
import styles from './../styles/DraggableColorBoxesStyles';


const DraggableColorBoxes = SortableElement((props) => {
	const {classes, deleteColorBox, name, color} = props;
	return (
		<div 
			className={classes.root} 
			style={{backgroundColor: color}}
		>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteColorBox} onClick={deleteColorBox}></DeleteIcon>
			</div>
		</div>

	);
})

export default withStyles(styles)(DraggableColorBoxes);