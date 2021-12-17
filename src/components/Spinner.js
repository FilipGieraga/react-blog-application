import React from "react";

function Spinner() {
  return (
    <div className="spinner-border" style={{ color: "#af4425" }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spinner;
