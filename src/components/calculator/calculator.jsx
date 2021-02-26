import NumberButton from "../number-button/number-button";
import Display from "../display/display";
import CalculatorTitle from "../calculator-title/calculator-title";
import Keypad from "../keypad/keypad";
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
  const [accum, setAccum] = React.useState(``);
  const [arithmeticOperation, setArithmeticOperation] = React.useState(``);

  const handleNumberButtonClick = (value) => {
    setNumber(`${number + value}`);
  };

  const handleArithmeticButtonClick = (value) => {
    setArithmeticOperation(value);
    setAccum(number);
    setNumber(``);
    calculate();
  };

  const handleClearButtonClick = () => {
    setNumber(``);
    setAccum(``);
    setArithmeticOperation(``);
  };

  const handleBackButtonClick = () => {
    setNumber(number.slice(0, number.length - 1));
  };

  const handleNegativeButtonClick = () => (
    number < 0 ? setNumber(`${Math.sign(number) * number}`) : setNumber(`${Math.sign(number) * -number}`)
  );

  const calculate = () => {
    if (number && accum) {
      switch (arithmeticOperation) {
        case `+`:
          setAccum(`${Math.round(`${(parseFloat(accum) + parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case `-`:
          setAccum(`${Math.round(`${(parseFloat(accum) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case `/`:
          setAccum(`${Math.round(`${(parseFloat(accum) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case `*`:
          setAccum(`${Math.round(`${parseFloat(accum) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber(``);
    }
  };

  return (
    <>
      <CalculatorTitle>My Calculator v1.0</CalculatorTitle>
      <Display
        number={number}
        accum={accum}
        arithmeticOperation={arithmeticOperation}
      />
      <Keypad>
        <FunctionalButtonsWrapper>
          <ClearButton onClick={handleClearButtonClick} />
          <BackButton onClick={handleBackButtonClick} />
          <NegativeButton onClick={handleNegativeButtonClick} />
        </FunctionalButtonsWrapper>
        <NumberButtonsWrapper>
          {numberButtons.reverse().map((el, index) => (
            <NumberButton
              key={index}
              value={el}
              onNumberButtonClick={handleNumberButtonClick}
            />
          ))}
        </NumberButtonsWrapper>
        <ArithmeticButtonsWrapper>
          {arithmeticButtons.map((el, index) => (
            <ArithmeticButton
              key={index}
              value={el}
              onArithmeticButtonClick={handleArithmeticButtonClick}
            />
          ))}
          <EqualButton onClick={calculate}>=</EqualButton>
        </ArithmeticButtonsWrapper>
      </Keypad>
    </>
  );
};

export default Calculator;
