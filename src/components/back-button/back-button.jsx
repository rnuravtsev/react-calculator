import { ButtonGrey } from "../button/button";

const BackButton = (props) => {
  const { handleBackButtonClick } = props;
  return <ButtonGrey onClick={handleBackButtonClick}>&#8592;</ButtonGrey>;
};

BackButton.propTypes = {
  handleBackButtonClick: PropTypes.func.isRequired
};

export default BackButton;
