import React, {Component} from 'react';
import './Box.css';
class Box extends Component{
	constructor(props){
		super();
		this.handleRemove = this.handleRemove.bind(this);
	}
	// Call the remove method which reside in parent component(BoxList)
	handleRemove(){
		this.props.removeBox(this.props.attributes.id);
	}
	render(){
		const {width, height, color} = this.props.attributes;
		const boxStyle = {backgroundColor: color, width: parseFloat(width), height:parseFloat(height)}
		return(
			<div>
				<div style={boxStyle} onClick={this.handleRemove} className="Box"></div>
			</div>
		)
	}
}

export default Box;