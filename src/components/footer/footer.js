import React, { Component } from 'react';
import styled from 'styled-components';
import colours from '../../shared/constants/colours';
import FontAwesome from 'react-fontawesome';

const FooterWrapper = styled.footer`
  background-color: ${colours.PRIMARY_COLOUR};
  color: ${colours.PRIMARY_COLOUR_TEXT};
  height:10vh;
  flex: 1 0 auto;
  flex-shrink: 0;  
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:33.3%;
`

export class Footer extends Component{
  render(){
    return (
        <FooterWrapper>
          <div>A</div>
          <div>&copy; 2018 Vincent Ramdhanie</div>
          <IconWrapper>
            <FontAwesome name="twitter" size="2x"/>
            <FontAwesome name="facebook" size="2x"/>
            <FontAwesome name="stack-overflow" size="2x"/>
            <FontAwesome name="linkedin-square" size="2x"/>
          </IconWrapper>
        </FooterWrapper>
    )
  }
}

export default Footer;
