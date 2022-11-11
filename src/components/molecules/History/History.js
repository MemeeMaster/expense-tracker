import React, { useContext } from "react";
import Title from "../../atoms/Title/Title";
import { TrackerContext } from "../../../providers/TrackerContext";

const History = () => {
  const { state } = useContext(TrackerContext);

  return (
    <>
      <Title content="History" />
      {state.history}
    </>
  );
};

export default History;
