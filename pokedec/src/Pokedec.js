import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedec.css';


class Pokedec extends Component{
  render(){
    const {pokeball, exp, isWinner} = this.props;
    return(
      <div className="Pokedec">
        <p>Total Experience : {exp}</p>

        <p>{isWinner ? 'WINNER' : 'LOOSER'}</p>

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
