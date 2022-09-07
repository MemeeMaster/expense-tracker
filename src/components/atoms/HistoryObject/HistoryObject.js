import React from "react";
import { Wrapper, Name, Amount } from "./HistoryObject.styles";

const HistoryObject = ({ name, amount }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Amount>{amount}</Amount>
    </Wrapper>
  );
};

export default HistoryObject;
