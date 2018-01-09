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
  flex: 1 1 auto;
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (

          <Container>

            <Router>
              <Wrapper key="1">
              <Navigation/>
              <Route exact path="/" component={Header}/>
              <Main>
                <Route exact path="/" component={Home}/>
                <Route path="/articles" component={Articles}/>
              </Main>
              </Wrapper>
            </Router>

           <Footer/>
          </Container>

    );
  }
}

export default App;
