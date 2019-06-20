import React, {useContext, memo} from 'react';
import useToggle from './hooks/useToggle';
import {DispatchContext} from './contexts/todos.context';
import EditTodo from './EditTodo';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
function TodoItem({id, task, completed}){
	const [isEditing, toggle] = useToggle(false);
	const dispatch = useContext(DispatchContext);
	console.log("TODO Rerendering", id);
	return(
		<ListItem style={{height: "64px"}}>
			{isEditing ? <EditTodo id={id} task={task} toggle={toggle}/> : (
				<>
				  <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({type:"TOGGLE", id: id})}/>
		          <ListItemText style={{textDecoration: completed ? 'line-through': 'none'}}>
		          		{task}
		           </ListItemText>
		           <ListItemSecondaryAction>
		           		<IconButton aria-label='Delete' onClick={() => dispatch({type:"DELETE", id: id})}>
		           			<DeleteIcon/>
		           		</IconButton>
		           		<IconButton aria-label='Edit' onClick={toggle}>
		           			<EditIcon/>
		           		</IconButton>
		           </ListItemSecondaryAction>
		        </>
				)
		    }
		 </ListItem>
	)
}

export default memo(TodoItem);
