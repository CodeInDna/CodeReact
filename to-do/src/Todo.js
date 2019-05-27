import React, {Component} from 'react';
import './Todo.css';



class Todo extends Component{
	constructor(props){
		super(props);

		this.state={
			edit: false, name:this.props.todo.name
		}

		// binding methods
		this.handleDelete = this.handleDelete.bind(this);
		this.handleFinished = this.handleFinished.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleDelete(){
		this.props.delete(this.props.todo.id);
	}

	handleEdit(){
		this.setState({edit: !this.state.edit})
	}

	handleUpdate(e){
		e.preventDefault();
		this.props.update(this.props.todo.id, this.state.name);
		this.setState({edit: !this.state.edit})
	}

	handleChange(evt){
		this.setState({name: evt.target.value})
	}

	handleFinished(){
		this.props.finish(this.props.todo.id);
	}

	render(){
		const {todo} = this.props;
		const editDisplay = <div className="Todo-display">
							
								<span onClick={this.handleFinished}  className={this.props.todo.completed ? 'completed' : ''}>
								{todo.name}
								</span> 
								<div className="Todo-buttons">
									<button onClick={this.handleEdit}><i className="fas fa-pen-alt"></i></button> 
									<button onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
								</div>
							</div>
							

							
		const editForm =<div className="Todo-display">
							<form onSubmit={this.handleUpdate} className="Todo-edit-form">
								<input type="text" name="todo" value={this.state.name} onChange={this.handleChange}/>
								<button>Save</button>
								<span className="reset" onClick={this.handleEdit}>
									<i className="fas fa-undo"></i>
								</span>
							</form>
						</div>
		return(
			<div className="Todo">
				{/*if edit is clicked show edit form else show the item*/}
					{this.state.edit ? editForm : editDisplay}
			</div>
		)
	}
}

export default Todo;