import React, {Component} from 'react';
import './Die.css'
class Die extends Component{
	render(){
		const {face, rolling} = this.props;
		return(
			<i className={`Die fas fa-dice-${face} 
			${rolling ? 'shaking' : ''}`}
			></i>
		)
	}
}

export default Die;