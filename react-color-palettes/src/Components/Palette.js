import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './../css/Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component{
	constructor(props){
		super(props);
		this.state = {level: 500};
		this.changeLevel = this.changeLevel.bind(this);
	}
	changeLevel(level){
		this.setState({ level })
	}
	render(){
		// const {colors} = this.props.palette;
		const colors = this.props.palette.colors[this.state.level].map(c => <ColorBox key={c.name} background={c.hex} name={c.name}/>)
		return(
			<div className="Palette">
				{/*navbar*/}
				<Slider defaultValue={this.state.level} 
						min={100} 
						max={900}
						onAfterChange={this.changeLevel}
						step={100}
				/>

				<div className="Palette-colors">
					{/*Palette Colors*/}
					{colors}
				</div>
				{/*footer*/}
			</div>
		)
	}
}

export default Palette;