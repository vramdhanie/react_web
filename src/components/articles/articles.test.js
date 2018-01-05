import React from 'react';
import { shallow } from 'enzyme';
import Articles from './articles';

describe('Acrticles component', () => {
  it('should render', () => {
    shallow(<Articles/>);
  });
});
