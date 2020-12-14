import React from "react";
import "./Button.scss";

const Button = ({ text, color, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${color}`}>
      {text}
    </button>
  );
};

export default Button;
