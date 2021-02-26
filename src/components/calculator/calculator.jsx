import NumberButton from "../number-button/number-button";
import Display from "../display/display";
import CalculatorTitle from "../calculator-title/calculator-title";
import ButtonsWrapper from "../buttons-wrapper/buttons-wrapper";
import NumberButtonsWrapper from "../number-buttons-wrapper/number-buttons-wrapper";
import ArithmeticButtonsWrapper from "../arithmetic-buttons-wrapper/arithmetic-buttons-wrapper";
import ArithmeticButton from "../arithmetic-button/arithmetic-button";
import ClearButton from "../clear-button/clear-button";
import NegativeButton from "../negative-button/negative-button";
import BackButton from "../back-button/back-button";
import FunctionalButtonsWrapper from "../functional-buttons-wrapper/functional-buttons-wrapper";
import EqualButton from "../equal-button/equal-button";

const Calculator = () => {
  const numberButtons = [`.`, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arithmeticButtons = [`+`, `-`, `*`, `/`];

  const [number, setNumber] = React.useState(``);
  const [prevNumber, setPrevNumber] = React.useState(``);
  const [arithmeticOperation, setArithmeticOperation] = React.useState(``);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const handleClearButtonClick = () => {
    setNumber(``);
    setPrevNumber(``);
    setArithmeticOperation(``);
    setButtonDisabled(false);
  };

  const handleBackButtonClick = () => {
    setNumber(number.slice(0, number.length - 1));
  };

  const handleNegativeButtonClick = () => {
    if (number < 0) {
      setNumber(`${Math.sign(number) * number}`);
    } else {
      setNumber(`${Math.sign(number) * -number}`);
    }
  };

  const handleNumberButtonClick = (value) => {
    setNumber(`${(number + value)}`);
    setButtonDisabled(false);
  };

  const handleArithmeticButtonClick = (value) => {
    setArithmeticOperation(value);
    setNumber(``);
    setPrevNumber(number);
  };

  const calculate = () => {
    if (number && prevNumber) {
      switch (arithmeticOperation) {
        case `+`:
          setPrevNumber(`${Math.round(`${(parseFloat(prevNumber) + parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case `-`:
          setPrevNumber(`${Math.round(`${(parseFloat(prevNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case `/`:
          setPrevNumber(`${Math.round(`${(parseFloat(prevNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case `*`:
          setPrevNumber(`${Math.round(`${parseFloat(prevNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber(``);
      setButtonDisabled(true);
    }
  };

  return (
    <>
      <CalculatorTitle>My Calculator v1.0</CalculatorTitle>
      <Display
        total={number}
        prevNumber={prevNumber}
        arithmeticOperation={arithmeticOperation}
      />
      <ButtonsWrapper>
        <FunctionalButtonsWrapper>
          <ClearButton handleClearButtonClick={handleClearButtonClick} />
          <BackButton handleBackButtonClick={handleBackButtonClick} />
          <NegativeButton
            handleNegativeButtonClick={handleNegativeButtonClick}
          />
        </FunctionalButtonsWrapper>
        <NumberButtonsWrapper>
          {numberButtons.reverse().map((el, index) => (
            <NumberButton
              key={index}
              value={el}
              handleNumberButtonClick={handleNumberButtonClick}
            />
          ))}
        </NumberButtonsWrapper>
        <ArithmeticButtonsWrapper>
          {arithmeticButtons.map((el, index) => (
            <ArithmeticButton
              key={index}
              value={el}
              handleArithmeticButtonClick={handleArithmeticButtonClick}
              buttonDisabled={buttonDisabled}
            />
          ))}
          <EqualButton calculate={calculate} />
        </ArithmeticButtonsWrapper>
      </ButtonsWrapper>
    </>
  );
};

export default Calculator;
