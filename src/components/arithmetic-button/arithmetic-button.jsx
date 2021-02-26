import styled from "styled-components";
import Button from "../button/button";

const StyledArithmeticButton = styled(Button)`
  background-color: ${(p) => p.theme.palette.primary.main};
`;

const ArithmeticButton = (props) => {
  const { value, handleArithmeticButtonClick, buttonDisabled } = props;
  return (
    <StyledArithmeticButton
      disabled={buttonDisabled}
      onClick={() => handleArithmeticButtonClick(value)}
    >
      {value}
    </StyledArithmeticButton>
  );
};

ArithmeticButton.propTypes = {
  value: PropTypes.string.isRequired,
  handleArithmeticButtonClick: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
};

export default ArithmeticButton;
