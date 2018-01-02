import styled from 'styled-components';
import colours from '../../shared/constants/colours';
import PropTypes from 'prop-types';

export const CardHeader = styled.div`
  text-align: center;
  font-size: 1.3em;
  font-weight: bold;
  background-color: ${colours.PRIMARY_COLOUR_LIGHT};
  color: #FFFFFF;
  border-top-left-radius: ${props => props.rounded?'4px':'0'};
  border-top-right-radius: ${props => props.rounded?'4px':'0'};
`;

CardHeader.propTypes = {
  rounded: PropTypes.bool
};

CardHeader.defaultProps = {
  rounded: true
};

export default CardHeader;
