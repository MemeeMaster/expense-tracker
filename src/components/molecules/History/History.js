import React, { useEffect, useContext } from "react";
import Title from "../../atoms/Title/Title";
import { TrackerContext } from "../../../providers/TrackerContext";

const History = () => {
  const { history } = useContext(TrackerContext);
  const objects = [];
  useEffect(() => {
    
  }, [history]);

  return (
    <>
      <Title content="History" />
      {objects}
    </>
  );
};

export default History;
