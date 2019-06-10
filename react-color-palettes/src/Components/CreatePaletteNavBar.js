import React, {Component} from 'react';
import PaletteMataForm from './PaletteMataForm';
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

const drawerWidth = 400;
const styles = theme => ({
	root: {
		display: "flex"
	},
	appBar: {
	    transition: theme.transitions.create(['margin', 'width'], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	    flexDirection: "row",
	    justifyContent: "space-between",
	    alignItems: "center"

	  },
	appBarShift: {
	    width: `calc(100% - ${drawerWidth}px)`,
	    marginLeft: drawerWidth,
	    transition: theme.transitions.create(['margin', 'width'], {
	      easing: theme.transitions.easing.easeOut,
	      duration: theme.transitions.duration.enteringScreen,
	    }),
	  },
	menuButton: {
	    marginLeft: 12,
	    marginRight: 20,
	  },
    hide: {
      display: 'none',
    },
    navBtns:{
    	marginRight: "1rem",
    	"& a":{
    		textDecoration: "none"
    	}
    },
    btn: {
    	margin: "0 0.5rem",
    }

});

class CreatePaletteNavBar extends Component{
	constructor(props){
		super(props);
		this.state = {formShowing:false};
		this.showForm = this.showForm.bind(this);
	}

	showForm(){
		this.setState({formShowing: true});
	}
	render(){
	const {classes, open, handleDrawerOpen, savePalette, palettes} = this.props;
	const {formShowing} = this.state;
		return(
			<div className={classes.root}>
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
		              Create a Palette
		            </Typography>
		          </Toolbar>

	            <div className={classes.navBtns}>
		            <Link to='/'>
			            <Button variant="contained" color="secondary" className={classes.btn}>
			            	Go Back
			            </Button>
		            </Link>
		            <Button variant="contained" color="primary" onClick={this.showForm} className={classes.btn}>
			          Save
			        </Button>
	            </div>
		        </AppBar>
		            
		        {formShowing && <PaletteMataForm savePalette={savePalette} palettes={palettes}/>}
			</div>
		)
	}
}
export default withStyles(styles, { withTheme: true })(CreatePaletteNavBar);
