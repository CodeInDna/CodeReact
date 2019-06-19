import React, {useContext} from 'react';
import {ThemeContext} from './Contexts/ThemeContext';

function PageContent(props){
	const {isDarkTheme} = useContext(ThemeContext);
	const styles = {
		backgroundColor: isDarkTheme ? "#333" : "white",
		height: "100vh",
		width: "100vw"
	}
	return(
		<div style={styles}>{props.children}</div>
	)
}

export default PageContent;