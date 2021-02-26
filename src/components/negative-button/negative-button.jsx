import { ButtonGrey } from "../button/button";

const NegativeButton = (props) => {
  const { handleNegativeButtonClick } = props;
  return <ButtonGrey onClick={handleNegativeButtonClick}>+/-</ButtonGrey>;
};

NegativeButton.propTypes = {
  handleNegativeButtonClick: PropTypes.func.isRequired,
};

export default NegativeButton;
