import styled from "styled-components";
import Button from "../button/button";

const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;

const NumberButton = (props) => {
  const { value, onNumberButtonClick } = props;
  return (
    <>
      {value === 0 ? (
        <ZeroButton onClick={() => onNumberButtonClick(value)}>
          {value}
        </ZeroButton>
      ) : (
        <Button onClick={() => onNumberButtonClick(value)}>{value}</Button>
      )}
    </>
  );
};

NumberButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onNumberButtonClick: PropTypes.func.isRequired,
};

export default NumberButton;
