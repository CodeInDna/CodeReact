import React, {Component} from 'react';
import classNames from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorBoxes from './DraggableColorBoxes';
import { ChromePicker } from 'react-color';		/*Color Picker*/
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
  	height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});
class CreatePalette extends Component{
	constructor(props){
		super(props);
		this.state= {
			open: true,
			currentColor: "teal",
			newColorName: "",
			colors: [],
			newPaletteName: ""
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.createNewColor = this.createNewColor.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.savePalette = this.savePalette.bind(this);
	}


  handleDrawerOpen(){
    this.setState({ open: true });
  };

  handleDrawerClose(){
    this.setState({ open: false });
  };
  handleColorChange(newColor){
  	this.setState({currentColor: newColor.hex});
  };
  createNewColor(){
  	const newColor = {color: this.state.currentColor, name:this.state.newColorName}
  	this.setState({colors: [...this.state.colors, newColor], newColorName: ""});
  };
  handleNameChange(evt){
  	this.setState({
  		[evt.target.name]: evt.target.value
  	});
  };
  // Custom Validation
  componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return this.state.colors.every(
            	({name}) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return this.state.colors.every(
            	({color}) => color !== this.state.currentColor
            );
        });
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return this.props.palettes.every(
            	({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    };
    savePalette(){
    	let newPaletteName = this.state.newPaletteName;
    	const newPalette = {
    		id: newPaletteName.toLowerCase().replace(/ /g, '-'),
    		paletteName: newPaletteName,
    		colors: this.state.colors
    	}
    	this.props.savePalette(newPalette);
    	this.props.history.push('/');
    }
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
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
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>

            <ValidatorForm onSubmit={this.savePalette}>
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
            </ValidatorForm>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Divider />
          <div>
          	<Button variant="contained" color="secondary">Clear Palette</Button>
          	<Button variant="contained" color="primary">Random Color</Button>
          </div>

          <ChromePicker color={this.state.currentColor} 
          				onChangeComplete={this.handleColorChange}
          />

          <ValidatorForm onSubmit={this.createNewColor}>
          		<TextValidator 
          			value={this.state.newColorName}
          			name="newColorName" 
          			onChange={this.handleNameChange} 
          			validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['Enter a Color Name', 'Color Name is Taken', 'Color already Added']}
          		/>
	          	<Button 
	          		variant="contained" 
	          		type="submit"
	          		color="primary" 
	          		style={{backgroundColor: this.state.currentColor}}
	          		>
	          		Add New Color
	          	</Button>
          </ValidatorForm>

        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader}/>
          	{this.state.colors.map(color => (
          		<DraggableColorBoxes color={color.color} name={color.name} />
          	))}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreatePalette);
