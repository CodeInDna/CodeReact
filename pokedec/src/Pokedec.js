import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedec.css';
import poke from "./pokeball.png";

class Pokedec extends Component{
  static defaultProps = {
    pokeball: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
  };
  
  render(){
    const {pokeball} = this.props;
    return(
      <div className="Pokedec">

        <h1><span className="title">PoKéDéC</span>
            <span><img src={poke} alt="pokeball" width={50} height={50}/></span>
        </h1>

        <div className="Pokedec-cards">
          {pokeball.map((pokemon, id) => (
              <Pokecard key={id} pokemon={pokemon} />
          ))}
        </div>

      </div>
    )
  }
}

export default Pokedec;
