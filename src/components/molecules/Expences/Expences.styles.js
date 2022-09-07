import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 3px 0 ${({ theme }) => theme.colors.black};
  border-radius: 5px;

  div:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.lightgrey};
  }
`;
