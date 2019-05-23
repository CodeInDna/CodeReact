import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
	static defaultProps = {
		sides: ['one', 'two', 'three', 'four', 'five', 'six']
	}
	constructor(props){
		super()
		this.state = {
			die1 : 'one',
			die2 : 'one',
			rolling : false
		}
	}
	roll = (e) => {
		const diceFace1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
		const diceFace2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
		this.setState({die1: diceFace1, die2: diceFace2, rolling : true});
		
		// wait for half sec and set rolling to false
		setTimeout(() => {
			this.setState({rolling: false})
		},500);
	}
	render(){
		return(
			<div className="RollDice">
				<Die face={this.state.die1}
				rolling={this.state.rolling}
				/>
				<Die face={this.state.die2}
				rolling={this.state.rolling}
				/>
				
				<div>
					<button onClick={this.roll} disabled={this.state.rolling} 
					className="RollDice-btn btn" 
					id={this.state.rolling ? 'disabled' : ''}
					>
						<i className="fas fa-dice dice-roll"></i>
						{this.state.rolling ? ' Rolling....' : ' Roll Dice'}
					</button>
				</div>
			</div>
		)
	}
}

export default RollDice;