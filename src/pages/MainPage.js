import pic from "../img/blog.jpg";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import firebase from "../utils/firebase-config";

function MainPage() {
  const [retrievedData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const shortsRef = firebase.database().ref("posts_short");
    shortsRef.limitToLast(3).on("value", (snapshot) => {
      const shorts = snapshot.val();
      for (const id in shorts) {
        setData((prevstate) => [...prevstate, shorts[id]]);
      }
      setData((prevstate) => [...prevstate].reverse());
      setLoading(false);
    });
    return () => {
      setData([]);
    };
  }, []);

  return (
    //   First section start
    <Fragment>
      <section className="home pt-5 position-relative custom-bg1">
        <img
          src={pic}
          alt=""
          className="position-absolute d-none d-md-block top-0 end-0 mainpic"
          style={{
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
          }}
        />
        <div className="container-lg py-5">
          <div className="row dxd pt-5 pb-0 pb-md-3 d-flex align-items-center">
            <div className="col-md-5 text-center text-md-start  ">
              <h2 className="fs-1 m-0">Welcome to this blog.</h2>
              <h2 className="fs-2 py-2"> It's good to see you here.</h2>
              <p>
                This is my first React application, it also uses Bootstap 5.
                <br />
                Click below to explore it's features.
              </p>
              <button className="btn gradient2 mt-1 px-4 py-2 fw-bold">
                <Link to="/features">Features</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* First section end */}
      {/* Category One section */}
      <section className="disclaimer custom-bg2">
        <div className="container-lg py-5">
          <h1 className="text-center fs-1">Disclaimer</h1>
          <p
            className="m-auto text-center fs-6 py-3 px-3"
            style={{ maxWidth: 700 }}
          >
            Main purpose of this project is to present a website that is fully
            responsive and allows me to practice my skills in React. I would
            also like to mention that all of the posts on this website{" "}
            <strong>are stored on a Firebase Server.</strong> Content of the
            blog posts below may be random, because I am not a copyrighter yet
            :).
          </p>
        </div>
      </section>
      <section className="postcategory custom-bg1">
        <div className="container-lg py-5">
          <div className="row pb-3 align-items-center">
            <div className="col-3"></div>
            <div className="col-6 text-center">
              <h2 className=" fs-1 m-0">Recent:</h2>
            </div>
            <div className="col-3 text-end">
              <button className="btn gradient2  p2-4 fs-sm-6  py-2 fw-bold">
                <Link to="/all-posts">All Posts</Link>
              </button>
            </div>
          </div>
          {isLoading ? (
            <div className="text-center py-5">
              <Spinner />
            </div>
          ) : (
            <PostList postDetails={retrievedData} />
          )}
        </div>
      </section>
    </Fragment>
  );
}
export default MainPage;
