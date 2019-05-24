import React, {Component} from 'react';
import './Box.css';
import {choice} from './helper';

class Box extends Component{
	constructor(props){
		super(props);
	    const {colors} = this.props;
		this.state={
			color: choice(colors)
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		let newcolor;
		do{
			newcolor = choice(this.props.colors)
		}while(newcolor === this.state.color);
		this.setState({color: newcolor})
	}
	render(){
		return(
			<div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}></div>
		)
	}
}

export default Box;