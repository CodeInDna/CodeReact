import React, {Component} from 'react';
import classNames from 'clsx';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class CreatePaletteNavBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			newPaletteName: ""
		}
		this.handleNameChange = this.handleNameChange.bind(this);
	}
	componentDidMount(){
		 ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return this.props.palettes.every(
            	({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
	}
	// Palette Name Change: update the state
	handleNameChange(evt){
		this.setState({newPaletteName: evt.target.value})
	}
	render(){
	const {classes, open, handleDrawerOpen, handleNameChange, savePalette} = this.props;
		return(
			<div>
				<CssBaseline />
		        <AppBar
		          position="fixed"
		          color="default"
		          className={classNames(classes.appBar, {
		            [classes.appBarShift]: open,
		          })}
		        >
		          <Toolbar disableGutters={!open}>
		            <IconButton
		              color="inherit"
		              aria-label="Open drawer"
		              onClick={handleDrawerOpen}
		              className={classNames(classes.menuButton, open && classes.hide)}
		            >
		              <MenuIcon />
		            </IconButton>
		            <Typography variant="h6" color="inherit" noWrap>
		              Persistent drawer
		            </Typography>

		            <ValidatorForm onSubmit={() => savePalette(this.state.newPaletteName)}>
			            <TextValidator 
			            	label="Palette Name"  
			            	value={this.state.newPaletteName}
			            	name="newPaletteName" 
			            	onChange={this.handleNameChange}
			            	validators={['required', 'isPaletteNameUnique']}
		                    errorMessages={['Enter a Color Name', 'Palette Name already exist!']}
			            />
			            <Button variant="contained" color="primary" type="submit">
			            	Save Palette
			            </Button>

			            <Link to='/'>
				            <Button variant="contained" color="secondary">
				            	Go Back
				            </Button>
			            </Link>
		            </ValidatorForm>
		          </Toolbar>
		        </AppBar>
			</div>
		)
	}
}
export default CreatePaletteNavBar;
