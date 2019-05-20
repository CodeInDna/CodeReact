import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedec.css';

class Pokedec extends Component{
  render(){
    const {pokeball, exp, isWinner} = this.props;
    return(
      <div className="Pokedec">
        <p className="Pokedec-tot-exp">Total Experience:  
          <span className="Pokedec-exp"> {exp}</span>
        </p>

        <div className={isWinner ? 'Pokedec-winner' : 'Pokedec-looser'}>
          {isWinner ? 'WINNER' : 'LOOSER'}
        </div>

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
