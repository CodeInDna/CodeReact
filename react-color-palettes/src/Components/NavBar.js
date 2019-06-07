import React, {Component} from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
import {Link} from 'react-router-dom';
import Nouislider from "nouislider-react";			/*Slider*/
import "nouislider/distribute/nouislider.css";		/*Slider*/
import MenuItem from '@material-ui/core/MenuItem';  /*Select*/
import Select from '@material-ui/core/Select';		/*Select*/
import Snackbar from '@material-ui/core/Snackbar';  /*The popup after changing format*/
import CloseIcon from '@material-ui/icons/Close';   /*The popup after changing format*/
import IconButton from '@material-ui/core/IconButton';
import './../css/NavBar.css';					    /*Custom css*/

class NavBar extends Component{
	constructor(props){
		super(props);
		this.state = {format: "hex", open: false};
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closePopup = this.closePopup.bind(this);
	}
	handleFormatChange(e){
		this.setState({format: e.target.value, open: true});
		this.props.changeFormat(e.target.value);
	}
	closePopup(){
		this.setState({open: false})
	}
	render(){
		const {level, changeLevel} = this.props;
		const {format, open} = this.state;
		return(
			<header className="NavBar">
				<div className="logo">
					<Link to="/">ReactColorPicker</Link>
				</div>

				<div className="slider-container">
					<span>Level: {level} </span>
					<div className="slider">
						{/*Slider*/}
						<Nouislider range={{ min: 100, max: 900 }}  start={level} connect={[true, false]} step={100} 
						onChange={changeLevel}/>
					</div>
				</div>

				<div className="select-container">
		        <Select value={format} onChange={this.handleFormatChange}>
		          <MenuItem value='hex'>Hex - #ffffff</MenuItem>
		          <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
		          <MenuItem value='rgba'>RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
		        </Select>

		        <Snackbar
			        anchorOrigin={{
			          vertical: 'bottom',
			          horizontal: 'left',
			        }}
			        open={open}
			        autoHideDuration={3000}
			        message={<span id="message-id">Format Changed to "{format.toUpperCase()}"</span>}
			        ContentProps={{
			        	"aria-describedby":"message-id"
			        }}
			        onClose={this.closePopup}		// closes popup when user click elsewhere
			        action={[
			          <IconButton 
			          	onClick={this.closePopup} 
			          	color='inherit'
			          	key='close'
			          	aria-label='close'
			          >
			            <CloseIcon />
			          </IconButton>,
			        ]}
			      />
				</div>
			</header>
		)
	}
}

export default NavBar;