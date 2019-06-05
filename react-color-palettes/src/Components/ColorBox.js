import React, {Component} from 'react';
import './../css/ColorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
		const {background, name} = this.props;
		const {copied} = this.state;
		return(
			/*Copying text to clipboard*/
			<CopyToClipboard text={ background } onCopy={this.toggleCopyState}>
				<div className="ColorBox" style={{ background }}>

					{/*Add class "show" which Shows Overlay when copied*/}
					<div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
					<div className={`copy-overlay-msg ${copied && 'show'}`}>
						<h1>{this.getRandCopyText()}</h1>
						<p>{ background }</p>
					</div>

					<div className="copy-container">
						<div className="box-content">
							{/*Color name*/}
							<span>{ name }</span>
						</div>
						{/*Copy button*/}
						<button className="copy-button">Copy</button>
					</div>

					{/*More Shades of color*/}
					<span className="get-more">MORE</span>
				</div>
			</CopyToClipboard>
		)
	}
}

export default ColorBox;