import React, {Component} from 'react';
import Card from './Card';
import './Deck.css';
import axios from 'axios';

const BASE_API_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component{
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      deckID: null
    }
    this.getNewCard = this.getNewCard.bind(this);
  }
  async componentDidMount(){
    const response = await axios.get(`${BASE_API_URL}/new/shuffle/`);
    this.setState({deckID: response.data})
  }

  async getNewCard(){
    // get the card using baseID
    const id = this.state.deckID.deck_id;
    try{
      const CARD_URL = `${BASE_API_URL}/${id}/draw/`;
      let response = await axios.get(CARD_URL);

      // ***if no cards left throw error
      if(!response.data.success) throw new Error("No cards remaining!");
      console.log(response.data);
      let card = response.data.cards[0];

      // ***otherwise set the state with new cards
      this.setState(currState => ({
        cards: [...currState.cards, 
                  { 
                    id: card.code,
                    imgSrc: card.images.png,
                    name: `${card.value} of ${card.suit}`
                  }
              ]
      }));
    } catch(err){
      alert(err);
    }
  }
  render(){
    // get all cards from the state and call the Card Component
    let cards = this.state.cards.map(card => (
      <Card key={card.id} imgSrc={card.imgSrc} name={card.name}/>
    ));
    return(
      <div>
      <h1 className="Deck-title">
        <span className="Deck-Diamond">♦</span> 
        <span className="Deck-Spade">♠</span>
        <span className="Deck-heart">♥</span>
        <span className="Deck-Club">♣</span>
        &nbsp; Deck of Cards &nbsp;
        <span className="Deck-Club">♣</span>
        <span className="Deck-heart">♥</span>
        <span className="Deck-Spade">♠</span>
        <span className="Deck-Diamond">♦</span> 
      </h1>
      <h4 className="Deck-small-title">
        <span className="Deck-Card">🃏</span> 
            A Simple React App 
        <span className="Deck-Card">🃏</span></h4>
      <button onClick={this.getNewCard} className="Deck-Btn">Shuffle</button>
      <div className="Deck-card">{cards}</div>
      </div>
    )
  }
}

export default Deck;