import React, {Component} from 'react';
import CreatePaletteNavBar from './CreatePaletteNavBar';
import classNames from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';		/*Color Picker*/
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggableColorList from './DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';

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
	static defaultProps ={ maxColors: 20 }
	constructor(props){
		super(props);
		this.state= {
			open: true,
			currentColor: "teal",
			newColorName: "",
			colors: this.props.palettes[0].colors
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.createNewColor = this.createNewColor.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.deleteColorBox = this.deleteColorBox.bind(this);
		this.clearPaletteColors = this.clearPaletteColors.bind(this);
		this.getRandomColor = this.getRandomColor.bind(this);
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
    };
    savePalette(newPaletteName){
    	const newPalette = {
    		id: newPaletteName.toLowerCase().replace(/ /g, '-'),
    		paletteName: newPaletteName,
    		colors: this.state.colors
    	}
    	this.props.savePalette(newPalette);
    	this.props.history.push('/');
    }
    deleteColorBox(colorName){
    	this.setState({
    		colors: this.state.colors.filter(color => color.name !== colorName)
    	});
    };
    // Change the ColorBox place when dragged
    onSortEnd = ({oldIndex, newIndex}) => {
	    this.setState(({colors}) => ({
	      colors: arrayMove(colors, oldIndex, newIndex),
	    }));
	};
	clearPaletteColors(){
		this.setState({colors: []});
	};
	getRandomColor(){
		// pick Random Colors from existing palettes
		const allColors = this.props.palettes.map(palette =>palette.colors).flat();
		const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
		this.setState({colors: [...this.state.colors, randomColor]});
	}
  render() {
    const { classes, theme, maxColors, palettes} = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
      	{/*NavBar*/}
        <CreatePaletteNavBar 
        	open={open} 
        	classes={classes}
        	palettes={palettes}
        	handleDrawerOpen={this.handleDrawerOpen}
        	savePalette={this.savePalette}
        />
    	{/*NavBar Ends*/}

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
          	<Button 
	          	variant="contained" 
	          	color="secondary"
	          	onClick={this.clearPaletteColors}
	          	>Clear Palette
	        </Button>
          	<Button 
	          	variant="contained" 
	          	color="primary"
	          	disabled={paletteFull}
	          	onClick={this.getRandomColor}
	          	>Random Color
	        </Button>
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
	          		disabled={paletteFull}
	          		style={{backgroundColor: paletteFull ? "grey" : this.state.currentColor}}
	          		>
	          		{paletteFull ? 'Palette is Full' : 'Add New Color'}
	          	</Button>
          </ValidatorForm>

        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader}/>
          
          <DraggableColorList 
          		colors={colors} 
          		deleteColorBox={this.deleteColorBox}
          		axis="xy"
          		onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreatePalette);
