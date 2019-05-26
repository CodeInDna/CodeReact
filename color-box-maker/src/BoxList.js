import React, {Component} from 'react';
import BoxForm from './BoxForm';
import Box from './Box';
import './BoxList.css';
import uuid from 'uuid';

class BoxList extends Component{
	constructor(props){ 
		super(props);
		this.state = {
			boxes : []
		}
		this.createBox = this.createBox.bind(this);
		this.removeBox = this.removeBox.bind(this);
	}
	// Create box on Form Submit
	createBox(box){
		// adding id to the newly created box
		let newBox = {...box, id: uuid.v1()};

		// updating the current state with the new box
		this.setState(currState=>({
			boxes: [...currState.boxes, newBox]
		}))
	}
	// Remove box when clicked on it
	removeBox(boxId){
		// Updating the current state after removing
		this.setState(currState => ({
			boxes: currState.boxes.filter(res => res.id !== boxId)
		}))
	}
	render(){
		// render the boxes after adding or removing box
		const boxes = this.state.boxes.map((box) => <Box attributes={box} removeBox={this.removeBox} key={box.id}/>);
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 offset-md-4">
							<h1 className="BoxList-h">Color Box Maker</h1>
							<div className="BoxList">
								<BoxForm createBox={this.createBox}/>
							</div>
						</div>
					</div>
				</div>
				{this.state.boxes.length ? <h5 className="text-center mt-2">Click Box to Remove It</h5> : ''}
				<div className="BoxList-boxes">{boxes}</div>
			</div>
		)
	}
}

export default BoxList;