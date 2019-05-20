import React, {Component} from 'react';

class Pokecard extends Component{
	render(){
		const {id, name, type, base_experience: exp} = this.props.pokemon;
		const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
		return(
			<div className="Pokecard">
				<h1>Pokedec</h1>
				<h3>{name}</h3>
				<img src={imgSrc} alt={name}/>
				<h4>type: {type}</h4>
				<h4>exp: {exp}</h4>
			</div>
		)
	}
}

export default Pokecard;