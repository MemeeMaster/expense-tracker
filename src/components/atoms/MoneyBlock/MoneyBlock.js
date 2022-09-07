import React from "react";
import { Wrapper, Header, Money } from "./MoneyBlock.styles";

const MoneyBlock = ({ title, isIncome }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Money isIncome={isIncome}>500.00</Money>
    </Wrapper>
  );
};

export default MoneyBlock;
