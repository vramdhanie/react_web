import React, { Component } from 'react';
import './App.css';
import Footer from '../../shared/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer>
          &copy; Vincent Ramdhanie
        </Footer>
      </div>
    );
  }
}

export default App;
