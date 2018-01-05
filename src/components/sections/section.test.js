import React from 'react';
import { shallow } from 'enzyme';
import { Section, ImageSection } from './section';

describe('Section', () => {
  it('should render', () => {
    shallow(<Section/>);
  });
});

describe('Image Section', () => {
  it('should render', () => {
    shallow(<ImageSection/>);
  });
});
