import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout(props) {
  return (
    <Fragment>
      <div className="d-flex flex-column min-vh-100">
        {/* thanks to this div footer always sticks to bottom */}
        <MainNavigation />
        {props.children}
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
