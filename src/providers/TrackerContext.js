import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import HistoryObject from "../components/atoms/HistoryObject/HistoryObject";

export const TrackerContext = React.createContext({
  handleTransaction: () => {},
  state: [],
  dispatch: () => {},
});

const initialState = { income: 0, expense: 0, history: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "income":
      return {
        income: (state.income += action.amount),
        expense: state.expense,
        history: [
          ...state.history,
          <HistoryObject
            key={uuidv4()}
            name={action.name}
            amount={`+$${action.amount}`}
            isIncome
          />,
        ],
      };
    case "expense":
      const negativeAmount = action.amount.toString().slice(1);
      return {
        income: state.income,
        expense: (state.expense -= action.amount),
        history: [
          ...state.history,
          <HistoryObject
            key={uuidv4()}
            name={action.name}
            amount={`-$${negativeAmount}`}
          />,
        ],
      };
    default:
      throw new Error();
  }
};

export const TrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTransaction = (name, amount) => {
    if (!name.value || !amount.value) return;

    if (amount.value < 0)
      dispatch({ type: "expense", amount: +amount.value, name: name.value });
    else dispatch({ type: "income", amount: +amount.value, name: name.value });
  };

  return (
    <TrackerContext.Provider value={{ handleTransaction, state, dispatch }}>
      {children}
    </TrackerContext.Provider>
  );
};
