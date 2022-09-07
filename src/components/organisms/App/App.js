import React from "react";
import Balance from "../../molecules/Balance/Balance";
import Expences from "../../molecules/Expences/Expences";
import History from "../../molecules/History/History";
import Transaction from "../../molecules/Transaction/Transaction";
import { Wrapper } from "./App.styles";

const App = () => {
  return (
    <Wrapper>
      <h2>Expense Tracker</h2>
      <Balance />
      <Expences />
      <History />
      <Transaction />
    </Wrapper>
  );
};

export default App;
