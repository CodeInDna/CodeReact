import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from "./../styles/ColorBoxStyles";

class ColorBox extends Component{
	constructor(props){
		super(props);
		this.state = {copied:false};
		this.toggleCopyState = this.toggleCopyState.bind(this);
		this.getRandCopyText = this.getRandCopyText.bind(this);
	}
	toggleCopyState(){
		// change copied to true when clicked on ColorBox
		this.setState({copied:true}, () => {
			// change again to false after 1500 ms
			setTimeout(() => this.setState({copied:false}), 1500)
		});
	}
	// get random text in an overlay
	getRandCopyText(){
		const text = [
			'nice pick !',
			'ok now paste me !',
			'copied !',
			'you rock !!',
			'gotcha !!!'
		]
		return text[Math.floor(Math.random() * text.length)];
	}
	render(){
		const {background, name, moreUrl, showLink, classes} = this.props;
		const {copied} = this.state;
		return(
			/*Copying text to clipboard*/
			<CopyToClipboard text={ background } onCopy={this.toggleCopyState}>
				<div className={classes.colorBox} style={{ background }}>

					{/*Add class "show" which Shows Overlay when copied*/}
					<div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
					<div className={`${classes.copyOverlayMsg} ${copied && classes.overlayMsgShow}`}>
						<h1>{this.getRandCopyText()}</h1>
						<p className={classes.copyText}>{ background }</p>
					</div>

					<div>
						<div className={classes.boxContent}>
							{/*Color name*/}
							<span className={classes.colorName}>{ name }</span>
						</div>
						{/*Copy button*/}
						<button className={classes.copyButton}>Copy</button>
					</div>

			{/*More Shades of color*/}
			{showLink && (
					<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
					<span className={classes.getMore}>MORE</span>
					</Link>
			)}
				</div>
			</CopyToClipboard>
		)
	}
}

export default withStyles(styles)(ColorBox);