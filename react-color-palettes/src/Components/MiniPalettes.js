import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/MiniPaletteStyles";
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalettes extends PureComponent{
	constructor(props){
		super(props);
		this.handleDeletePalette = this.handleDeletePalette.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleDeletePalette(e){
		e.stopPropagation();
		this.props.openDialog(this.props.id)
	}
	handleClick(){
		this.props.selectPalette(this.props.id)
	}
	render(){
		const {classes, paletteName, emoji, colors} = this.props;
		const miniColorBoxes = colors.map(color => (
			<div key={color.name} className={classes.miniColor} style={{backgroundColor: color.color}}></div>
		));
		return(
			<div className={classes.root} onClick={this.handleClick}>
				<DeleteIcon 
					className={classes.deleteIcon} 
					style={{transition: "all 0.3s ease-in-out"}} 
					onClick={this.handleDeletePalette}
				/>
				<div className={classes.colors}>
					{/*Mini Color Boxes*/}
					{miniColorBoxes}
				</div>
				<h5 className={classes.title}>{paletteName}  <span className={classes.emoji}>{emoji}</span></h5>
			</div>
		)

	}
}

export default withStyles(styles)(MiniPalettes);