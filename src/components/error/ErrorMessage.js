import React from "react";
import "./ErrorMessage.scss";

const ErrorMessage = ({ errorText }) => {
  return <div className="error-message">{errorText}</div>;
};

export default ErrorMessage;
