import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import {TodosContext} from './contexts/todos.context';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
function TodoList(){
	const todos = useContext(TodosContext);
	const todoList = todos.map((todo, i) => (
		<div key={todo.id}>
		    <TodoItem 
		    	{...todo} 
		    	key={todo.id} 
		    />
			{i < todos.length-1 && <Divider/>}
		</div>
	));
	if(todos.length) 
		return(
		<Paper>
	        <List>
		        {todoList}
		    </List>
      	</Paper>
	);
	return null;
}

export default TodoList;