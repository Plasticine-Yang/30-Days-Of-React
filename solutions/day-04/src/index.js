import React from 'react';
import ReactDom from 'react-dom';

import Level2 from './level2.jsx';

import './style.css';

const rootElement = document.getElementById('root');

const App = () => {
  return (
    <div className="app">
      <div>
        <h1>Level2</h1>
        <Level2 />
      </div>
    </div>
  );
};

ReactDom.render(<App />, rootElement);
