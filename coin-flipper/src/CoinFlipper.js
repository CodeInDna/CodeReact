import React, {Component} from 'react';
import CoinTracker from './CoinTracker';
import Coin from './Coin';
import head from './head.jpg';
import tail from './tail.jpg';
import './CoinFlipper.css';


class CoinFlipper extends Component{
	static defaultProps = {
		coins: [
			{side: 'Head', imgSrc:head},
			{side: 'Tail', imgSrc:tail}
		]
	}
	constructor(props){
		super(props);
		this.state={
			currCoin: null,
			head: 0,
			tail: 0, 
			flip: false
		}
	}
	handleFlip = () => {
		let newCoin = this.props.coins[Math.floor(Math.random() * this.props.coins.length)];
		this.setState(currState => ({
		// let newState = {
		// 	...currState,
		// 	currCoin: newCoin
		// }
		// if(newCoin.toLowerCase() === 'head'){
		// 	newState.head += 1;
		// }else if(newCoin.toLowerCase() === 'tail'){
		// 	newState.tail += 1;
		// }
			currCoin: newCoin,
			head: currState.head + (newCoin.side === 'Head' ? 1 : 0),
			tail: currState.tail + (newCoin.side === 'Tail' ? 1 : 0),
			flip:true
		}));
		// wait for half sec and set flip to false
		setTimeout(() => {
			this.setState({flip: false})
		},500);
	}
	render(){
		return(
			<section className="CoinFlipper">
				<h1>Let's Spin a Coin</h1>
				{this.state.currCoin && <Coin info={this.state.currCoin} flip={this.state.flip}/>}
				<button className="CoinFlipper-button" onClick={this.handleFlip}> flip</button>
				<CoinTracker head={this.state.head} tail={this.state.tail}/>
			</section>
		)
	}
}

export default CoinFlipper;