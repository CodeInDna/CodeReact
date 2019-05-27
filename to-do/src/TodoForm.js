import React, {Component} from 'react';

class TodoForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleCreateTodo = this.handleCreateTodo.bind(this);
	}
	handleCreateTodo(e){
		e.preventDefault();
		this.props.create(this.state);
		this.setState({name:""})
	}
	handleChange(evt){
		this.setState({name: evt.target.value})
	}
	render(){
		return(
			<div className="Todo-form">
				<form onSubmit={this.handleCreateTodo}>
					<div>
						<h4>NEW TODO</h4>
						<input type="text" name="todo" id="todo" value={this.state.name}
						onChange={this.handleChange}
						/>
						<button>Add Todo</button>
					</div>
				</form>
			</div>
		)
	}
}

export default TodoForm;