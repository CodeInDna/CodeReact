import React, {Component} from 'react';
import './../css/ColorBox.css';

class ColorBox extends Component{
	render(){
		return(
			<div className="ColorBox" style={{backgroundColor: this.props.background}}>
				<span>{this.props.name}</span>
				
				{/*More Shades of color*/}
				<span>MORE</span>
			</div>
		)
	}
}

export default ColorBox;