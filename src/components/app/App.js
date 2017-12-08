import React, { Component } from 'react';
import './App.css';

import Markdown from '../Markdown/markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        The main app

        <Markdown text="**Bold** and _italic_"/>

      </div>
    );
  }
}

export default App;
