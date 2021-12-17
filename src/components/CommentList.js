import React, { Fragment, useRef, useState } from "react";
import CommentItem from "./CommentItem";
import AlertMessage from "./AlertMessage";
import Spinner from "./Spinner";
import firebase from "../utils/firebase-config";

function CommentList(props) {
  const nickRef = useRef("");
  const commentRef = useRef("");
  const [isAlert, setAlert] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const submitComment = (e) => {
    e.preventDefault();
    setAlert(true);
    setLoading(true);
    const commsRef = firebase.database().ref("comments");
    const enteredNick = nickRef.current.value;
    const enteredComment = commentRef.current.value;
    const timestamp = new Date();
    const comment = {
      id: props.postId,
      username: enteredNick,
      createdDate: timestamp.toLocaleString(),
      comment: enteredComment,
    };
    commsRef.push(comment);
    e.target.reset();
    setLoading(false);
  };

  let content;

  if (props.data.length === 0) {
    content = (
      <p className="fs-4 text-center fw-bold pb-5">
        No comment has been added yet.
      </p>
    );
  } else {
    content = props.data.map((element) => {
      return (
        <CommentItem
          username={element.username}
          createdDate={element.createdDate}
          comment={element.comment}
          key={element.uniqueValue}
        />
      );
    });
  }

  return (
    <Fragment>
      <form onSubmit={submitComment}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg
            fs-6
            border-0
            shadow-sm mb-4"
            id="exampleFormControlInput1"
            placeholder="Username"
            required
            ref={nickRef}
            maxLength="25"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control form-control-lg
            fs-6
            border-0
            shadow-sm mb-4"
            placeholder="Your Comment"
            required
            id="exampleFormControlTextarea1"
            rows="3"
            ref={commentRef}
            maxLength="600"
          ></textarea>
        </div>
        {isLoading && (
          <div className="text-center">
            <Spinner />
          </div>
        )}
        {!isLoading && (
          <button className="btn fw-bold w-100 py-2 gradient1" type="submit">
            Add Comment
          </button>
        )}
      </form>
      {isAlert && (
        <AlertMessage
          changeState={() => {
            setAlert(false);
          }}
          message={"Comment has been added."}
        />
      )}
      <h3 className="px-2 px-md-5 py-4">Comments:</h3>
      {content}
      {/* {props.data.map((element) => {
        return (
          <CommentItem
            username={element.username}
            createdDate={element.createdDate}
            comment={element.comment}
          />
        );
      })} */}
    </Fragment>
  );
}

export default CommentList;
