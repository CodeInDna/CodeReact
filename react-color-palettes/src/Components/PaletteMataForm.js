import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteMataForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			stage: "paletteForm",
			newPaletteName: ""
		}
		this.handleNameChange = this.handleNameChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
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

  showEmojiPicker(){
    this.setState({stage: "emoji"})
  }

  savePalette(emoji){
    const newPalette = {paletteName: this.state.newPaletteName, emoji: emoji.native}
    this.props.savePalette(newPalette);
    this.setState({stage: ""}); // disappear emoji picker after saving palette
  }
  render() {
  	const {newPaletteName, stage} = this.state;
  	const {hideForm} = this.props;
    return (
      <div>
        <Dialog open={stage === 'emoji'}>
           <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
          <Picker onSelect={this.savePalette} title='Pick an emoji ' emoji='point_up'/>
        </Dialog>
        <Dialog
          open={stage === 'paletteForm'}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
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
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
            	Save Palette
            </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMataForm;