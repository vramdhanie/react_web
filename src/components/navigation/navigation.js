import React, {Component} from 'react';
import colours from '../../shared/constants/colours';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.nav`
  background-color: ${colours.PRIMARY_COLOUR_DARK};
  height: 5vh;
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
  color: ${colours.PRIMARY_COLOUR_TEXT}
`;

const NavItem = styled.li`
  line-height: 40px;
  height: 40px;
  display: inline-block;
`;

export class Navigation extends Component {
  render() {
    return (
        <Container>
          <NavList>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/articles">Articles</Link></NavItem>
          </NavList>


        </Container>
    );
  }
}

export default Navigation;
