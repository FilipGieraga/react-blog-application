import { Link } from "react-router-dom";
function PostItem(props) {
  function displayID(e) {
    // console.log(e.target.value);
    console.log(props.id);
    // console.log(props.imageUrl);
  }

  return (
    <div className="col-md-4 my-4" key={props.id}>
      <div id={props.id} className="card custom-bg2 shadow-sm">
        <img
          src={props.imageUrl}
          // className="img-fluid"
          className="card-img-top"
          // style={{ height: "300" }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="text-muted">Post date: {props.createdDate}</p>
          <div className="d-flex justify-content-end me-3">
            <Link to={`blogpost/${props.id}`}>
              <button onClick={displayID} className="btn gradient1 fw-bold">
                Read more...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostItem;
