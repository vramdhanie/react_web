import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('Card component', () => {
  it('should render', () => {
    shallow(<Card/>);
  });
});
