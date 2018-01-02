import React, { Component } from 'react';
import colours from '../../shared/constants/colours';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  background-color: ${colours.PRIMARY_COLOUR_DARK};
  height: 5vh;
`;

export class Navigation extends Component{
    render(){
        return (
            <Container>
              The Navigation bar
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
            </Container>
        );
    }
}

export default Navigation;
