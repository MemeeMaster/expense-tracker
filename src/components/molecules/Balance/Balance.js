import React from "react";
import { BalanceParagraph, BalanceTitle } from "./Balance.styles";

const Balance = () => {
  return (
    <>
      <BalanceTitle>your balance</BalanceTitle>
      <BalanceParagraph>$400.00</BalanceParagraph>
    </>
  );
};

export default Balance;
