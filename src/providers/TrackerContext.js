import React from "react";
import HistoryObject from "../components/atoms/HistoryObject/HistoryObject";

export const TrackerContext = React.createContext({
  history: [],
  handleTransaction: () => {},
});

export const TrackerProvider = ({ children }) => {
  const history = [];

  const handleTransaction = (name, amount) => {
    if (name.value && amount.value) {
      history.push(<HistoryObject name={name} amount={amount} />);
    }
  };

  return (
    <TrackerContext.Provider value={{ history, handleTransaction }}>
      {children}
    </TrackerContext.Provider>
  );
};
