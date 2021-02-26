import { ButtonGrey } from "../button/button";

const ClearButton = (props) => {
  const { handleClearButtonClick } = props;
  return <ButtonGrey onClick={handleClearButtonClick}>C</ButtonGrey>;
};

ClearButton.propTypes = {
  handleClearButtonClick: PropTypes.func.isRequired,
};

export default ClearButton;
