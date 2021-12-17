import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { useHistory } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import firebase from "../utils/firebase-config";

function CreateNew() {
  // const history = useHistory();
  const titleRef = useRef("");
  const imageRef = useRef("");
  let data;

  const [isAlert, setAlert] = useState(false);
  const [displayMsg, setMsg] = useState("Post Has Been Added.");

  function handleAlert() {
    setAlert(false);
  }

  const submitPost = (e) => {
    e.preventDefault();
    if (data.length < 80) {
      setMsg("Write Something More Please. (80 chars min)");
      setAlert(true);
      return;
    }
    const id = Math.random().toString().slice(2);
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const timestamp = new Date();
    // console.log(enteredTitle, enteredImage, data);
    // console.log(timestamp.toLocaleString());
    const postData = {
      id: id,
      title: enteredTitle,
      imageUrl: enteredImage,
      createdDate: timestamp.toLocaleString(),
    };
    const postContent = { id: id, postContent: data };
    const shortsRef = firebase.database().ref("posts_short");
    const contentRef = firebase.database().ref("posts_content");
    shortsRef.push(postData);
    contentRef.push(postContent).then(console.log("Send"));
    setMsg("Post Has Been Added.");
    // e.target.reset();
    // editor.setData("");
    setAlert(true);
  };

  return (
    <div className="custom-gradient">
      <div className="container-sm py-5">
        <div className="contact-form pt-5 d-flex justify-content-center align-items-center">
          <form onSubmit={submitPost} className="w-75 text-center">
            <h2 className="pb-2">Make Your Own Post</h2>
            <input
              type="text"
              placeholder="Your Title*"
              required
              className="
                              form-control form-control-lg
                              fs-6
                              border-0
                              shadow-sm mb-4
                            "
              ref={titleRef}
            />
            <input
              type="text"
              placeholder="Your Image Url*"
              className="
                              form-control form-control-lg
                              fs-6
                              border-0
                              shadow-sm mb-4
                            "
              ref={imageRef}
              required
            />
            <div className="cont">
              <CKEditor
                editor={ClassicEditor}
                data=""
                config={{
                  removePlugins: [
                    "EasyImage",
                    "ImageUpload",
                    "MediaEmbed",
                    "Table",
                  ],
                }}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  data = editor.getData();
                  console.log(data);
                }}
              />
            </div>
            <button type="submit" className="btn fw-bold gradient1 py-2 px-5">
              POST
            </button>
            {isAlert && (
              <AlertMessage changeState={handleAlert} message={displayMsg} />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
