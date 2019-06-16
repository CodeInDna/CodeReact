import React, {useEffect} from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Todos(){
	const InitialTodos = JSON.parse(window.localStorage.getItem("todos") || []);
	/*const InitialTodos = [
		{id: 1, task: "Walk the Dog", completed: true},
		{id: 2, task: "Buy Groceries", completed: false},
		{id: 3, task: "Clean the Table", completed: true}
	];*/
	const {todos, addTodo, deleteTodo, toggleComplete, editTodo} = useTodoState(InitialTodos);
	useEffect(() => {
		window.localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
	return(
		<div>
			<AppBar position="static">
	          <Toolbar>
	            <Typography variant="h6">TODOS APP</Typography>
	          </Toolbar>
	        </AppBar>
	        <Grid container justify="center" style={{marginTop: "1rem"}}>
	        	<Grid item xs={11} md={8} lg={4}>
			        <TodoForm addTodo={addTodo}/>
		        	<TodoList 
		        	todos={todos} 
		        	deleteTodo={deleteTodo} 
		        	toggleComplete={toggleComplete}
		        	editTodo={editTodo}
		        	/>
	        	</Grid>
	        </Grid>
        </div>
	)
}

export default Todos;