import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/MiniPaletteStyles";

function MiniPalettes(props){
	const {classes, paletteName, emoji, colors} = props;
	const miniColorBoxes = colors.map(color => (
		<div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}></div>
	));
	return(
		<div className={classes.root} onClick={props.selectPalette}>
			<div className={classes.colors}>
				{/*Mini Color Boxes*/}
				{miniColorBoxes}
			</div>
			<h5 className={classes.title}>{paletteName}  <span className={classes.emoji}>{emoji}</span></h5>
		</div>
	)
}

export default withStyles(styles)(MiniPalettes);