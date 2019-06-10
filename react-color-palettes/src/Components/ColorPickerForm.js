import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';		/*Color Picker*/
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	picker: {
		width: "100% !important",
		marginTop: "2rem"
	},
	addColor: {
		width: "100%",
		padding: "0.2rem",
		marginTop: "0.1rem",
		marginBottom: "0.4rem",
		fontSize: "2rem"
	},
	colorInput: {
		width: "100%",
		height: "70px"
	}
}

class ColorPickerForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentColor: "teal",
			newColorName: ""
		}
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// Custom Validation
	componentDidMount(){
		ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return this.props.colors.every(
            	({name}) => name.toLowerCase() !== value.toLowerCase()
            );
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return this.props.colors.every(
            	({color}) => color.toLowerCase() !== this.state.currentColor.toLowerCase()
            );
        });
	}
	handleColorChange(newColor){
	  	this.setState({currentColor: newColor.hex});
	};
    handleNameChange(evt){
  	  this.setState({
  		  [evt.target.name]: evt.target.value
  	  });
    };
    handleSubmit(){
    	const newColor = {color: this.state.currentColor, name: this.state.newColorName};
    	this.props.createNewColor(newColor);
    	this.setState({newColorName: ""});
    }
	render(){
		const {paletteFull, classes} = this.props;
		const {currentColor, newColorName} = this.state;
		return(
			<div>
				<ChromePicker className={classes.picker} color={currentColor} 
          				onChangeComplete={this.handleColorChange}
	          />

	          <ValidatorForm onSubmit={this.handleSubmit}>
	          		<TextValidator 
	          			className={classes.colorInput}
	          			placeholder="Color Name"
	          			variant="filled"
	          			margin="normal"
	          			value={newColorName}
	          			name="newColorName" 
	          			onChange={this.handleNameChange} 
	          			validators={['required', 'isColorNameUnique', 'isColorUnique']}
	                    errorMessages={['Enter a Color Name', 'Color Name is Taken', 'Color already Added']}
	          		/>
		          	<Button 
		          		variant="contained" 
		          		className={classes.addColor}
		          		type="submit"
		          		color="primary" 
		          		disabled={paletteFull}
		          		style={{backgroundColor: paletteFull ? "grey" : currentColor}}
		          		>
		          		{paletteFull ? 'Palette is Full' : 'Add New Color'}
		          	</Button>
	          </ValidatorForm>
			</div>
		)
	}
}

export default withStyles(styles)(ColorPickerForm);