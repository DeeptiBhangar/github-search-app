import React from "react";
import "./LanguageNode.scss";

const LanguageNode = ({ languages }) => {
  return (
    <div className="languages">
      {languages.map((language, index) => (
        <label key={index}>{language.name}</label>
      ))}
    </div>
  );
};
export default LanguageNode;
