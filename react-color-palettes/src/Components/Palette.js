import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './../css/Palette.css';

class Palette extends Component{
	render(){
		const colors = this.props.colors.map(c => <ColorBox key={c.name} background={c.color} name={c.name}/>)
		return(
			<div className="Palette">
				{/*navbar*/}
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