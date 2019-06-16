import {useState}  from 'react';
import uuid from 'uuid/v4';
export default InitialTodos => {
	const [todos, setTodos] = useState(InitialTodos);
	return {
		todos,
		addTodo: (newTodo) => {
			setTodos([...todos, {id: uuid(), task: newTodo, completed: false}])
		},
		deleteTodo: (id) => {
			const updatedTodo = todos.filter(todo=>todo.id !== id);
			setTodos(updatedTodo)
		},
		editTodo: (id, newTask)=> {
			const updatedTodo = todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo);
			setTodos(updatedTodo)
		},
		toggleComplete: (id) => {
			const updatedTodo = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
			setTodos(updatedTodo)
		}
	}
}

