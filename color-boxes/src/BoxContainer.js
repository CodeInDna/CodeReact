import React, {Component} from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component{
	static defaultProps = {
		colors : ['#F44336', '#E91E63', '#9C27B0','#673AB7', '#3F51B5', '#2196F3', '#4CAF50', '#FFEB3B','#607D8B', '#9E9E9E', '#795548'],
		numBoxes : 20
	}
	render(){
		const boxes = Array.from({length: this.props.numBoxes}).map((box, i) => <Box colors={this.props.colors} key={i}/>)
		return(
			<div className="BoxContainer">
				{boxes}
			</div>
		)
	}
}

export default BoxContainer;