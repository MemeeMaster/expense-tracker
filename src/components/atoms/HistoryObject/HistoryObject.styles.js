import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 3px 0 ${({ theme }) => theme.colors.black};
  border-radius: 5px;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 10px;
    background-color: ${({ theme, isIncome }) => {
      if (isIncome) return theme.colors.green;
      return theme.colors.red;
    }};
  }
`;

export const Name = styled.p`
  display: inline-block;
  margin-left: 10px;
`;

export const Amount = styled.p`
  display: inline-block;
  margin-right: 20px;
`;
