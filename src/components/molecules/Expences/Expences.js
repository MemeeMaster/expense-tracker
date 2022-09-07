import React from "react";
import { Wrapper } from "./Expences.styles";
import MoneyBlock from "../../atoms/MoneyBlock/MoneyBlock";

const Expences = () => {
  return (
    <Wrapper>
      <MoneyBlock isIncome title="income" />
      <MoneyBlock title="expense" />
    </Wrapper>
  );
};

export default Expences;
