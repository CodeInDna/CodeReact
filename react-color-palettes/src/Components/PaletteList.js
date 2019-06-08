import React, {Component} from 'react';
import MiniPalettes from './MiniPalettes';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/PaletteListStyles";

class PaletteList extends Component{
	handlePaletteClick(id){
		this.props.history.push(`/palette/${id}`)
	}
	render(){
		const {palettes, classes} = this.props;
		return(
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Palettes</h1>
					</nav>
					<div className={classes.palettes}>
						{palettes.map(palette => (
								<MiniPalettes key={palette.id} {...palette} selectPalette={() => this.handlePaletteClick(palette.id)}/>
						))}
					</div>
				</div>
			</div>
		)
	}

}

export default withStyles(styles)(PaletteList);