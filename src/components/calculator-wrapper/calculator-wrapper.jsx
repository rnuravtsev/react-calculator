import styled from "styled-components";

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.palette.black.main}; 
`;

export default CalculatorWrapper;
