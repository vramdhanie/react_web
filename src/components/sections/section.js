import styled from 'styled-components';

export const Section = styled.section`
   position: relative;
   min-height:50vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ImageSection = Section.extend`
   background-image: url(${props => props.background || ''});
   background-size: cover;
   color: #FFFFFF;
   font-size:3em;
   text-shadow: 0 0 3px black;
`;
