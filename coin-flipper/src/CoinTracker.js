import React, {Component} from 'react';

class CoinTracker extends Component{
	render(){
		const {head, tail} = this.props;
		const total = head + tail;
		return(
			<div className="CoinTracker">
				Total Flips : <span>{total}</span> | Heads : <span>{head}</span> | Tails : <span>{tail}</span>
			</div>
		)
	}
}

export default CoinTracker;