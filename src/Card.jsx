/*** src/Card.js   ***/

import React from 'react';
import './styles.css';

// "Set"
// 14x Tempura (2 of a kind == 5 points)
// 14x Sashimi (3 of a kind == 10 points)

// "Collection"
// 14x Dumpling (1 3 6 10 15)
// 10x Pudding

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

const Card = (props) => {
  // needs type and (?)value
  if (props.suit == "♣︎" || props.suit == "♠︎") {
    return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
  }
  if (props.suit == "♥︎" || props.suit == "♦︎") {
    return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      </div>);
  }
};

export default Card;
