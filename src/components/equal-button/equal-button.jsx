import styled from "styled-components";
import Button from "../button/button";

const StyledEqualButton = styled(Button)`
  padding: 15px;
  background-color: ${(p) => p.theme.palette.primary.main};
`;

const EqualButton = (props) => {
  const { calculate } = props;
  return <StyledEqualButton onClick={calculate}>=</StyledEqualButton>;
};

EqualButton.propTypes = {
  calculate: PropTypes.func.isRequired,
};

export default EqualButton;
