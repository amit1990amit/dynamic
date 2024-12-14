import React from "react";

const Spinner = () => {

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default React.memo(Spinner);
