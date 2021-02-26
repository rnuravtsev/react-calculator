import styled from "styled-components";
import Button from "../button/button";

const EqualButton = styled(Button)`
  padding: 15px;
  background-color: ${(p) => p.theme.palette.primary.main};
`;

export default EqualButton;
