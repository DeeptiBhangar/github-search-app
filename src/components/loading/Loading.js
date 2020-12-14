import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="./loader.gif" alt="loader" />
      <p className="loading-container__loding-text">Loading Repositories...</p>
    </div>
  );
};

export default Loading;
