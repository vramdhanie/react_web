import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styled from 'styled-components';
import Home from '../home/home';
import Articles from '../articles/articles';
import Navigation from '../navigation/navigation';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Wrapper = styled.div`
  overflow-x: visible;
  overflow-y:auto;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 0 auto;
`;

class App extends Component {
  render() {
    return (
        <Router>
          <div>
          <Wrapper key="1">
            <Navigation/>
            <Route exact path="/" component={Header}/>
            <Main>
              <Route exact path="/" component={Home}/>
              <Route path="/articles" component={Articles}/>
            </Main>
          </Wrapper>
           <Footer key="2">
            &copy; Vincent Ramdhanie
           </Footer>
          </div>
        </Router>
    );
  }
}

export default App;
