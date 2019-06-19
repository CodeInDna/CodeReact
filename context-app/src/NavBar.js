import React, {Component} from 'react';
import {ThemeContext} from './Contexts/ThemeContext';
import {withLanguageContext} from './Contexts/LanguageContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';

const content = {
	english: {
		search: "Search",
		flag: "🎢"
	},
	hindi: {
		search: "खोज करें",
		flag: "🚩"
	},
	gujarati: {
		search: "શોધો",
		flag: "🥮"
	}
}
class NavBar extends Component{
	static contextType = ThemeContext;
	render(){
	const {isDarkTheme, toggleTheme} = this.context; 
	const {classes} = this.props;
	const {language} = this.props.languageContext;
	const {search, flag} = content[language];
		return(
		<div className={classes.root}>
			<AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
				<Toolbar>
					<IconButton
					className={classes.menu} 
					edge="start"
					color="inherit"
					aria-label="Open drawer"
					>
						<span>{flag}</span>
					</IconButton>
					<Typography className={classes.title} variant="h6" color="inherit">
					App Title
					</Typography>
					<Switch onChange={toggleTheme}/>

					<div className={classes.grow}/>
					<div className={classes.search}>
			            <div className={classes.searchIcon}>
			              <SearchIcon />
			            </div>
			            <InputBase
			            	placeholder={`${search}...`}
			            	classes={{
			            		root:classes.inputRoot,
			            		input:classes.inputInput
			            	}}
			            />
		          </div>
				</Toolbar>
			</AppBar>
		</div>
		)
	}
}

export default withLanguageContext(withStyles(styles)(NavBar));