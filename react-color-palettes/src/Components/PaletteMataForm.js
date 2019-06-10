import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class PaletteMataForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			open: true,
			newPaletteName: ""
		}
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
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

  	handleClickOpen(){
    	this.setState({ open: true });
  	};

  	handleClose(){
   	 this.setState({ open: false });
  	};

  render() {
  	const {newPaletteName} = this.state;
  	const {savePalette} = this.props;
    return (
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your customised Palette. Make sure it's unique!
            </DialogContentText>
	            <TextValidator 
	            	label="Palette Name"  
	            	value={newPaletteName}
	            	name="newPaletteName" 
	            	fullWidth
	            	margin="normal"
	            	onChange={this.handleNameChange}
	            	validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['Enter a Color Name', 'Palette Name already exist!']}
	            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
            	Save Palette
            </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
    );
  }
}

export default PaletteMataForm;