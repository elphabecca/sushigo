/*** src/Card.js   ***/

import React from 'react';
import './styles.css';

const Card = (props) => {
  // needs type, name, (?)value
  if (props.suit == "♣︎" || props.suit == "♠︎") {
    return (<div className="card card-black"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div><div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div></div>);
  }
  else if (props.suit == "♥︎" || props.suit == "♦︎") {
    return (<div className="card card-red"><div className="card-tl"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      <div className="card-br"><div className="card-value">{props.value}</div><div className="card-suit">{props.suit}</div></div>
      </div>);
  }
  else if (props.type == "Set") {
    return (<div className="card card-purple">
      <div className="card-tl">
      <div className="card-name">{props.name}</div>
      </div>
    </div>)
  }
  else if (props.type == "Pudding") {
    return (<div className="card card-pink">
      <div className="card-tl">
      <div className="card-name">{props.name}</div>
      </div>
    </div>)
  }
  else if (props.type == "Other") {
    return (<div className="card card-blue">
      <div className="card-tl">
      <div className="card-name">{props.name}</div>
      </div>
    </div>)
  }
};

export default Card;
