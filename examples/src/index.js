/***  examples/src/index.js ***/

import React from 'react';
import { render} from 'react-dom';
import MyComponent from '../../src';
import Deck from '../../src';
import Card from '../../src';

const App = () => (
    <div>
    <Deck />
    </div>
);

render(<App />, document.getElementById("root"));