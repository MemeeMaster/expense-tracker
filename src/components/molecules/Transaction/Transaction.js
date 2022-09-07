import React, { useContext } from "react";
import Title from "../../atoms/Title/Title";
import Input from "../../atoms/Input/Input";
import { Button } from "./Transaction.styles";
import { TrackerContext } from "../../../providers/TrackerContext";

const Transaction = () => {
  const { handleTransaction } = useContext(TrackerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = document.getElementById("text");
    const number = document.getElementById("amount");

    handleTransaction(text, number);
    text.value = "";
    number.value = "";
  };

  return (
    <>
      <Title content="Add new transaction" />
      <form onSubmit={handleSubmit}>
        <Input type="text" id="text" content="Text" />
        <Input type="number" id="amount" content="Amount" />
        <Button type="submit">Add transaction</Button>
      </form>
    </>
  );
};

export default Transaction;
