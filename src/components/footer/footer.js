import React, { Component } from 'react';
import styled from 'styled-components';
import colours from '../../shared/constants/colours';
import FontAwesome from 'react-fontawesome';

const FooterWrapper = styled.footer`
  background-color: ${colours.PRIMARY_COLOUR};
  color: ${colours.PRIMARY_COLOUR_TEXT};
  height:10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding:2px;
`;

const IconWrapper =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:33.3%;
  flex:1;
`

const CopyWrapper = styled.div`
  flex: 1;
`;

const NameWrapper = styled.div`
  flex: 1;
`;

export class Footer extends Component{
  render(){
    return (
        <FooterWrapper>
          <NameWrapper>A</NameWrapper>
          <CopyWrapper>&copy; 2018 Vincent Ramdhanie</CopyWrapper>
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
