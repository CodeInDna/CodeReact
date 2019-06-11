import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MiniPalettes from './MiniPalettes';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/PaletteListStyles";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

class PaletteList extends Component{
	constructor(props){
		super(props);
		this.state = {
			openDeleteDialog: false,
			deletingId: ""
		}
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.handleDeletePalette = this.handleDeletePalette.bind(this);
	}
	handlePaletteClick(id){
		this.props.history.push(`/palette/${id}`)
	}
	openDialog(id){
		this.setState({openDeleteDialog: true, deletingId: id})
	}
	closeDialog(){
		this.setState({openDeleteDialog: false, deletingId: ""})
	}
	handleDeletePalette(){
		this.props.deletePalette(this.state.deletingId);
		this.closeDialog();
	}
	render(){
		const {palettes, classes, deletePalette} = this.props;
		const {openDeleteDialog, deletingId} = this.state;
		return(
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Palettes</h1>
						<Link to="/palette/create">Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map(palette => (
							<CSSTransition key={palette.id} classNames='fade' timeout={500}>
								<MiniPalettes 
								key={palette.id} 
								id={palette.id} 
								// deletePalette={deletePalette} 
								{...palette} 
								openDialog={this.openDialog}
								selectPalette={() => this.handlePaletteClick(palette.id)}/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			{/*The popup after clicking delete*/}
				<Dialog 
					open={openDeleteDialog} 
					aria-labelledby="delete-dialog-title" 
					onClose={this.closeDialog}
				>
					<DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDeletePalette}>
			            <ListItemAvatar>
			              <Avatar  style={{backgroundColor: blue[100], color: blue[600]}}>
			                <CheckIcon />
			              </Avatar>
			            </ListItemAvatar>
			            <ListItemText primary="Delete" />
			          </ListItem>

			          <ListItem button onClick={this.closeDialog}>
			            <ListItemAvatar>
			              <Avatar  style={{backgroundColor: red[100], color: red[600]}}>
			                <CloseIcon />
			              </Avatar>
			            </ListItemAvatar>
			            <ListItemText primary="Cancel" />
			          </ListItem>
					</List>
				</Dialog>

			</div>
		);
	}

}

export default withStyles(styles)(PaletteList);