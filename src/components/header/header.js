import React, { Component } from 'react';
import styled from 'styled-components';
import colours from '../../shared/constants/colours';

const Container = styled.header`
    height: 75vh;
    background-color: ${colours.PRIMARY_COLOUR};
    flex: 1 0 auto;
`;

export default class Header extends Component{

  render(){
    return (
        <Container>

          The rest of the header
        </Container>
    );
  }

}
