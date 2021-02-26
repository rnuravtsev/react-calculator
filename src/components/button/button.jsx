import styled from "styled-components";

const Button = styled.button`
  padding: 15px;
  border: 0;
`;

export const ButtonGrey = styled(Button)`
  background-color: ${(p) => p.theme.palette.grey.main};
`;

export default Button;
