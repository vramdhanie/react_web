import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styled from 'styled-components';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import Card from '../card/card';
import CardHeader from '../card/card.header';

const Wrapper = styled.div`
  overflow-x: visible;
  overflow-y:auto;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
   position: relative;
   min-height:50vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ImageSection = Section.extend`
   background-image: url(${props => props.background || ''});
   background-size: cover;
   color: #FFFFFF;
   font-size:3em;
   text-shadow: 0 0 3px black;
`;


const Main = styled.main`
  flex: 1 0 auto;
`;

class App extends Component {
  render() {
    return ([
      <Wrapper key="1">
        <Header/>
        <Main>
          <Section>
            <Card raised={true}>
              <CardHeader>
                First
              </CardHeader>
                Card Body
            </Card>
          </Section>
          <ImageSection background = {bg1}>
            This is a parallax section
          </ImageSection>
          <Section>
            This is static
          </Section>
          <ImageSection background={bg2}>
            Another Parallax section
          </ImageSection>
        </Main>
      </Wrapper>,
       <Footer key="2">
        &copy; Vincent Ramdhanie
       </Footer>]
    );
  }
}

export default App;
