import React from "react";
import { StyledLabel, StyledInput } from "./Input.styles";

const Input = ({ id, content, type }) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{content}</StyledLabel>
      <StyledInput type={type} id={id} step={type === "text" ? null : "0.01"} />
    </>
  );
};

export default Input;
