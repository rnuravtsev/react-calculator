import styled from "styled-components";

const Button = styled.button`
  padding: 15px;
  text-align:center;
  background-color: ${(p) => p.theme.palette.white.main};
  border: 0;
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    opacity: 0.65;
  }
`;

export const ButtonGrey = styled(Button)`
  background-color: ${(p) => p.theme.palette.grey.main};
`;

export default Button;
