import React, {Component} from 'react';

class BoxForm extends Component{
	constructor(props){
		super(props);
		this.state = { width: "", height:"", color: ""}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		// Calling the method reside in parent component(BoxList)
		this.props.createBox(this.state);
		this.setState({ width: "", height:"", color: ""})
	}

	handleChange(e){
		// handle change in form inputs
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	render(){
		return(
			<div className="mx-4 my-4">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="width">Box Width: </label>
						<input 
						id="width"
						type="text" name="width" placeholder="Example: 20 (In pixels)" 
						value={this.state.width}
						onChange={this.handleChange}
						className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="height">Box Height: </label>
						<input 
						id="height"
						type="text" name="height" placeholder="Example: 20 (In pixels)"
						value={this.state.height}
						onChange={this.handleChange}
						className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="color">Box Color: </label>
						<select id="color" name="color" onChange={this.handleChange}
						value={this.state.color}
						className="form-control"
						>
							<option value="">Choose Color...</option>
							<option value="pink">Pink</option>
							<option value="blue">Blue</option>
							<option value="red">Red</option>
							<option value="yellow">Yellow</option>
							<option value="black">Black</option>
							<option value="purple">Purple</option>
						</select>
					</div>
					<button className="btn btn-info btn-lg btn-block">Add Box</button>
				</form>
			</div>
		)
	}
}

export default BoxForm;