import React, { useContext } from "react";
import { TrackerContext } from "../../../providers/TrackerContext";
import { Wrapper, Header, Money } from "./MoneyBlock.styles";

const MoneyBlock = ({ title, isIncome }) => {
  const { state } = useContext(TrackerContext);
  const { income, expense } = state;
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Money isIncome={isIncome}>{isIncome ? income : expense}</Money>
    </Wrapper>
  );
};

export default MoneyBlock;
