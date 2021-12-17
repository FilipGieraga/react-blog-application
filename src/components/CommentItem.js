import React, { Fragment } from "react";

function CommentItem(props) {
  return (
    <Fragment>
      <div className="single-comment px-2 px-md-5 pt-3">
        <div className="row ">
          <div className="col-6 text-start">
            <p>
              Username: <strong>{props.username}</strong>
            </p>
          </div>
          <div className="col-6 text-end">
            <p>
              Posted:{" "}
              <strong>
                {props.createdDate.split(",").reverse().join(" ")}
              </strong>
            </p>
          </div>
        </div>
        <div className="row pb-3 border-bottom border-3">
          <p>{props.comment}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default CommentItem;
