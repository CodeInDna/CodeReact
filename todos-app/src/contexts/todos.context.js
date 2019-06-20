import React, {createContext, useReducer} from 'react';
import {useLocalStorageReducer} from './../hooks/useLocalStorageReducer';
import todoReducer from './../reducers/todo.reducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodo = [
	{id: 1, task: "Read Moby Dick", completed:false}
];

export function TodosProvider(props){
	const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodo, todoReducer);
	return(
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	)
}
