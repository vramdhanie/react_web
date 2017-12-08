import { shallow } from 'enzyme';
import React from 'react';
import Markdown from './markdown';

describe('Markdown Component', () => {
    it('should render', () => {
        shallow(<Markdown/>);
    })
});