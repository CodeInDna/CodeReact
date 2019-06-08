import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Footer from './Footer';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/PaletteStyles";

class MoreShades extends Component{
	constructor(props){
		super(props);
		this.shades = this.getAllShades(this.props.palette, this.props.colorId);

		this.state = { format: 'hex' };
		this.handleFormatChange = this.handleFormatChange.bind(this);
	}
	getAllShades(palette, colorID){
		let shades = [];
		const allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(c => c.id === colorID)
			)
		}
		return shades.slice(1);		// slicing the first shade i.e. 50(white color)
	}
	handleFormatChange(value){
		this.setState({format: value});
	}
	render(){
		const {format} = this.state;
		const {paletteName, emoji, id} = this.props.palette;
		const {classes} = this.props;

		const colorBoxes = this.shades.map(color => (
			<ColorBox key={color.name} name={color.name} background={color[format]} showLink={false}/>
		));

		return(
			<div className={classes.palette}>
				<NavBar changeFormat={this.handleFormatChange} showingAllColors={false}/>
				<div className={classes.paletteColors}>
					{/*Palette Colors*/}
					{colorBoxes}
					<div className={`${classes.goBack}`}>
						<Link className={classes.backButton} to={`/palette/${id}`}>Go Back</Link>
					</div>
				</div>

				<Footer paletteName={paletteName} emoji={emoji}/>
			</div>
		)
	}
}

export default withStyles(styles)(MoreShades);