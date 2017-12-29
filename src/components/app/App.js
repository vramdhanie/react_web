import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  overflow-x:hidden;
  overflow-y:auto;
  perspective: 2px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <main>
          The main section
        </main>
        <Footer>
          &copy; Vincent Ramdhanie
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
