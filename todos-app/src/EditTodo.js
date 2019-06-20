import React, {useContext} from 'react';
import {DispatchContext} from './contexts/todos.context';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodo({id, task, toggle}){
	const [value, handleChange, reset] = useInputState(task);
	const dispatch = useContext(DispatchContext);
	return(
			<form onSubmit={e=>{
				e.preventDefault(); 
				dispatch({type: "EDIT", id:id, task:value});
				reset();
				toggle();
				}
			} style={{marginLeft:"1rem", width: "50%"}}
			>
			<TextField 
				margin="normal"
				value={value}
				onChange={handleChange}
				fullWidth
				autoFocus
			/>
			</form>
	)
}

export default EditTodo