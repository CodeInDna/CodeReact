import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MiniPalettes from './MiniPalettes';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/PaletteListStyles";

class PaletteList extends Component{
	handlePaletteClick(id){
		this.props.history.push(`/palette/${id}`)
	}
	render(){
		const {palettes, classes, deletePalette} = this.props;
		return(
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Palettes</h1>
						<Link to="/palette/create">Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map(palette => (
							<CSSTransition key={palette.id} className='fade' timeout={500}>
								<MiniPalettes key={palette.id} id={palette.id} deletePalette={deletePalette} {...palette} selectPalette={() => this.handlePaletteClick(palette.id)}/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>
		);
	}

}

export default withStyles(styles)(PaletteList);