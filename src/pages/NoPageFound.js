import React, { Fragment } from "react";

function NoPageFound() {
  return (
    <Fragment>
      <div className="container-lg py-5 custom-bg1 cover-height">
        <h2 className="text-center" style={{ paddingTop: 200 }}>
          Page doesn't exist...
        </h2>
      </div>
    </Fragment>
  );
}

export default NoPageFound;
