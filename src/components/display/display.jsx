import styled from "styled-components";

const StyledDisplay = styled.div`
  padding: 15px;
  margin: 0 auto 20px;
  width: 50%;
  text-align: right;
  color: ${(p) => p.theme.palette.white.main};
  background-color: ${(p) => p.theme.palette.secondary.main};
`;

const Display = (props) => {
  const { number, accum } = props;
  return (
    <StyledDisplay>
      {!number.length && !accum ? `0` : number || accum}
    </StyledDisplay>
  );
};

Display.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  accum: PropTypes.string,
  arithmeticOperation: PropTypes.string
};

export default Display;
