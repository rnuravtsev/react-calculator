import styled from "styled-components";

const Keypad = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-areas: 
  'function arithmetic'
  'number arithmetic';
  grid-template-columns: 1fr 100px;
  
`;

export default Keypad;
