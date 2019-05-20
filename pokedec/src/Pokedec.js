import React, {Component} from 'react';
import Pokecard from './Pokecard';

class Pokedec extends Component{
  render(){
    const {pokeball} = this.props;
    return(
      <div>
        {pokeball.map((pokemon, id) => (
            <Pokecard key={id} pokemon={pokemon}/>
        ))}
      </div>
    )
  }
}

export default Pokedec;
