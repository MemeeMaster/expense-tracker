import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  text-align: center;
`;

export const Header = styled.p`
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const Money = styled.p`
  margin-top: 0;
  color: ${({ theme, isIncome }) => {
    if (isIncome) return theme.colors.green;
    return theme.colors.red;
  }};
  font-weight: bold;
  font-size: 18px;
`;
