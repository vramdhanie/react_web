import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header component', () => {
  it('should render', () => {
    shallow(<Header/>);
  });
});
