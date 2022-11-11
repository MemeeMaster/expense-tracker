import React from "react";
import { Wrapper, Name, Amount } from "./HistoryObject.styles";

const HistoryObject = ({ name, amount, isIncome = false }) => {
  return (
    <Wrapper isIncome={isIncome}>
      <Name>{name}</Name>
      <Amount>{amount}</Amount>
    </Wrapper>
  );
};

export default HistoryObject;
