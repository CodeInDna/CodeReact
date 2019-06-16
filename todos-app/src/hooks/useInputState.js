import {useState} from 'react';

function useInputState(initialValue){
	const [state, setState] = useState(initialValue);
	const handleChange = (e) => {
		setState(e.target.value);
	}
	const reset = () => {
		setState("")
	};
	return [state, handleChange, reset];
}

export default useInputState;