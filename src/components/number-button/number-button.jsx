import styled from "styled-components";
import Button from "../button/button";

const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;

const NumberButton = (props) => {
  const { value, handleNumberButtonClick } = props;
  return (
    <>
      {value === 0 ? (
        <ZeroButton onClick={() => handleNumberButtonClick(value)}>
          {value}
        </ZeroButton>
      ) : (
        <Button onClick={() => handleNumberButtonClick(value)}>{value}</Button>
      )}
    </>
  );
};

NumberButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleNumberButtonClick: PropTypes.func.isRequired,
};

export default NumberButton;
