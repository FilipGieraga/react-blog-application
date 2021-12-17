import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import { Markup } from "interweave";
import Spinner from "../components/Spinner";
import firebase from "../utils/firebase-config";

function BlogPost() {
  const [shortData, setShort] = useState([]);
  const [contentData, setContent] = useState([]);
  const [commentsData, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { handle } = useParams();
  // console.log(handle); //for unique id of post

  useEffect(() => {
    const shortRef = firebase.database().ref("posts_short");
    const contentRef = firebase.database().ref("posts_content");
    const commsRef = firebase.database().ref("comments");
    shortRef
      .orderByChild("id")
      .equalTo(handle)
      .on("child_added", function (snapshot) {
        // console.log(snapshot.key);
        // console.log(snapshot.val());
        setShort(snapshot.val());
      });

    contentRef
      .orderByChild("id")
      .equalTo(handle)
      .on("child_added", function (snapshot) {
        setContent(snapshot.val());
      });

    commsRef
      .orderByChild("id")
      .equalTo(handle)
      .on("child_added", function (snapshot) {
        const singleComment = { ...snapshot.val(), uniqueValue: snapshot.key };
        // console.log(singleComment);
        setComments((prevstate) => [singleComment, ...prevstate]);
      });

    setLoading(false);
    // get single post by id
  }, [handle]);
  // shortData.createdDate = shortData.createdDate.split(",").reverse().join(" ");
  return (
    <Fragment>
      {isLoading ? (
        <div className="text-center py-5" style={{ marginTop: 200 }}>
          <Spinner />
        </div>
      ) : (
        <div className="gradient1">
          <div className="container-xxl d-flex justify-content-center pt-5 pb-1 ">
            <img
              src={shortData.imageUrl}
              className="pt-4 pb-2 post-img"
              alt=""
            />
          </div>
          <div className="container-lg post bg-white mx-auto mb-5 pt-5 pb-4">
            <h2 className="text-center pb-2">{shortData.title}</h2>
            <p className="me-2 fs-5 me-lg-5 fw-bold text-end d-flex justify-content-end align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-calendar-plus-fill me-3"
                viewBox="0 0 16 16"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0z" />
              </svg>
              {shortData.createdDate}
            </p>
            <div className="px-3 px-lg-5" style={{ wordWrap: "break-word" }}>
              <Markup content={contentData.postContent} />
            </div>
          </div>
          <div className="container-lg post bg-white mx-auto mb-5 pt-5">
            <CommentList data={commentsData} postId={handle} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default BlogPost;
