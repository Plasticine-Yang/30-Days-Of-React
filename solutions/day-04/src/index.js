import React from 'react';
import ReactDom from 'react-dom';

import { Level2Case1, Level2Case2 } from './level2.jsx';

import './style.css';

const rootElement = document.getElementById('root');

const App = () => {
  return (
    <div className="app">
      {/* Level2 */}
      <div>
        <h1>Level2</h1>

        {/* Case 1 */}
        <p>Case 1</p>
        <Level2Case1 />

        {/* Case 2 */}
        <p>Case 2</p>
        <Level2Case2 />
      </div>
    </div>
  );
};

ReactDom.render(<App />, rootElement);
