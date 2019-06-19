import React, {Component} from 'react';
import {ThemeContext} from './Contexts/ThemeContext';

class PageContent extends Component{
	static contextType = ThemeContext;
	render(){
		const {isDarkTheme} = this.context;
		const styles = {
			backgroundColor: isDarkTheme ? "black" : "white",
			height: "100vh",
			width: "100vw"
		}
		return(
			<div style={styles}>{this.props.children}</div>
		)
	}
}

export default PageContent;