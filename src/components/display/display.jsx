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
  const { total, prevNumber } = props;
  return (
    <StyledDisplay>
      {!total.length && !prevNumber ? `0` : total || prevNumber}
    </StyledDisplay>
  );
};

Display.propTypes = {
  total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  prevNumber: PropTypes.string,
  arithmeticOperation: PropTypes.string
};

export default Display;
