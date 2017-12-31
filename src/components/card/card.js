import styled from 'styled-components';
import PropTypes from 'prop-types';
import colours from '../../shared/constants/colours';

export const Card = styled.div`
  box-shadow: 0 0 ${props => props.raised?4:1}px 1px ${props => props.border_colour}22;
  border-radius: 4px;
  min-width: 200px;
  min-height: 300px;
`;


Card.propTypes = {
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  border_colour: PropTypes.string
};

Card.defaultProps = {
  raised: true,
  rounded: true,
  border_colour: colours.PRIMARY_COLOUR_DARK
};

export default Card;
