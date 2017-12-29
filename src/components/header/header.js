import React, { Component } from 'react';
import Navigation from '../navigation/navigation';

export default class Header extends Component{

  render(){
    return (
        <header>
          <Navigation/>
          The rest of the header
        </header>
    );
  }

}
