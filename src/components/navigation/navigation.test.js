import { shallow } from 'enzyme';
import Navigation from './navigation';
import React from 'react';


describe('Navigation Bar', () => {
    it('should render the component', () => {
        shallow(<Navigation/>);
    })
});