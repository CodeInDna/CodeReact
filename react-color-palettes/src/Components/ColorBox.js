import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

import './../css/ColorBox.css';

const styles={
	colorBox:{
		width: "20%",
		height: props => props.showLink ? "25%" : "50%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.8px",
		"&:hover button": {
			opacity: "1",
			transitionDuration: "0.8s",
		}
	},
	copyText: {
		color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.8)" : "white",
	},
	colorName: {
		color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "rgba(0, 0, 0, 0.8)"
	},
	getMore: {
		color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.8)" : "white",
		width: "60px",
		height:" 30px",
		textAlign: "center",
		lineHeight: "30px",
		position: "absolute",
		bottom: "0px",
		right: "0px",
		background: "rgba(255, 255, 255, 0.3)",
		textTransform: "uppercase",
		border: "0px",
	},
	copyButton: {
		color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.8)" : "white",
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginLeft: "-50px",
		marginTop: "-15px",
		textAlign: "center",
		outline: "none",
		border: "none",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		textTransform: "uppercase",
		cursor: "pointer",
		textDecoration: "none",
		opacity:"0"
	},
	boxContent: {
		position: "absolute",
		bottom: "0px",
		left: "0px",
		padding: "10px",
		width: "100%",
		color: "black",
		textTransform: "uppercase",
		letterSpacing: "1px",
		fontSize: "12px",
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transition: "transform 0.6s ease-in-out",
		transform: "scale(0.1)"
	},
	showOverlay: {
		opacity: "1",
		zIndex: "10",
		transform: "scale(50)",
		position: "absolute",
	},
	copyOverlayMsg: {
		position: "fixed",
		left: "0",
		right: "0",
		bottom: "0",
		top: "0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: "0",
		color: "white",
		"& h1":{
			fontWeight: "400",
			textShadow: "1px 2px black",
			background: "rgba(255, 255, 255, 0.3)",
			width: "100%",
			textAlign: "center",
			marginBottom: "0",
			padding: "1rem",
			textTransform: "uppercase",
		},
		"& p": {
			fontWeight: "100",
			fontSize: "2rem",
		}
	},
	overlayMsgShow: {
		opacity: "1",
		zIndex: "25",
		transform: "scale(1)",
		transition: "all 0.3 ease-in-out",
		transitionDelay: "0.3s",
	}
}

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