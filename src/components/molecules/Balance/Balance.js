import React, { useContext } from "react";
import { BalanceParagraph, BalanceTitle } from "./Balance.styles";
import { TrackerContext } from "../../../providers/TrackerContext";

const Balance = () => {
  const { state } = useContext(TrackerContext);
  const balance = state.income - state.expense;
  let result;

  if (balance === 0) result = "$0";
  else if (balance > 0) result = `+$${balance}`;
  else {
    const negativeBalance = balance.toString().slice(1);
    result = `-$${negativeBalance}`;
  }

  return (
    <>
      <BalanceTitle>your balance</BalanceTitle>
      <BalanceParagraph>{result}</BalanceParagraph>
    </>
  );
};

export default Balance;
