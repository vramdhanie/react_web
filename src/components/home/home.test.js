import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe('Home component', () => {
  it('should render', () => {
    shallow(<Home/>);
  });
});
