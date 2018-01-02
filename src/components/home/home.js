import React, { Component } from 'react';
import { Section, ImageSection } from '../sections/section';
import Card from '../card/card';
import CardHeader from '../card/card.header';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';

export class Home extends Component{
  render(){
    return (
        [
          <Section key={1}>
            <Card raised={true}>
              <CardHeader>
                First
              </CardHeader>
              Card Body
            </Card>
          </Section>,
          <ImageSection background = {bg1} key={2}>
            This is a parallax section
        </ImageSection>,
          <Section key={3}>
            This is static
          </Section>,
          <ImageSection background={bg2} key={4}>
            Another Parallax section
        </ImageSection>
        ]
    );
  }
}

export default Home;
