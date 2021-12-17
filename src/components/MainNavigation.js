import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <nav className="navbar navbar-light fixed-top bg-light shadow-sm">
      <div className="container-lg">
        <Link to="/" className="navbar-brand  fw-bold fs-4">
          Blog App
        </Link>
        <button
          className="btn shadow-sm gradient1"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="black"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header d-flex flex-row-reverse">
          <button
            type="button"
            className="btn-close me-5"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="text-center fs-5 fw-bold ">
            <li>
              <Link data-bs-dismiss="offcanvas" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/create-new" data-bs-dismiss="offcanvas">
                Create new Post
              </Link>
            </li>
            {/* <li>
              <Link to="/about" data-bs-dismiss="offcanvas">
                About
              </Link>
            </li> */}
            <li>
              <Link to="/features" data-bs-dismiss="offcanvas">
                Features
              </Link>
            </li>
            <li>
              <Link to="/contact" data-bs-dismiss="offcanvas">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
