import React, {Component} from 'react';

class Footer extends Component{
	render(){
	const {paletteName, emoji} = this.props;
		return(
			<footer className="Palette-footer">
				{paletteName}
				<span className="emoji">{emoji}</span>
			</footer>
		)
	}
}

export default Footer;