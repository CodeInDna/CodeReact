import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import CreatePaletteNavBar from './CreatePaletteNavBar';
import ColorPickerForm from './ColorPickerForm';
import classNames from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import {arrayMove} from 'react-sortable-hoc';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
  container: {
  	width: "90%",
  	height: "100%",
  	display: "flex",
  	flexDirection: "column",
  	justifyContent: "center",
  	alignItems: "center"
  },
  btns: {
  	width: "100%",
  	display: "flex",
  	justifyContent: "space-between"
  },
  btn: {
  	width: "48%"
  }
});
class CreatePalette extends Component{
	static defaultProps ={ maxColors: 20 }
	constructor(props){
		super(props);
		this.state= {
			open: true,
			colors: this.props.palettes[0].colors
		}
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.createNewColor = this.createNewColor.bind(this);
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
  
  createNewColor(newColor){
  	this.setState({colors: [...this.state.colors, newColor], newColorName: ""});
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
    const { classes, maxColors, palettes} = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
      	{/*NavBar*/}
        <CreatePaletteNavBar 
        	open={open} 
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

    	<div className={classes.container}>
    	  <Typography variant="h4" gutterBottom >Design Your Palette</Typography>
          <div className={classes.btns}>
          	<Button 
	          	variant="contained" 
	          	className={classes.btn}
	          	color="secondary"
	          	onClick={this.clearPaletteColors}
	          	>Clear Palette
	        </Button>
          	<Button 
	          	variant="contained" 
	          	className={classes.btn}
	          	color="primary"
	          	disabled={paletteFull}
	          	onClick={this.getRandomColor}
	          	>Random Color
	        </Button>
          </div>

         {/*Color Picker Form*/}
         <ColorPickerForm paletteFull={paletteFull} createNewColor={this.createNewColor} colors={this.state.colors}/>
         {/*Color Picker Form Ends*/}
        </div>

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
