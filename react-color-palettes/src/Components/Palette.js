import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './../css/Palette.css';


class Palette extends Component{
	constructor(props){
		super(props);
		this.state = {level: 500, format: 'hex'};
		this.changeLevel = this.changeLevel.bind(this);
		this.handleFormatChange = this.handleFormatChange.bind(this);
	}
	changeLevel(level){
		this.setState({ level: parseInt(level) })
	}
	handleFormatChange(value){
		this.setState({format: value});
	}
	render(){
		// const {colors} = this.props.palette;
		const {level, format} = this.state;
		const {colors, paletteName, emoji} = this.props.palette;
		const colorBoxes = colors[level].map(c => <ColorBox key={c.id} background={c[format]} name={c.name}/>)
		return(
			<div className="Palette">
				{/*navbar*/}
				<NavBar level={level} changeLevel={this.changeLevel} changeFormat={this.handleFormatChange}/>

				<div className="Palette-colors">
					{/*Palette Colors*/}
					{colorBoxes}
				</div>
				{/*footer*/}
				<footer className="Palette-footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</footer>
			</div>
		)
	}
}

export default Palette;