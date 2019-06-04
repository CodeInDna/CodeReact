import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import CatsList from './CatsList';
import CatDetails from './CatDetails';
import NavBar from './NavBar';
import './App.css';
import ScotFoldMunch from './images/ScottishFoldMunchkin.jpg';
import Persian from './images/Persian.jpg';
import RussianBlue from './images/RussianBlue.jpg';
import Siamese from './images/Siamese.jpg';
import MaineCoon from './images/MaineCoon.jpg';
import Ragdoll from './images/Ragdoll.jpg';

class App extends Component {
  static defaultProps = {
    cats: [
      {
        breed: "Scottish Fold Munchkins", 
        src: ScotFoldMunch,
        life: "10-17 yrs",
        origin: "Scotland",
        fact: "Scottish Folds, because of their gene giving the folded ears, are also prone to other genetic diseases.",
        desc: "The Scottish Fold Munchkins are a cross between a Scottish Fold and a Munchkin cat. Breeders wanted a round and lovable cat with folded ears and the short legs of a Munchkin.",
      },
      {
        breed: "Persian", 
        src: Persian,
        life: "11 to 15 yrs",
        origin: "Iran",
        fact: "The Persian has a long, flowing coat that must be groomed daily.",
        desc: "The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the 'Persian Longhair' in the English-speaking countries. In the Middle East, region they are widely known as 'Iranian cat' and in Iran they are known as 'Shirazi cat'.",
      },
      {
        breed: "Russian Blue", 
        src: RussianBlue,
        life: "15 to 20 yrs",
        origin: "Arkhangelsk",
        fact: "Russian folklore considers the Russian Blue both a healing charm and a good luck charm.",
        desc: "The Russian Blue is a cat breed that comes in colors varying from a light shimmering silver to a darker, slate grey. They develop close bonds with their owners and are sought out as pets due to their personalities, beauty and coat.",
      }
      ,
      {
        breed: "Maine Coon", 
        src: MaineCoon,
        life: "10 yrs",
        origin: "Maine, United States",
        fact: "Like the name, the Maine Coon is said to have originated in the New England area of the United States and is on record as being the only cat breed indigenous to the United States",
        desc: "The Maine Coon is the largest domesticated cat breed. It has a distinctive physical appearance and valuable hunting skills. It is one of the oldest natural breeds in North America, specifically native to the state of Maine, where it is the official state cat.",
      },
      {
        breed: "Siamese", 
        src: Siamese,
        life: "15 to 20 yrs",
        origin: "Thailand",
        fact: "The earlier Siamese were much rounder and stockier, with a generally more sturdy appearance, and a rounder head.",
        desc: "The Siamese cat is one of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace,one of several varieties of cat native to Thailand, the Siamese became one of the most popular breeds in Europe and North America in the 19th century",
      },
      {
        breed: "Ragdoll", 
        src: Ragdoll,
        life: "10 yrs",
        origin: "United States, California",
        fact: "Ragdolls are so easy going and affectionate that they’ll let a child carry them around the house like, well, a rag doll.",
        desc: "The Ragdoll is a cat breed with a color point coat and blue eyes. They are large and muscular semi-longhair cat with a soft and silky coat.Developed by American breeder Ann Baker in the 1960s, they are best known for their docile and placid temperament and affectionate nature.",
      }
    ]
  }
  render(){
    const getCat = props => {
      let breed = props.match.params.breed;
      let cat = this.props.cats.find(cat => cat.breed.replace(/ +/g, "").toLowerCase() === breed.replace(/ +/g, "").toLowerCase());
      // if cat not found redirect back to the Cat List
      if(!cat) return <Redirect to="/cats"/>
      // else return the CatDetails Component 
      else return <CatDetails {...props} cat={cat}/>
    }
    return (
      <div className="App">
      <NavBar cats={this.props.cats}/>
      <Switch>
        <Route exact path='/cats' render={() => <CatsList cats={this.props.cats}/>}/>
        <Route exact path='/cats/:breed' render={getCat}/>
        <Redirect to="/cats"/>
      </Switch>
      </div>
    );
  }
}

export default App;
