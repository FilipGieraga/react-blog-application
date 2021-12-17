import React, { useRef, useState } from "react";
import AlertMessage from "../components/AlertMessage";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_awKUwkT8ciOd9Syk5GxiZ");
function Contact() {
  const [isAlert, setAlert] = useState(false);
  function handleAlert() {
    setAlert(!isAlert);
  }
  // getting text value with useState
  const nameRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  // getting text value with useRef
  // useRef is kinda better cause it doesn't rerender page and requires less code
  console.log("Renders");
  const sendMessage = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;
    console.log(enteredName, enteredSubject, enteredMessage);
    let templateParams = {
      from_name: enteredName,
      topic: enteredSubject,
      message: enteredMessage,
    };
    emailjs
      .send("service_izcsorz", "template_7skqv0f", templateParams)
      .then(function (res) {
        console.log("success", res.status);
      });
    e.target.reset();
    setAlert(true);
  };

  return (
    <div className="custom-gradient min-vh-100">
      <div className="container-sm py-5">
        <div className="contact-form pt-5 d-flex justify-content-center align-items-center">
          <form onSubmit={sendMessage} className="w-75 text-center">
            <h2 className="pb-2">Contact Me</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="
                        form-control form-control-lg
                        fs-6
                        border-0
                        shadow-sm mb-4
                      "
              ref={nameRef}
              required
              // value={enteredName}
              // onChange={(event) => {
              //   setEnteredName(event.target.value);
              // }}
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="
                        form-control form-control-lg
                        fs-6
                        border-0
                        shadow-sm mb-4
                      "
              ref={subjectRef}
              required
            />
            <textarea
              className="form-control form-control-lg
            fs-6
            border-0
            shadow-sm mb-4"
              placeholder="Your Message..."
              id="floatingTextarea2"
              style={{ height: 250 }}
              ref={messageRef}
              required
            ></textarea>
            <button type="submit" className="btn fw-bold gradient1  py-2 px-5">
              SEND
            </button>
            {isAlert && (
              <AlertMessage
                changeState={handleAlert}
                message={"Message has been sent."}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
