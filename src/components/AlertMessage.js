import React from "react";

function AlertMessage(props) {
  return (
    <div
      className="alert custom-bg1 fw-bold my-4 alert-dismissible text-center fade show"
      role="alert"
    >
      {props.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.changeState}
      ></button>
    </div>
  );
}

export default AlertMessage;
