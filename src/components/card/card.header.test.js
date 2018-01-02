import { shallow } from 'enzyme';
import CardHeader from './card.header';

describe('Card Header', () => {
  it('should render', () => {
    shallow(<CardHeader/>);
  });
});
