import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import firebase from "../utils/firebase-config";

function AllPosts() {
  const [retrievedData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const shortsRef = firebase.database().ref("posts_short");
    shortsRef.on("value", (snapshot) => {
      const shorts = snapshot.val();
      // const shortContainer = [];
      for (const id in shorts) {
        // shortContainer.push(shorts[id]);
        setData((prevstate) => [...prevstate, shorts[id]]);
      }
      setData((prevstate) => [...prevstate].reverse());

      setLoading(false);
      // console.log(shortContainer);
      // console.log(shorts);
    });
  }, []);

  return (
    <section className="postcategory custom-bg1 cover-height">
      <div className="container-lg py-5">
        <h1 className="pt-5 pb-3 text-center">All Posts:</h1>
        {isLoading ? (
          <div className="text-center py-5">
            <Spinner />
          </div>
        ) : (
          <PostList postDetails={retrievedData} />
        )}
      </div>
    </section>
  );
}

export default AllPosts;
