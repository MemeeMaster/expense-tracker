import styled from "styled-components";

export const Button = styled.button`
  padding: 5px 0;
  width: 100%;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.lightgrey};
  background-color: ${({ theme }) => theme.colors.purple};
  border: none;
  border-radius: 2px;
  box-shadow: 0 0 5px 0 ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;
