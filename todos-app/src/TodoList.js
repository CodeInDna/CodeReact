import React from 'react';
import TodoItem from './TodoItem';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
function TodoList(props){
	const todos = props.todos.map((todo, i) => (
		<div key={todo.id}>
		    <TodoItem 
		    	task={todo.task} 
		    	id={todo.id} 
		    	key={todo.id} 
		    	completed={todo.completed} 
		    	deleteTodo={props.deleteTodo}
		    	editTodo={props.editTodo}
		    	toggleComplete={props.toggleComplete}
		    />
			{i < props.todos.length-1 && <Divider/>}
		</div>
	));
	if(todos.length) 
		return(
		<Paper>
	        <List>
		        {todos}
		    </List>
      	</Paper>
	);
	return null;
}

export default TodoList;