import React, {Component} from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => num <= 999 ? `00${num}`.slice(-3) : num;
/*function threeDigit(num){
	if(num.toString().length === 1) return `00${num}`;
	if(num.toString().length === 2) return `0${num}`;
	return num;
}*/
/*console.log(threeDigit(1));*/
class Pokecard extends Component{
	render(){
		const {id, name, type, base_experience: exp} = this.props.pokemon;
		const num = padToThree(id);
		const imgSrc = `${POKE_API}${num}.png`;
		return(
			<div className="Pokecard">
				<h3>{name}</h3>

				<div className="Pokecard-image">
					<img src={imgSrc} alt={name}/>
				</div>

				<h4>Type: <span className="Pokecard-val">{type}</span></h4>
				<h4>Exp: <span className="Pokecard-val">{exp}</span></h4>
			</div>
		)
	}
}

export default Pokecard;