import React, {Component} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';
import image1 from './scene.jpg';
import uuid from 'uuid';

class TodoList extends Component{
	constructor(props){
		super(props);
		this.state = {
			todos: []
		}
		this.createTodo = this.createTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.finishTodo = this.finishTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
	}
	// Create a todo 
	createTodo(todo){
		// add id to new Todo
		let newTodo = {...todo, id: uuid.v1(), completed:false}
		this.setState(currState => ({
			todos: [...currState.todos, newTodo]
		}))
	}
	// Delete Todo
	deleteTodo(todoId){
		// update the state after deletion
		this.setState(currState => ({
			todos: currState.todos.filter(todo => todo.id !== todoId)
		}))
	}
	// Updating Todo
	updateTodo(todoId, todoName){
		const updateTodo = this.state.todos.map(todo => {
			if(todo.id === todoId){
				return {...todo, name: todoName}
			}
			return todo;
		})
		this.setState({todos: updateTodo});
	}
	// When click on the todo toggle it 
	finishTodo(todoId){
		const finishTodo = this.state.todos.map(todo => {
			if(todo.id === todoId){
				return {...todo, completed: !todo.completed}
			}
			return todo;
		});
		this.setState({todos: finishTodo});
	}
	render(){
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
		const d = new Date();
		const date= days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()];

		// looping over every todo item in the state
		const todos = this.state.todos.map(todo => 
		<Todo key={todo.id} todo={todo} delete={this.deleteTodo} 
		finish={this.finishTodo} update={this.updateTodo}/>
		)

		return(
			<div className="TodoList">
				<div className="TodoList-image">
					<img src={image1} alt=""/>
					<div className="TodoList-day">
						<span>Today</span>
						<span className="TodoList-date">{date}</span>
					</div>
				</div>
				<div className="TodoList-content">
					<span className="TodoList-title">A Simple React Todo List App</span>
					
					{todos}
					<TodoForm create={this.createTodo}/>
				</div>
			</div>
		)

	}
}

export default TodoList;