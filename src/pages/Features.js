import React, { Fragment } from "react";

function Features() {
  return (
    <Fragment>
      <div className="custom-bg1 ">
        <section className="pt-5 position-relative custom-bg1 container-fluid">
          <h1 className="text-center py-5">This website allows you to:</h1>
          <div className="row">
            <div className="col-6 custom-bg1 text-center custom-effect">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="black"
                  className="bi bi-chat-dots-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <h3>Add Comment</h3>
            </div>
            <div className="col-6 custom-bg2 text-center custom-effect">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="black"
                  className="bi bi-eye-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              </div>
              <h3 style={{ color: "black" }}>Read Comments</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6 custom-bg2 text-center custom-effect">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="black"
                  className="bi bi-book-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
              </div>
              <h3 style={{ color: "black" }}>Read Posts</h3>
            </div>
            <div className="col-6 custom-bg1 text-center custom-effect">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="black"
                  className="bi bi-file-earmark-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                </svg>
              </div>
              <h3 style={{ color: "black" }}>Make Your Own Post</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6 custom-bg1 text-center custom-effect">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="black"
                  className="bi bi-hdd-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-1zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM.91 7.204A2.993 2.993 0 0 1 2 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0 0 11.906 3H4.094a1.5 1.5 0 0 0-1.317.782L.91 7.204z" />
                </svg>
              </div>
              <h3 style={{ color: "black" }}>Retrieve Data From Back-End</h3>
            </div>
            <div className="col-6 custom-bg2 text-center custom-effect">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="black"
                  className="bi bi-send-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </div>
              <h3 style={{ color: "black" }}>Contact Me</h3>
            </div>
          </div>
          <div className="container-lg">
            <h2 className="text-center pt-5 pb-3">More details:</h2>
            <p className="text-center pb-1">
              I decided to host this web page on Netlify, because it is
              convenient, easy and free.
              <br />
              Thanks to Bootstrap 5 this website is fully responsive and the
              amount of CSS is highly reduced.
              <br />
              Firebase configuration is not public and cannot be accessed. For
              this project I used Realtime Database.
              <br />
              With help of EmailJS you can send me an e-mail from contact form
              if you want.
              <br />
              Content stored in the backend is devided into three containers:
            </p>
            <ul className="text-center list-unstyled">
              <li>
                <b>Posts Short</b> - stores Title, PostID, Timestamp and
                ImageUrl
              </li>
              <li>
                <b>Posts Content</b> - stores Content of each individual post
                and the same ID as in Posts Short
              </li>
              <li>
                <b>Comments</b> - stores PostID, Timestamp, Username and
                comment.
              </li>
            </ul>
            <p className="text-center py-1">
              There are alerts on the page to keep it more engaging for Users.
              <br />
              Comments and Posts are displayed from newest to oldest.
              <br />
              Everytime new comment is added, it's immediatly displayed to the
              public.
              <br />
              CKEditor allows to make posts that are not just plain text. User
              can use different headers, quotes, links and so on...
              <br />
              If you go to the page that doesn't exist, application will inform
              you about it.
              <br />
              As I mentioned already this is my first React application and to
              develop it I used:
            </p>
            <ul className="text-center list-unstyled">
              <li>
                <b>Functional and Reusable Components with properties</b>
              </li>
              <li>
                <b>useState, useEffect, useRef, useParams</b>
              </li>
              <li>
                <b>Links, Routes, Dynamic Routes & Fragments</b>
              </li>
            </ul>
            <h2 className="text-center py-5">Thank you for reading and have a Great Day :)</h2>

          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Features;
