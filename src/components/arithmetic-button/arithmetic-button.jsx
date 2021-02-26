import styled from "styled-components";
import Button from "../button/button";

const StyledArithmeticButton = styled(Button)`
  background-color: ${(p) => p.theme.palette.primary.main};
`;

const ArithmeticButton = (props) => {
  const { value, onArithmeticButtonClick } = props;
  return (
    <StyledArithmeticButton
      onClick={() => onArithmeticButtonClick(value)}
    >
      {value}
    </StyledArithmeticButton>
  );
};

ArithmeticButton.propTypes = {
  value: PropTypes.string.isRequired,
  onArithmeticButtonClick: PropTypes.func.isRequired,
};

export default ArithmeticButton;
