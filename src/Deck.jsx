/*** src/Deck.js   ***/

import React from 'react';
import './styles.css';
import Card from './Card';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shuffleCards(deck) {
    console.log('shuffling deck');
    let counter = deck.length;
    let t;
    let i;

    while (counter) {
      i = Math.floor(Math.random() * counter-- );
      t = deck[counter];
      deck[counter] = deck[i];
      deck[i] = t;
    }
    return deck;
  }

  render() {
    let cardDeck = [];
    let card = [];
    
    // "Set"
    // 14x Tempura (2 of a kind == 5 points)
    // 14x Sashimi (3 of a kind == 10 points)
    // 14x Dumpling (1 3 6 10 15)
    const setNames = ["Tempura", "Sashimi", "Dumpling"];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < setNames.length; j++) {
        card = {type: "Set", name: setNames[j]};
        cardDeck.push(card);
      }
    }

    // "Pudding"
    // 10x Pudding
    for (let l = 0; l < 10; l++) {
      card = {type: "Pudding", name: "Pudding"};
      cardDeck.push(card);
    }

    // "Maki"
    // 12x 2 Maki rolls
    // 8x 3 Maki rolls
    // 6x 1 Maki roll

    // "Nigiri"
    // 10x Salmon Nigiri (2pts)
    // 5x Squid Nigiri (3pts)
    // 5x Egg Nigiri (1pt)

    // "Other"
    // 6x Wasabi
    // 4x Chopsticks
    for (let w = 0; w < 6; w++) {
      card = {type: "Other", name: "Wasabi"};
      cardDeck.push(card);
    }
    for (let c = 0; c < 4; c++) {
      card = {type: "Other", name: "Chopsticks"};
      cardDeck.push(card);
    }
    ;

    this.shuffleCards(cardDeck);


    return (
      <div>
        <button onClick={this.shuffleCards(cardDeck)}>Shuffle</button>
        <div className="deck">
          {cardDeck.map(function(card) {
            return <Card
            suit={card.suit}
            value={card.val}
            type={card.type}
            name={card.name}
             />
          })}
        </div>
      </div>
    );
  }
};

export default Deck;