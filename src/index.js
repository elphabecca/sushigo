/*** src/index.js   ***/

import React from 'react';
import './styles.css';
import Deck from './Deck';

// TO DO:
// Replace current cards w/ sushiGo cards
// suffle button is broken (though I was going to re-do that anyway)
// there's an incorrect # of cards - there's a "1" card in addition to the ace

const MyComponent = () => (
    <h1><Deck /></h1>
);

export default MyComponent;